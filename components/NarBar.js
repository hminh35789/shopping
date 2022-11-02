/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/role-supports-aria-props */

import React, { useContext } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {DataContext} from '../store/GlobalState'
import Cookie from 'js-cookie'
import { useEffect, useState } from "react";
function NarBar() {
    const route = useRouter()
    const {state, dispatch} = useContext(DataContext)
    const { auth , cart} = state
    

    const isActive = (r)=>{
        if(r === route.pathname){
            return " active"
        }
        else{
            return ""
        }
    }
    
  
    const handleLogout = () => {
        Cookie.remove('refreshtoken', {path: 'api/auth/accessToken'})
        localStorage.removeItem('firstLogin')
        dispatch({ type: 'AUTH', payload: {} })
        dispatch({ type: 'NOTIFY', payload: {success: 'Logged out!'} })
        return route.push('/')
    }

    const adminRouter = () => {
        return(
            <>
            <Link href="/users">
                <a className="dropdown-item">Users</a>
            </Link>
            <Link href="/create">
                <a className="dropdown-item">Products</a>
            </Link>
            <Link href="/categories">
                <a className="dropdown-item">Categories</a>
            </Link>
            </>
        )
    }

    const loggedRouter = () => {
      return(
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src={auth.user.avatar} alt={auth.user.avatar} 
                  style={{
                      borderRadius: '50%', width: '30px', height: '30px',
                      transform: 'translateY(-3px)', marginRight: '3px'
                  }} /> {auth.user.name}
              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link href="/profile">
                     <a className="dropdown-item">Profile</a>
                  </Link>
                      
                
                  {
                      auth.user.role === 'admin' && adminRouter()
                  }
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item" onClick={handleLogout}>Logout</button>
              </div>
          </li>
       
      )
  }
  
 
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      handleScroll();
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  
    }, []);

   
  return (
    <div>
        <div className='menuu'>
            <div className={`navb  ${scrollY > 50  ? " navb2" : " "}`}>
                
                <a href="/" id="logo" className={scrollY > 50 ? "lose" : ""}>
                    <img  src="/icon2.png" alt="Vercel Logo"   />
                </a>
                <div className="navb-right">
                    hello
                </div>
                <div className="navb-left">
                    <p>(+84) 75578609</p>
                    <span></span>
                    <p>Binh Tan HCM</p>
                </div>
            </div>
        </div>
  

    {/* <div className='logoG'>
    <Link href="/">
            <a className={"name" + scrollY > 100 ? " scroll" : " " }>
            <img className={`name  ${scrollY > 100 ? " scroll" : " "}`} src="/icon2.png" alt="Vercel Logo" id='logo'  />
            </a>
        </Link>
        <div className={ scrollY > 100 ? " scroll" : " "} style={{  }}>
        {scrollY > 100
          ? "Scrolled more than 100px"
          : "Still somewhere near the top!"}
      </div>
    </div> */}
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${scrollY > 50  ? " navmenu" : " "}` }  >
        <Link href="/">
            <a className="navbar-brand">
            <img src="/icon2.png" alt="Vercel Logo"width={100}  />
            </a>
        </Link>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul className="navbar-nav p-1">
      <li className="nav-item">
          <Link href="/cart">
             <a className={"nav-link" + isActive('/cart')}>
                 <i className='fas fa-shopping-cart position-relative'aria-hidden="true">
                 <span className="position-absolute"
                    style={{
                        padding: '3px 6px',
                        background: '#ed143dc2',
                        borderRadius: '50%',
                        top: '-10px',
                        right: '-10px',
                        color: 'white',
                        fontSize: '14px'
                    }}>
                        {cart.length}
                 </span>
                 </i>Cart
            </a>
          </Link>
      </li>

      {
         Object.keys(auth).length === 0 
        ?  <li className="nav-item">
          <Link href="/signin">
              <a className={"nav-link" + isActive('/signin')}>
                  <i className='fas fa-user' aria-hidden="true"></i>Sign in
              </a>
          </Link>
       </li>
       : loggedRouter()
      }

    </ul>
  </div>
</nav>
</div>
  )
}

export default NarBar