import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const productsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/products" }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    category: z.enum([
      "pantaloni",
      "maglie",
      "top",
      "abiti",
      "giacche",
      "accessori",
    ]),
    categoryLabel: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    sizes: z.string(),
    price: z.string(),
    badge: z.string().optional(),
    badgeType: z.enum(["default", "outline"]).optional(),
  }),
});

export const collections = {
  products: productsCollection,
};
