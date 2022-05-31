import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { getData } from "../utils/fetchData"
import { useState } from 'react'
import ProductItem from '../components/product/ProductItem'

 const  Home =(props) => {
  const [ products, setProducts] = useState(props.products)
  

  return (
    
      <div className='products'>
        <Head>
          <title>IKIGUY</title>
        </Head>
        {
          products.length === 0 
          ? <h2>No Products</h2>
          : products.map(product => (
           
            <ProductItem key={product._id} product={product} />
          ))
        }
      </div>
     
  )
}

export async function getServerSideProps() {
  const res = await getData('product')
 
  // serve side rendering
  return {
    props: {
      products: res.products,
      result: res.result
    }, // will be passed to the page component as props
  }
}
export default Home