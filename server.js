const express = require("express");
const PORT = 5000 || process.env.PORT;
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

var users = [];

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/login", (req, res) => {

});

io.on("connection", (socket) => {
    console.log("new client connection");
    console.log(socket.id);
    socket.on("newUser", (name) => {
        const user = { id: socket.id, name: name };
        users.push(user);
        console.log(users);
        io.emit("userList", users);
    });
    socket.on("disconnect", () => {
        var tempIndex = users.findIndex(user => user.id === socket.id);
        if (tempIndex != -1) {
            users.splice(tempIndex, 1)[0];
        }
        io.emit("userList", users);
    });
});

server.listen(PORT, () => console.log(`Server listening on ${PORT}`));