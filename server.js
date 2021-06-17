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
    io.to(socket.id).emit("userList", users);
    socket.on("newUser", (name) => {
        const user = {id: socket.id, name: name};
        users.push(user);
        socket.broadcast.emit("addUser", {id: socket.id, name: name});
    });
});

server.listen(PORT, () => console.log(`Server listening on ${PORT}`));