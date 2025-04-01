import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx", // Ensure JSX is enabled
  },
  server: {
    port: 3000, // Make sure the server uses the correct port for Render
    proxy: {
      "/api": "https://api.victoryvisas.com", // Forward API requests to the backend API URL
    },
  },
  build: {
    outDir: 'dist', // Set the output directory for build artifacts
  },
});
