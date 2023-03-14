import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Tab, Tabs } from '@mui/material';

interface props {
  seitchSide: any
}

const TradeTabs = ({seitchSide}: props) => {
  const [side, setSide] = React.useState('long');
  const handlerSide = (side: string) => {
    setSide(side);
    seitchSide(side)
    // handlerClearData
  };

  return (
    <div className='flex flex-row text-white'>
      <button className={`w-1/2 ${side === 'long' ? 'bg-[#2d42fc]' : 'bg-[#2d2e3f]'}  p-2 text-sm items-center flex flex-row justify-center space-x-3 rounded-l`} onClick={() => handlerSide('long')}>
        <TrendingUpIcon/>
        <span>Long</span>
      </button>
      <button className={`w-1/2 ${side === 'short' ? 'bg-[#2d42fc]' : 'bg-[#2d2e3f]'} p-2 text-sm items-center flex flex-row justify-center space-x-3 rounded-r`} onClick={() => handlerSide('short')}>
        <TrendingDownIcon/>
        <span>Short</span>
      </button>
    </div>
  )
}

export default TradeTabs