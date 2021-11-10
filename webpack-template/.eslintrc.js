const { join, resolve } = require('path')
const { readdirSync, statSync } = require('fs')
const { source } = require('./config.json')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      alias: readdirSync(resolve(__dirname, source)).reduce(
        (acc, name) => {
          if (statSync(join(__dirname, source, name)).isDirectory()) {
            acc.push([`#${name}`, resolve(__dirname, source, name)])
          }

          return acc
        },
        [
          ['@', resolve(__dirname, source)],
          ['#', resolve(__dirname, source)],
        ]
      ),
      node: {
        extensions: ['.js', '.ts'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'no-console': 0,
  },
}
