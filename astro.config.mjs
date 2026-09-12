import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://amartstoresalerno.com",
  trailingSlash: "never",
  integrations: [tailwind()],
  output: "static",
});
