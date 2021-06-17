const express = require ("express");
const PORT = 3000 || process.env.PORT;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));