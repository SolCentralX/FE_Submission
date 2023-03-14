import React, { FC, useMemo, ReactNode} from 'react'
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  GlowWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  BraveWalletAdapter,
} from "@solana/wallet-adapter-wallets"

require("@solana/wallet-adapter-react-ui/styles.css");

export const DEFAULT_ENDPOINT = "https://rpc.ankr.com/solana_devnet"

const Wallet: FC< {children: ReactNode}> = ({ children }) => {

  const wallets = useMemo(
    () => [
      new GlowWalletAdapter(),
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    []   
  )

  return (
    <ConnectionProvider endpoint={DEFAULT_ENDPOINT}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default Wallet