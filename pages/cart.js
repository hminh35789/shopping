import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../store/GlobalState'
// import CartItem from '../components/CartItem'
import Link from 'next/link'
import { getData, postData } from '../utils/fetchData'
import { useRouter } from 'next/router'

function Cart() {
  const { state, dispatch } = useContext(DataContext)
  const { cart, auth, orders } = state

  if( cart.length === 0 ) 
  return (
    <div>
       <img className="img-responsive w-80" src="/shopping.jpg" alt="not empty"/>
        <Link href='/'>
         <a >
         <h2>Not empty</h2>
         </a>
        </Link>
        
      </div>
     
  )
  
  return (
    <div>
      <Head>
          <title>Cart Page</title>
        </Head>
        Cart
    </div>
  )
}

export default Cart