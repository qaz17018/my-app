module.exports = {
    parser: 'babel-eslint',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        // 添加或修改规则
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
