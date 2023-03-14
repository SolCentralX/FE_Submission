import React from 'react'

const PoolSupply = () => {
  return (
    <div className='flex flex-row justify-between p-1'>
        <div className='flex flex-col text-slate-500'>
            <div>APR</div>
            <div>Total Supply</div>
        </div>
        <div className='flex flex-col text-white items-end'>
            <div>20.59%</div>
            <div>1,000,000 SCX ($506,390)</div>
        </div>
    </div>  
  )
}

export default PoolSupply