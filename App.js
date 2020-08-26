import React from "react"
import * as eva from "@eva-design/eva"
import { ApplicationProvider } from "@ui-kitten/components"
import theme from "./theme.json"
import Navigator from "~/router"

export default () => (
  <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
    <Navigator />
  </ApplicationProvider>
)
