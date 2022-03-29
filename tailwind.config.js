module.exports = {
  content: ["./public/**/*.{htm,html,js}"],
  theme: {
    extend: {
      // every time you make changes to it run `npm run build-css` to update
      // npx tailwindcss -i ./src/styles.css -o ./public/styles.css --watch
      colors:{
        primary: "#FF6363",
        secondary: {
          100: "E2E2D5",
          200: "888883"
        }
      },
      fontFamily: {
        body: ["Nunito"]
      }

    },
  },
  plugins: [],
}
