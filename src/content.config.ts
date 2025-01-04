import { defineCollection, reference, z } from "astro:content";

const categories = defineCollection({
  schema: z.object({
    title: z.string(),
    logo: z.string(),
    background: z.string(),
  }),
});

const meubi = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    image: z.string(),
    preview: z.string(),
    price: z.string(),
    shop: z.string(),
    url: z.string(),
    category: z.string(reference("categories")),
    gekocht: z.string().default("false")
  }),
});

export const collections = { categories, meubi };
