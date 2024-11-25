import z from "zod";


const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(120),
    status: z.boolean(),
    characteristics: z.array(
        z.object({
        name: z.string(),
        value: z.number(),
    }))
});

type User = z.infer<typeof schema>;

let data: User = {
    name: "João",
    email: "joao@gmail.com",
    age: 18,
    status: true,
    characteristics: [
        {name: "Mana", value: 10},
        {name: "Escudo", value: 50}
    ]
};

const result = schema.parse(data);
console.log(result);

