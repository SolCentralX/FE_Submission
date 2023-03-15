import Image from 'next/image'
import React from 'react'
import GroupWorkRoundedIcon from '@mui/icons-material/GroupWorkRounded';

const PoolTitle = () => {
  return (
    <div className='flex flew-row space-x-3 items-center p-1'>
        <Image src='/PolyIcon.svg' alt='poly_logo' height={30} width={30}/>
        <div className='flex flex-col text-white'>
          <div className='text-md'>SCX</div>
          <div className='text-xs'>SCX</div>
        </div>
    </div>
  )
}

export default PoolTitle