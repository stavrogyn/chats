module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir : __dirname, 
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin', "prettier"],
    extends: [
      "prettier",
      "airbnb", 
      "airbnb/hooks"
    ],
    root: true,
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    ignorePatterns: [".eslintrc.js", "webpack.config.js", "jest.config.js"],
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'import/prefer-default-export': "off",
      "import/extensions": "off",
      "import/no-unresolved": "off",
      'react/react-in-jsx-scope': 'off',
      "comma-dangle": "off",
      'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    },
  };
  
