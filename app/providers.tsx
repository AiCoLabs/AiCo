'use client';
import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  baseGoerli
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

//add taiko Jolnir
import { Chain } from '@wagmi/core'
export const jolnir = {
  id: 167007,
  name: 'Taiko Jolnir',
  network: 'taiko',
  nativeCurrency: {
    decimals: 18,
    name: 'Taiko',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://rpc.jolnir.taiko.xyz'] },
    default: { http: ['https://rpc.jolnir.taiko.xyz'] },
  },
  blockExplorers: {
    etherscan: { name: 'taiko', url: 'https://explorer.jolnir.taiko.xyz/' },
    default: { name: 'taiko', url: 'https://explorer.jolnir.taiko.xyz/' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11907934,
    },
  },
} as const satisfies Chain

const { chains, publicClient } = configureChains(
  [
    jolnir,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [jolnir] : []),
  ],
  [publicProvider()]
);

const projectId = '3d3cb5e586db5bf6994959eb4755bd4a';

const { connectors } = getDefaultWallets({
  appName: 'AiCoo Web3',
  projectId,
  chains,
});

const demoAppInfo = {
  appName: 'AiCoo Web3 Dapp',
};

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider modalSize="compact" chains={chains} appInfo={demoAppInfo}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}