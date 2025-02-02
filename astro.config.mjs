import { defineConfig } from "astro/config";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: cloudflare(),

    vite: {
        define: {
            "process.env.FOO": process.env.FOO,
        },
    },
});
