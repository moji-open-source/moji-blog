import antfu from "@antfu/eslint-config"

export default antfu(
  {
    react: true,
  },
  {
    rules: {
      'semi': [
        "error",
        "never",
      ],
      "prefer-const": "error",
      "quotes": [
        "error",
        "double",
      ],
    },
  },
)
