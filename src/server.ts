import express from "express";
import z from "zod";
import { jsonPlaceholderResponse } from "./schemas/jsonPlaceholderResponse";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/ping", (req, res) => {
    res.json({ pong: true });
});

server.get("/posts", async (req, res) => {

    const request = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await request.json();

    const result = jsonPlaceholderResponse.safeParse(data);
    if (!result.success) {
        res.status(500).json({ error: "Ocorreu um erro interno." });
        return;
    }

    // processar

    let totalPosts = result.data.length;

    res.json({ total: totalPosts });
});




/*
server.post("/user", (req, res) => {
    const userSchema = z.object({
        name: z.string().min(2),
        email: z.string().email(),
        age: z.number().min(18).max(120)
    })

    const result = userSchema.safeParse(req.body);

    if (!result.success) {
        res.json({ error: "dados inválidos!" });
        return;
    }

    const { name, email, age } = result.data;
    // processo

    console.log("Processando...");
    console.log(name, email, age);

    res.status(201).json({ result: 'tudo ok' });
});
*/

server.listen(3000, () => {
    console.log("Rodando: http://localhost:3000/");
});