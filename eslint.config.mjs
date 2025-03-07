import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});
const eslintConfig = [
  ...compat.config({
    extends: [
      "eslint:recommended",
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
    ],
    rules: {
      "no-dupe-keys": ["error"],
      "jsx-a11y/alt-text": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-empty-interface": [
        "error",
        {
          allowSingleExtends: true,
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "@typescript-eslint/no-explicit-any": "error",
      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never",
        },
      ],
      "no-fallthrough": ["error", { commentPattern: "falls through" }],
      "import/no-self-import": ["error"],
      "import/newline-after-import": ["error"],
      "import/first": ["error"],
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandFirst: true,
          multiline: "last",
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: true,
          locale: "auto",
        },
      ],
      curly: ["error"],
      "object-shorthand": ["error", "properties"],
      "react/jsx-boolean-value": ["error", "never"],
      "react/self-closing-comp": ["error"],
    },
  }),
  {
    ignores: ["**/.next/*"],
  },
];
export default eslintConfig;
