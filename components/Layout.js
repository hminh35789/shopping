import React from 'react'
import NarBar from './NarBar'
import Notify from './Notify'
import Modal from './Modal'

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