import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
    {
        ignores: ["dist/**"],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.ts", "**/*.js"],
        rules: {
            "no-console": "warn",
            semi: ["error", "always"],
        },
    },
];
