import React, { useCallback, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { useWallet } from "@solana/wallet-adapter-react"
import { useWalletModal, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Alert } from '@mui/material';

interface buttonProps {
  solAmount: any;
  solBalance: any;
  side: any
}

const TradeInput: React.FC<buttonProps> = ({solAmount, solBalance, side}) => {
  const {connected, disconnect, publicKey} = useWallet()
  const { setVisible } = useWalletModal()
  const isDisabled = !solAmount || solBalance < solAmount
  const [isSuccess, setIsSuccess] = useState(false)

  const connectWallet = () => {
    setVisible(true);
  };

  const handlerOpen = useCallback(() => {
    setIsSuccess(true)
  }, [])



  return (
    <div className='bg-[#2d42fc] h-1/5 items-center flex flex-row justify-between cursor-pointer rounded'>
      {!connected ? ( 
         <div className='w-full items-center flex flex-row justify-center space-x-2'>
            <AccountBalanceWalletIcon className='text-white'/>
           <WalletMultiButton className='bg-none'/>
         </div>
      ): (
        <>
          <div className='flex justify-center w-full items-center' style={{width: 'max-content'}}>
            <button
              onClick={handlerOpen}
              // disabled={isDisabled}
              className={`bg-[#2d42fc] text-center h-10 mr-4 ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {!solAmount ? 'Enter an amount' : solBalance < solAmount ? 'Insufficient SOL Balance' : `${side} SOL`}
            </button>
            <SendIcon className='pr-2 cursor-pointer'/>
          </div>
          {/* <input type="text" placeholder='Enter an amount' className='bg-[#2d42fc] text-center h-10'/> */}
        </>
        )
      }
      {isSuccess && <Alert severity="success">Success!</Alert>}
    </div>
  )
}

export default TradeInput