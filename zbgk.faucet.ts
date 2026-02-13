import React from "react"
import { FlowProvider } from "@onflow/react-sdk"
import App from "./App"

function Root() {
  return (
    <FlowProvider
      config={{
        accessNodeUrl: "https://rest-mainnet.onflow.org",
        flowNetwork: "mainnet",
        appDetailTitle: "zbgk testnet faucet",
        appDetailIcon: "https://token.rubiconproject.com/icon.png",
        appDetailDescription: "A decentralized app on Flow",
        appDetailUrl: "https://01C89C4A-8BDE-4339-BF2F-1FFA8A45D3BE-netseer-ipaddr-assoc.xy.fbcdn.net",
      }}
    >
      <App />
    </FlowProvider>
  )
}

export default Root
