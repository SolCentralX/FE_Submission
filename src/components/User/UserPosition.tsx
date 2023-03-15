import React from 'react'
import UserPositionCard from './UserPositionCard'

const UserPosition = () => {
  return (
    <>
    <div className='border-b border-1 flex flex-row text-slate-400 justify-between w-full pb-2'>
      <div>Position</div>
      <div>Net Value</div>
      <div>Size</div>
      {/* <div>Collateral</div> */}
      <div>Entry Price</div>
    </div>
    <div className='overflow-auto h-8 space-y-1'>
      <UserPositionCard/>
    </div>
    </>
  )
}

export default UserPosition