import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx", // Ensure JSX is enabled
  },
  server: {
    host: "0.0.0.0", // Ensure it's publicly accessible
    // eslint-disable-next-line no-undef
    port: process.env.PORT || 3000, // Use dynamic port provided by Render
    proxy: {
      "/api": "https://api.victoryvisas.com", // Forward API requests to the production API URL
    },
  },
  build: {
    outDir: 'dist', // Set the output directory for build artifacts
  },
});
