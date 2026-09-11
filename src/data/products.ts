import { getCollection } from "astro:content";

const rawProducts = await getCollection("products");
export const products = rawProducts.map((p) => ({ id: p.id, ...p.data }));

/** Products featured on homepage carousel (first 6) */
export const featuredProducts = products.slice(0, 6);
