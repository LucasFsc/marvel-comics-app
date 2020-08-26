import React from "react"
import * as eva from "@eva-design/eva"
import { ApplicationProvider } from "@ui-kitten/components"
import theme from "./theme.json"

export default () => (
  <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }} />
)
