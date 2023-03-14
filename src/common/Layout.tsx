import {FC, ReactNode} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type LayoutProps = {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className="flex h-screen flex-col bg-[#101124]">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout