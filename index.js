
const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
    'extends': 'eslint:recommended',
    'env': {
        'node':    true,
        'browser': true,
        'es6':     true
    },
    'plugins': [
        'react'
    ],
    'rules': {
        // Use indentation of 4 spaces
        'indent': [ ERROR, 4 ],

        // File should end with a new line
        'eol-last': ERROR,

        // No extra whitespaces at the end of lines
        'no-trailing-spaces': ERROR,

        // Use single quotes
        'quotes': [ ERROR, 'single' ],

        // Use unix line break (\n and not \r\n)
        'linebreak-style': [ ERROR, 'unix' ],

        // Require object shorthand (see spec/object-shorthand.js)
        'object-shorthand': [ ERROR, 'always' ],

        // Always end lines with semi-colons
        'semi': [ ERROR, 'always' ],

        // Dont accept unused variables
        'no-unused-vars': [ ERROR, {
            'vars': 'all',
            'args': 'none'
        } ],

        'no-extra-boolean-cast': [ OFF ],

        // Require space between comment and content
        'spaced-comment': [ ERROR, 'always' ],

        // Spacing
        'block-spacing':                 ERROR,
        'space-before-blocks':           ERROR,
        'space-before-function-paren':   [ERROR, 'never'],
        'space-infix-ops':               ERROR,
        'space-unary-ops':               ERROR,
        'template-curly-spacing':        [ERROR, 'never'],
        'no-whitespace-before-property': ERROR,
        'no-spaced-func':                ERROR,
        'no-multi-spaces':               ERROR,
        'no-mixed-spaces-and-tabs':      ERROR,
        'no-multiple-empty-lines':       [ ERROR, { 'max': 2, 'maxEOF': 1 }],
        'key-spacing':                   [ ERROR, {
            'beforeColon': false,
            'afterColon': true,
            'mode': 'minimum'
        } ],
        'lines-around-comment': [ WARNING, {
            'beforeBlockComment': true,
            'afterBlockComment': false
        } ],

        // Require presence of radix in parseInt
        'radix': ERROR,

        // JS Weird syntax
        'no-with':                    ERROR,
        'no-void':                    ERROR,
        'no-throw-literal':           ERROR,
        'no-shadow-restricted-names': ERROR,
        'no-shadow':                  WARNING,
        'no-sequences':               ERROR,
        'no-redeclare':               ERROR,
        'no-new-symbol':              ERROR,
        'no-new-object':              ERROR,
        'no-negated-in-lhs':          ERROR,
        'no-native-reassign':         WARNING,
        'new-parens':                 ERROR,
        'no-array-constructor':       ERROR,
        'no-dupe-args':               ERROR,
        'comma-dangle':               [ ERROR, 'never' ],
        'comma-style':                [ ERROR, 'last' ],
        'computed-property-spacing':  [ ERROR, 'never' ],
        'dot-location':               [ ERROR, 'property' ],

        // functions
        'no-func-assign': WARNING,

        // Regexp
        'no-regex-spaces': WARNING,
        'no-invalid-regexp': WARNING,

        // ES6
        // Use const and let instead of var
        'no-var':                  ERROR,
        'prefer-spread':           ERROR,
        'prefer-template':         WARNING,
        'prefer-rest-params':      WARNING,
        'no-useless-call':         ERROR,
        'no-use-before-define':    [ WARNING, { 'functions': false } ],
        'prefer-const':            [ ERROR, { 'destructuring': 'all' } ],
        'no-useless-computed-key': WARNING,
        'no-useless-constructor':  WARNING,
        'no-unused-expressions':   WARNING,
        'no-unreachable':          ERROR,
        'no-undef':                ERROR,
        'constructor-super':       ERROR,

        // React configuration
        'react/jsx-uses-vars':            ERROR,
        'react/jsx-uses-react':           ERROR,
        'react/jsx-no-undef':             ERROR,
        'react/jsx-no-duplicate-props':   ERROR,
        'react/no-deprecated':            ERROR,
        'react/no-did-mount-set-state':   ERROR,
        'react/no-did-update-set-state':  ERROR,
        'react/no-direct-mutation-state': ERROR,
        'react/no-is-mounted':            ERROR,
        'react/no-unknown-property':      ERROR,
        'react/prop-types':               ERROR,
        'react/react-in-jsx-scope':       ERROR,

        // Specify whether double or single quotes should be used in JSX attributes
        // http://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': [ ERROR, 'prefer-double' ],

        // Disallow yodo condition
        // http://eslint.org/docs/rules/yoda
        'yoda': [ ERROR, 'never' ]
    },
    'parserOptions': {
        'ecmaVersion': 5,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true,
            'experimentalObjectRestSpread': true
        }
    }
};
