module.exports = {
    extends: [
        '@cknow/eslint-config',
        '@cknow/eslint-config/plugins/jest'
    ],
    rules: {
        'require-jsdoc': 'off',
        'jest/prefer-expect-assertions': 'off'
    }
};
