import prefixwrap from "postcss-prefixwrap";
import tailwind from "@tailwindcss/postcss";

export default {
  plugins: [prefixwrap(".taxonium-component", { nested: true }), tailwind()],
};
