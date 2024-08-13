import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
