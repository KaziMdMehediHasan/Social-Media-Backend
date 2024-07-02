// @ts-check
import globals from "globals";
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
    {
        rules: {
            "no-unused-vars": "error",
            "no-console": "warn",
        },
    },
    {
        languageOptions: {
            globals: {
                ...globals.node
            }
        },
    },

    {
        ignores: ['node_modules/', 'dist/']
    }

);