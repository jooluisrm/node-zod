import z from "zod";

const pattern = z.object({
    name: z.literal("João")
});

const result = pattern.parse({
    name: "João"
})
console.log(result);

