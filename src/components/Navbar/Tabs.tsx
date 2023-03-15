import { Tab } from '@headlessui/react'

import React from 'react'
import { useRouter } from 'next/router'
import { PerpetualsClient } from '@/context/PerpProvider'

export const Tabs = () => {
    const router = useRouter()

  return (
    <div className='flex flex-row space-x-10 h-1/2 items-center'>
        <button className=' rounded-lg text-white text-lg p-1 w-20' onClick={()=>router.push('/')}> 
            Dashboard
        </button>
        {/* <button className='rounded-lg w-20 text-white text-sm p-2'> 
            Earn
        </button>
        <button className=' rounded-lg  w-20 text-white text-sm p-2'> 
            Create LP
        </button> */}
    </div>
)
}


