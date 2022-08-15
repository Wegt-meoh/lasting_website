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
        'react'
    ],
    rules: {
        "@typescript-eslint/quotes":["error","double"],
        "semi-spacing":
            ["error",
            { "before": false, "after": true }],
        "no-console":["warn"],
        "@typescript-eslint/indent":["error",4],
        "@typescript-eslint/no-unused-vars":"warn",
        "@typescript-eslint/comma-spacing":["warn",{"before":false,"after":true}],
        "one-var-declaration-per-line":"warn",
        "one-var":["warn","never"],
        "@typescript-eslint/semi":["error","always"],
        "no-param-reassign":"warn",
        "prefer-destructuring":["error",{
            "array":false,
            "object":true
        }],
        "@typescript-eslint/explicit-function-return-type":"off"
    }
}
