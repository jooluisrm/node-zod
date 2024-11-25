import z from "zod";

const pattern = z.object({
    name: z.string()
});

const result = pattern.parse({
    name: "João",
})
console.log(result);

