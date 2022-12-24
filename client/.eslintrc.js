module.exports = {
    root: true,
    env: {
        browser: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { project: ['./tsconfig.json'] },
    plugins: ['@typescript-eslint', 'react'],
    rules: {
        '@typescript-eslint/strict-boolean-expressions': [
            2,
            {
                allowString: false,
                allowNumber: false,
            },
        ],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'react/jsx-uses-react': 'error',
    },
    ignorePatterns: ['src/**/*.test.ts', '.eslintrc.js'],
}
