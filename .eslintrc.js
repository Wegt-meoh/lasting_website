module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript'
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json'
    },
    plugins: [
        'react',
        'react-hooks'
    ],
    rules: {        
        "semi-spacing":
            ["error",
            { "before": false, "after": true }],
        "no-console":["warn"],
        
        "one-var-declaration-per-line":"warn",
        "one-var":["warn","never"],        
        "no-param-reassign":"warn",
        "prefer-destructuring":["error",{
            "array":false,
            "object":true
        }],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/indent":["error",4],
        "@typescript-eslint/no-unused-vars":"warn",
        "@typescript-eslint/comma-spacing": ["warn", { "before": false, "after": true }],
        "@typescript-eslint/quotes": ["error", "double"],
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies      
    }
}
