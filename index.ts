import tseslint from "typescript-eslint";

// @ts-expect-error
import reactRefresh from "eslint-plugin-react-refresh";

export const config = tseslint.config({
  files: ["**/*.ts", "**/*.tsx"],
  plugins: {
    "react-refresh": reactRefresh,
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
});
