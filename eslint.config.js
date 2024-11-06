import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
    { ignores: ["dist"] },
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },
        settings: { react: { version: "18.3" } },
        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
            ...reactHooks.configs.recommended.rules,
            "react/jsx-no-target-blank": "off",
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
            "react/react-in-jsx-scope": "off", // Not needed in React 17+
            "react/prop-types": "off", // Turn off if using TypeScript
            "no-unused-vars": "warn", // Warn about unused variables
            "no-console": "warn", // Warn about console statements
            "indent": ["error", 4], // Enforce 4 spaces for indentation
            "quotes": ["error", "double"], // Enforce single quotes
            "semi": ["error", "always"], // Require semicolons
            "react/no-danger": "warn", // Avoid using dangerouslySetInnerHTML
            // "react/no-array-index-key": "warn", // Avoid using array index as key in lists
            "react/jsx-key": "error", // Ensure each JSX element in an array has a unique key
            "react-hooks/rules-of-hooks": "error", // Enforce rules of hooks
            "react-hooks/exhaustive-deps": "warn", // Warn if dependencies in useEffect/useCallback are not specified
            "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }], // Allow JSX in .js and .jsx files
            "no-duplicate-imports": "error", // Disallow duplicate imports
            // "no-magic-numbers": ["warn", { ignore: [0, 1] }], // Avoid magic numbers except for 0 and 1
            "consistent-return": "warn", // Ensure consistent return statements
        },
    },
];
