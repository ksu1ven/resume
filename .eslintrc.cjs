module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', 'vite.config.ts', 'vitest.config.ts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', 'react-refresh', '@typescript-eslint', 'prettier'],
    rules: {
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 0,
        'import/no-absolute-path': 0,
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'no-nested-ternary': 'off',
        'react/no-array-index-key': 'off',
        'prettier/prettier': 'error',
        'import/prefer-default-export': 'off',
        'jsx-a11y/media-has-caption': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array',
            },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'explicit',
                overrides: {
                    accessors: 'explicit',
                    constructors: 'off',
                    methods: 'explicit',
                    properties: 'explicit',
                    parameterProperties: 'explicit',
                },
            },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                project: 'tsconfig.json',
            },
        },
    },
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: './',
    },
};
