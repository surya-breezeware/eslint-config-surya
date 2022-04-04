module.exports={
    
    extends:[
        'airbnb',
        'airbnb/hooks',
        'plugin:prttier/recommended',
        './.eslintrc-base.js'
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
      requireConfigFile: false,
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    }
}