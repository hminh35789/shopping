import React from 'react'
import NarBar from './NarBar'
import Notify from './Notify'
function Layout({children}) {
  return (
      <div>
        <NarBar>
            
        </NarBar>
        <Notify />
        {children}
      </div>

    
  )
}

export default Layout