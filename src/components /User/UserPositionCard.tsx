import React, { useCallback, useEffect, useState } from 'react'
import emitter from "../../context/ev"

const UserPositionCard = () => {
  // @ts-ignore
  const [list, setList] = useState([{
    netValue: '--',
    size: null,
    price: null,
    side: null
  }])

  emitter.addListener("tradeSuccess",(list)=>{
    setList(list)
  })
  
  
  return (
    <div className='flex flex-row text-white text-center justify-between leading-10'>
      {
        list.map((item: any, ind: number) => {
          return (
            <>
              <div className='leading-10'>{item.side ?((item.side === 'long' ? 'Long' : 'Shotrt')) : '--'}</div>
              <div>{item.netValue ? item.netValue : '--'}</div>
              <div>{item.size ? item.size : '--'}</div>
              <div>{item.price ? item.price : '--'}</div>
            </>
          )
        })
      }
    </div>
  )
}

export default UserPositionCard