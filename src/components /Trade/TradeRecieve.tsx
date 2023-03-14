import React from 'react'

const TradeRecieve = () => {
  return (
    <div className='flex flex-row justify-between bg-[#2d2e3f] h-1/4 items-center rounded'>
        <div className='flex flex-col pl-3 pt-2 pb-2 space-y-4'>
            <div className='text-slate-500 text-xs'>Pay: $0.00</div>
            <div className='text-white text-2xl'>0</div>
        </div>
        <div className='flex flex-col pt-2 pb-2 pr-3 space-y-4 items-end'>
            <div className='text-slate-500 text-xs'>Balance: 0.00</div>
            <div className='text-white text-2xl'>SDX</div>
        </div>
    </div>
  )
}

export default TradeRecieve