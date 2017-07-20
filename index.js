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
        'class-methods-use-this': ['off'],
        'import/prefer-default-export': ['off'],
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
        'react/prefer-stateless-function': ['off'],
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
        'react/no-multi-comp': ['off']
    }
};
