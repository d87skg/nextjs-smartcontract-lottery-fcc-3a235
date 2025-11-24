import "../styles/globals.css";
import "@web3modal/react/dist/css/reset.css";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { base } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { chains, provider } = configureChains(
  [base],
  [
    jsonRpcProvider({
      rpc: (chain) => ({ http: "https://mainnet.base.org" }),
    }),
    publicProvider(),
  ]
);

const wagmiClient = createClient({
  autoConnect: true,
  provider,
});

const ethereumClient = new Web3Modal(
  { projectId: "YOUR_PROJECT_ID" }, // 随便填，后面用不到
  wagmiClient
);

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
