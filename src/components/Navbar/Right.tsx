import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react"

const Right = () => {
  const {connected, disconnect, publicKey} = useWallet()
  const disconnectWallet = () => {
    disconnect();
  }
  return (
    <div className='flex flex-row text-white border-neutral-600 border-2 rounded-lg items-center pl-2' onClick={()=> disconnectWallet()}>
        <AccountBalanceWalletIcon/>
        <WalletMultiButton className='bg-white'/>
    </div>
  )
}

export default Right