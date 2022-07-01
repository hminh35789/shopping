import React from 'react'
import NarBar from './NarBar'
import Notify from './Notify'
import Modal from './Modal'
import Banner from './Banner'

function Layout({children}) {
  return (
      <div >
        <div className='annouce'>
           <h6> A small fish in the ocean!</h6>
        </div>
        
        <NarBar>
            
        </NarBar>
        
        <Banner />

        <Notify />
        <Modal />
        <div className='container'>
         {children}
        </div>
       
      </div>

    
  )
}

export default Layout