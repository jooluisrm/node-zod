import express from "express";

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.get("/ping", (req, res) => {
    res.json({pong: true});
});

server.listen(3000, () => {
    console.log("Rodando: http://localhost:3000/");
});