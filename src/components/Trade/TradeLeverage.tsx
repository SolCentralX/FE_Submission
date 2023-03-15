import React, { useCallback, useState } from 'react'
import Slider from '@mui/material/Slider'

interface props {
  leverage: any
}

const TradeLeverage = ({leverage}: props) => {
  const sliderChange = useCallback((val: any) => {
    leverage(val.target.value)
  }, [])


  return (
    <div className='text-slate-400 flex flex-col space-y-2'>
        <div>Leverage Slider</div>
        <Slider
            aria-label="Small steps"
            defaultValue={0}
            step={1}
            min={1}
            max={10}
            // marks={marks}
            marks
            valueLabelDisplay="auto"
            onChange={sliderChange}
        />
    </div>
  )
}

export default TradeLeverage