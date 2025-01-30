import { tailwindTransform } from "postcss-lit"

export default exports = {
    content: {
        files: ['./src/*.js'],
        transform: {
            ts: tailwindTransform
        }
    },
}