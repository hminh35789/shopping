import React from 'react'
import Modal from './Modal'
import NarBar from './NarBar'
import Notify from './Notify'

function Layout({children}) {
  return (
      <div>
        <NarBar>
            
        </NarBar>
        <Notify />
        <Modal />
        {children}
      </div>

    
  )
}

export default Layout