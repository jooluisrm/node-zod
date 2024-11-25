import z from "zod";

const pattern = z.object({
    name: z.string(),
    age: z.number(),
    active: z.boolean(),
    birthDate: z.date(),
    algo: z.null(),
    nunca: z.never()
});

const result = pattern.parse({
    name: "João"
})
console.log(result);

