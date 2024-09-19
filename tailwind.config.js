/** @type {import("tailwindcss").Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "text-color-dark": "var(--text-color-dark)",
        "text-color-gray": "var(--text-color-gray)",
        "text-color-gray-light": "var(--text-color-gray-light)",
        "border-color-gray": "var(--border-color-gray)",
        "color-navy": "var(--color-navy)",
        "color-blue": "var(--color-blue)",
        "color-blue-hover": "var(--color-blue-hover)",
        "color-blue-light": "var(--color-blue-light)",
        "color-green": "var(--color-green)",
        "color-red": "var(--color-red)",
        "color-orange": "var(--color-orange)",
        "color-white": "var(--color-white)",
        "color-black-5": "var(--color-black-5)",
        "color-black-10": "var(--color-black-10)",
        "color-black-50": "var(--color-black-50)",
      },
      width: {
        "modal-default-width": "640px",
      },
      height: {
        "container-height": "calc(100% - 100px)",
        "modal-default-height": "360px",
        "modal-content-height": "calc(100% - 32px)",
      },
      backgroundImage: {
        "not-found": "var(--not-found-image)",
      },
    },
  },
  plugins: [],
};
