module.exports = {
    plugins: ['react', 'simple-import-sort'],
    env: {
      browser: true,
      es6: true,
      node: true
    },
    "parser":"@babel/eslint-parser",
    "parserOptions": {
      "babelOptions": {
         "presets": ["@babel/preset-react"]
      }
  },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      "spaced-comment":"warn",
      "react/jsx-filename-extension": "off",
      "react/no-unescaped-entities":"off",
      "no-unused-vars":"warn",
      "no-undef":"warn",
      "react/function-component-definition":"off",
      "no-shadow":"warn",
      "quote-props":"warn",
      "object-shorthand":"warn",
      "prefer-arrow-callback":"off",
      "react/prop-types":"off",
      "react/jsx-props-no-spreading":"off",
      "no-unused-expressions":"off",
      "arrow-body-style":"off",
      "react/no-array-index-key":"warn",
      "react/jsx-no-constructed-context-values":"off",
      "no-use-before-define":"off",
      "array-callback-return":"warn",
      "no-unsafe-optional-chaining":"warn",
      "class-methods-use-this":"off",
      "jsx-a11y/click-events-have-key-events":"off",
      "jsx-a11y/no-static-element-interactions":"warn"
    },
    overrides: [
      {
        files: ['*.jsx', '*.js', '*.ts', '*.tsx'],
        rules: {
          'simple-import-sort/imports': [
            'error',
            {
              groups: [
                // Packages. `react` related packages come first.
                // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                ['^react', '^next', '^@mui(/.*|$)', '^@?\\w'],
                // Absolute imports and Relative imports.
                [
                  '^(utils|services|hooks|hoc|types|contexts|dictionary|components)(/.*|$)',
                  '^\\.'
                ],
                // for scss imports.
                ['^[^.]']
              ]
            }
          ]
        }
      }
    ]
  }