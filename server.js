//Basic socket.io server to broadcast messages to all connected clients.

const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const path = require("path");

//Server build folder.
app.use(express.static(path.join(__dirname, "build")));

var users = [];

app.get("/", (req, res) => {
    res.send("?");
});

io.on("connection", (socket) => {
    console.log("new client connection");
    console.log(socket.id);
    //When a new user joins let everyone already in the room know a user has joined.
    socket.on("newUser", (name) => {
        const user = { id: socket.id, name: name };
        users.push(user);
        io.emit("userList", users);
        socket.broadcast.emit("messageReceive", {id: socket.id, username: name, join: true, leave: false});
    });
    //When a user leaves let everyone already in the room know a user has left.
    socket.on("disconnect", () => {
        var tempIndex = users.findIndex(user => user.id === socket.id);
        if (tempIndex != -1) {
            socket.broadcast.emit("messageReceive", {id: socket.id, username: users[tempIndex].name, join: false, leave: true});
            users.splice(tempIndex, 1)[0];
        }
        io.emit("userList", users);
        
    });
    socket.on("messageSend", (message) => {
        socket.broadcast.emit("messageReceive", message);
    });
});

server.listen(PORT, () => console.log(`Server listening on ${PORT}`));