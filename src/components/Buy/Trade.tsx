import React from 'react'
import TradeInput from '../Trade/TradeInput'
import TradePay from '../Trade/TradePay'
import TradeTabs from '../Trade/TradeTabs'

interface TradeProps {
  datas: {
    entryPriceandFee: {
      price: any;
      fee: any
    },
    solBalance: any
  }
}

const Trade: React.FC<TradeProps> = ({datas}) => {
  return (
    <div className='flex flex-col w-1/4 h-4/5 space-y-2 pr-10'>
      <TradePay entryPriceandFee={datas.entryPriceandFee} solBalance={datas.solBalance}/>  
    </div>
  )
}

export default Trade