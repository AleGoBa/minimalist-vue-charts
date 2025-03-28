import { defineConfig } from "eslint/config";
import eslint from '@eslint/js';
import globals from "globals";
import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      js,
      vue: pluginVue,
      prettier
    },
    extends: [
        eslint.configs.recommended,
      ...pluginVue.configs['flat/strongly-recommended'],
      eslintConfigPrettier
    ]
  }
]);