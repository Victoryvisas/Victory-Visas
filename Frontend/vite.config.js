import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx", // Ensure JSX is enabled
  },
  server: {
    proxy: {
      "/api": "http://localhost:5000", // Forward any API request to the backend
    },
  },
});
