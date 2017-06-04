const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
    'extends': 'airbnb',
    'rules': {
        // Base
        'indent': [ERROR, 4],
        'func-style': [WARNING, 'declaration', {
            'allowArrowFunctions': true
        }],
        'prefer-arrow-callback': [ERROR, {
            'allowNamedFunctions': true
        }],
        'no-extra-boolean-cast': [OFF],
        'no-multi-spaces': [ERROR, {
            'exceptions': {
                'ImportDeclaration': true,
                'Property': true,
                'VariableDeclarator': true,
                'AssignmentExpression': true
            }
        }],
        'lines-around-comment': [WARNING, {
            'beforeBlockComment': true,
            'afterBlockComment': false
        }],
        'radix': WARNING,
        'no-case-declarations': OFF,
        'no-with': ERROR,
        'no-shadow': WARNING,
        'no-negated-in-lhs': ERROR,
        'no-native-reassign': WARNING,
        'comma-dangle': [ERROR, 'never'],
        'no-func-assign': WARNING,
        'no-regex-spaces': WARNING,
        'no-invalid-regexp': WARNING,
        'key-spacing': [WARNING, { mode: 'minimum' }],

        // ES6
        'prefer-template': OFF,
        'prefer-rest-params': WARNING,
        'no-useless-call': ERROR,
        'no-use-before-define': [WARNING, { 'functions': false }],
        'no-useless-computed-key': WARNING,
        'no-useless-constructor': WARNING,
        'no-unused-expressions': WARNING,
        'import/no-extraneous-dependencies': [ERROR, {
            devDependencies: [
                'test/**', // tape, common npm pattern
                'tests/**', // also common npm pattern
                'spec/**', // mocha, rspec-like pattern
                '**/__tests__/**', // jest pattern
                'test.{js,jsx}', // repos with a single test file
                'test-*.{js,jsx}', // repos with multiple top-level test files
                '**/*.{test,spec}.{js,jsx}', // tests where the extension denotes that it is a test
                '**/webpack.config.js', // webpack config
                '**/webpack.config.*.js', // webpack config
                '**/rollup.config.js', // rollup config
                '**/rollup.config.*.js', // rollup config
                '**/gulpfile.js', // gulp config
                '**/gulpfile.*.js', // gulp config
                '**/Gruntfile', // grunt config
                '**/scripts/**' // scripts
            ],
            optionalDependencies: false
        }],

        // React
        'react/jsx-indent': [ERROR, 4],
        'react/jsx-indent-props': [ERROR, 4],
        'react/jsx-filename-extension': OFF,
        'react/jsx-wrap-multilines': [ERROR, {
            declaration: false,
            assignment: false,
            return: true
        }],
        'react/no-direct-mutation-state': ERROR
    }
};
