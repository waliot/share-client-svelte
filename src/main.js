import App from "./App.svelte"
import { COLOR_PALETTE } from "@waliot-oss/share-client-sdk"

document.body.style.setProperty("--wlt-primary-color", COLOR_PALETTE.primaryColor)
document.body.style.setProperty("--wlt-background-color", COLOR_PALETTE.backgroundColor)

const app = new App({
  target: document.body
})

export default app
