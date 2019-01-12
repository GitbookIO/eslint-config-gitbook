module.exports = {
    extends: [
        'airbnb',
        'plugin:flowtype/recommended',
        'prettier',
        'prettier/flowtype',
        'prettier/react'
    ],
    plugins: ['flowtype', 'prettier'],
    rules: {
        eqeqeq: ['off'],
        'no-bitwise': ['off'],
        'arrow-body-style': ['error', 'as-needed'],
        'no-use-before-define': ['error', { functions: false }],
        'no-param-reassign': ['error', { props: false }],
        'no-unused-vars': [
            'error',
            {
                args: 'none'
            }
        ],
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4
            }
        ],
        'prefer-destructuring': ['warn'],
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: true
            }
        ],

        // Classes
        'class-methods-use-this': ['off'],
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true
            }
        ],

        // Imports
        'import/prefer-default-export': ['off'],

        // React
        'react/no-array-index-key': ['warn'],
        'react/jsx-no-bind': ['off'],
        'react/no-unescaped-entities': ['warn'],
        'react/default-props-match-prop-types': [
            'error',
            {
                allowRequiredDefaults: true
            }
        ],
        'react/prefer-stateless-function': ['warn'],
        'react/jsx-filename-extension': ['off'],
        'react/sort-comp': [
            'error',
            {
                order: [
                    'type-annotations',
                    'state',
                    'constructor',
                    'static-methods',
                    'lifecycle',
                    'everything-else',
                    '/^on.+$/',
                    'render'
                ]
            }
        ],
        'react/no-multi-comp': ['off'],
        'react/destructuring-assignment': ['warn', 'always']
    }
};
