import React from 'react'
import UserPositionCard from './UserPositionCard'

const UserOrder = () => {
  return (
    <>
    <div className='border-b border-1 flex flex-row text-slate-400 justify-between w-full pb-2'>
      <div>Type</div>
      <div>Order</div>
      <div>Price</div>
      <div>Mark Price</div>
    </div>
    <div className='overflow-auto h-8 space-y-1 text-white'>
      No orders
    </div>
    </>
  )
}

export default UserOrder