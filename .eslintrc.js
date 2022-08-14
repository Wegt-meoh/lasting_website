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
        "@typescript-eslint/semi-spacing":"error",
        "@typescript-eslint/no-console":"warn",
        "@typescript-eslint/indent":["error",4],
        "@typescript-eslint/no-unused-vars":"warn",
        "@typescript-eslint/comma-spacing":["warn",{"before":false,"after":true}],
        "@typescript-eslint/one-var-declaration-per-line":"warn",
        "@typescript-eslint/one-var":["warn","never"],
        "@typescript-eslint/semi":["error","always"],
        "@typescript-eslint/no-param-reassign":"warn",
        "@typescript-eslint/prefer-destructuring":["error",{
            "array":false,
            "object":true
        }]  
    }
}
