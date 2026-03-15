import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        map: resolve(__dirname, "map/index.html"),
        zoos: resolve(__dirname, "zoos/index.html"),
        contactUs: resolve(__dirname, "contact-us/index.html"),
        registration: resolve(__dirname, "registration/index.html"),
      },
    },
  },
});
