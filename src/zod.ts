import z from "zod";


const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(120)
})

let data = {
    name: "João",
    email: "joao@gmail.com",
    age: 19
};
