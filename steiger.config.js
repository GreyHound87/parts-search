import { defineConfig } from "steiger";
import fsd from "@feature-sliced/steiger-plugin";

export default defineConfig([
  ...fsd.configs.recommended,
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/.agents/**"],
  },
  {
    rules: {
      "fsd/insignificant-slice": "off",
      "fsd/excessive-slicing": "error",
      "fsd/no-segmentless-slices": "error",
      "fsd/public-api": "error",
      "fsd/segments-by-purpose": "error",
    },
  },
  {
    // По факту срабатывания: providers каноничный сегмент слоя app
    files: ["src/app/providers/**"],
    rules: { "fsd/segments-by-purpose": "off" },
  },
]);
