import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: mode === 'development',
  },
  root: process.cwd(),
  // Include specific environment variables that should be exposed to the client
  define: {
    'process.env.VITE_API_BASE_URL': JSON.stringify(process.env.VITE_API_BASE_URL),
    'process.env.VITE_ENABLE_ANALYTICS': JSON.stringify(process.env.VITE_ENABLE_ANALYTICS),
    'process.env.VITE_APP_VERSION': JSON.stringify(process.env.VITE_APP_VERSION),
  },
}));
