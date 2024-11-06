module.exports = {
    parser: "@babel/eslint-parser",
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    "env": {
        "browser": true,
        "node": true
    },
    rules: {
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
    settings: {
        react: {
            version: "detect", // Automatically detect React version
        },
    },
    globals: {
        module: "readonly", // Ensure 'module' is recognized as a global variable
    },
};
