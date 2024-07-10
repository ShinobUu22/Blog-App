import Footer from '@/components/comps/Footer'
import Navbar from '@/components/comps/Navbar'
import React, { ReactNode } from 'react'

const HomeLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <Navbar/>
      {children}
      <div className=" h-full">
      <Footer/>
      </div>
    </div>
  )
}

export default HomeLayout