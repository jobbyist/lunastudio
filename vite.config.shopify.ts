import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Vite config for building Shopify theme assets
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "theme/assets",
    emptyOutDir: false, // Don't clear the assets folder
    rollupOptions: {
      input: {
        app: path.resolve(__dirname, "src/main.tsx"),
      },
      output: {
        entryFileNames: "react-app.js",
        chunkFileNames: "react-app-[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "react-app.css";
          }
          return "[name].[ext]";
        },
      },
    },
    // Minify for production
    minify: "terser",
    sourcemap: false,
  },
  // Use absolute URLs for assets since they'll be served from Shopify CDN
  base: "",
});
