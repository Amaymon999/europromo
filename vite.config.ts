import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import path from "path";
import { products } from "./src/data/products";
import { blogPosts } from "./src/data/blog";

const productRoutes = products.map((p) => `/prodotti/${p.slug}`);
const blogRoutes = blogPosts.map((p) => `/blog/${p.slug}`);

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://www.europromo.it",
      dynamicRoutes: [
        "/",
        "/prodotti",
        ...productRoutes,
        "/settori-gdo",
        "/chi-siamo",
        "/progetti",
        "/blog",
        ...blogRoutes,
        "/contatti",
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
