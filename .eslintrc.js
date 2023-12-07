module.exports = {
  settings: {
    react: {
      version: "detect"
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "plugin:react/jsx-runtime", "plugin:react-hooks/recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@stylistic/js"],
  rules: {
    "@stylistic/js/quotes": ["error", "double"],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }
}
