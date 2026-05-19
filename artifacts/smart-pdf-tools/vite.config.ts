import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// ---------------------------------------------------------------------------
// Environment variables
// ---------------------------------------------------------------------------
// BASE_PATH: defaults to "/" — set to a sub-path (e.g. "/tools") when deploying
// under a non-root path. Vercel deployments at a custom domain use "/".
// PORT: defaults to 3000 — only used by the dev/preview server, NOT by the
// production build. Vercel does not set PORT during build, so a default is
// required to avoid crashes.
// ---------------------------------------------------------------------------
const basePath = process.env.BASE_PATH || "/";
const port = Number(process.env.PORT || "3000");

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    // Only use Replit-specific plugins when running inside Replit
    ...(process.env.REPL_ID !== undefined ? [runtimeErrorOverlay()] : []),
    ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: process.env.PORT !== undefined,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
