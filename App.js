import React from "react"
import * as eva from "@eva-design/eva"
import { ApplicationProvider } from "@ui-kitten/components"
import { Provider } from "react-redux"
import theme from "./theme.json"
import Navigator from "~/router"
import store from "~/store"

export default () => (
  <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
    <Provider store={store}>
      <Navigator />
    </Provider>
  </ApplicationProvider>
)
