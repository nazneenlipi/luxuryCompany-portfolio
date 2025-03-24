import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      // Add more rules here:
      'no-unused-vars': 'off', // Example: Disable no-unused-vars
      'no-console': 'off', // Example: Disable no-console
      '@typescript-eslint/no-explicit-any': 'off', // Example: Disable no explicit any
      'some-other-rule': 'off', // Example: disable some other rule.
    },
  },
];

export default eslintConfig;