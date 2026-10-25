import react from "@vitejs/plugin-react";
import { defineConfig, type PluginOption } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";


export default defineConfig(async ({ mode, command }) => {
  const plugins: PluginOption[] = [react(), tailwindcss()];

  if (command === "serve") {
    const { default: mkcert } = await import("vite-plugin-mkcert");
    plugins.push(mkcert());
  }

  return {
    plugins,
    base: mode === "production" ? "/DroTeco/" : "/",
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
      },
    },
    server: {
      https: {},
      port: 5173,
      strictPort: true,
    },
  };
});
