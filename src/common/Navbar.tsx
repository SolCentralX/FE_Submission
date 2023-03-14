import Right from '@/components/Navbar/Right'
import { Tabs } from '@/components/Navbar/Tabs'
import React from 'react'


const Navbar = () => {
  return (
    <div className='bg-[#101124] h-15 flex flex-row w-full items-center border-b justify-between p-3'>
        <Tabs/>
        <Right/>
    </div>
  )
}

export default Navbar