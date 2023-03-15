import BuyTitle from '@/components/Buy/BuyTitle'
import Pool from '@/components/Pool/Pool'
import Trade from '@/components/Buy/Trade'
import React from 'react'

const index = () => {
  return (
    <div className='flex flex-col pl-5 h-full space-y-10 w-full pt-10'>
        <BuyTitle/>
        <div className='flex flex-row space-x-20 h-1/2 w-full pl-20'>
            <Pool/>
            <Trade/>
            {/* <TradePay entryPriceandFee={datas.entryPriceandFee} solBalance={datas.solBalance}/>   */}

        </div>
    </div>
  )
}

export default index