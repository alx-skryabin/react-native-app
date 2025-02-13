module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native/all',
    'prettier' // Отключает конфликты с Prettier
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false, // Без точки с запятой
        trailingComma: 'none' // Без запятой в конце массива/объекта
      }
    ],
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off', // React в JSX не нужен в новых версиях
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-native/no-inline-styles': 'off', // Разрешает inline-стили в React Native
    'react-native/no-raw-text': 'off' // Позволяет строки без <Text> в JSX
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: ['__tests__', 'android', 'node_modules', 'ios', '.idea', '.bundle']
}
