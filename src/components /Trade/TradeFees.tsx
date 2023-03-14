import React from 'react'

interface TradeFeesProps {
  entryPriceandFee: {
    price: any;
    fee: any;
  },
  leverage: any
}

const TradeFees:React.FC<TradeFeesProps> = ({entryPriceandFee, leverage}) => {
  const price = entryPriceandFee.price || null
  const fee = entryPriceandFee.fee || null
  return (
    <div className='flex flex-row justify-between text-xs pl-1 pr-1'>
        <div className='flex flex-col text-slate-400 space-y-2'>
          {/* <div>Collateral</div> */}
          <div className='leading-4'>Leverage</div>
          <div className='leading-4'>Entry Price</div>
          <div className='leading-4'>Fees</div>
        </div>
        <div className='flex flex-col text-white space-y-2 items-end'>
          <div className='leading-4'>{`${leverage}X`}</div>
          <div className='leading-4'>{price ? (Math.floor(price * 0.000001 * 10000)/10000).toFixed(4) : '--'}</div>
          {/* 18.49 */}
          <div className='leading-4'>{fee ? fee * 0.0001 : '--'}%</div>
          {/* 2.6% */}
        </div>
    </div>
  )
}

export default TradeFees