import React from 'react'

const PoolPrice = () => {
  return (
    <div className='flex flex-row justify-between border-b border-1 p-1'>
        <div className='flex flex-col text-slate-500'>
            <div>Price</div>
            <div>Wallet</div>
            <div>Staked</div>
        </div>
        <div className='flex flex-col text-white items-end'>
            <div>$0.939</div>
            <div>0.0000SCX ($0.00)</div>
            <div>0.0000SCX ($0.00)</div>
        </div>
    </div>
  )
}

export default PoolPrice