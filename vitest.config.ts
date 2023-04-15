import {defineConfig} from "vitest/config";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./src/setupTests.ts","@testing-library/react/dont-cleanup-after-each"],
    },
    esbuild: {
        loader: "tsx",
        include: /src\/.*\.[tj]sx?$/,
        exclude: [],
    },
});
