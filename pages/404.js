import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div style={{marginTop: "50px", marginLeft: '20px'}}>
       <Link href="/">
          <a>Trang chu</a>
       </Link>
    </div>
  )
}

export default Footer