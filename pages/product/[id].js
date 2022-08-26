/* eslint-disable @next/next/no-img-element */
import  Head  from "next/head";
import { useState, useRef, useContext } from "react";
import { getData } from '../../utils/fetchData'

import React from 'react'
import { useEffect } from "react";
import { DataContext } from '../../store/GlobalState'
import { addToCart } from '../../store/Actions'

 const DetailProduct = (props) => {
    const [product] = useState(props.product);
    const [tab, setTab] = useState(0)

    const { state, dispatch } = useContext(DataContext)
    const { cart } = state

    // const imgRef = useRef()
    // cách 1 để chọn ảnh
    // useEffect(() =>{
    //     const images = imgRef.current.children;
         
    //     for( let i = 0; i< images.length; i++){
    //         images[i].className = images[i].className.replace("active", "img-thumbnail rounded")

    //     }
    //     images[tab].className = "img-thumbnail rounded active"
    // },[tab])
    // cách 2 chọn ảnh
    const isActive = (index) => {
        if(tab === index) return " active";
        return ""
    } 
     return(
         <div className="row detail_page">
             <Head>
                 <title>DetailProduct </title>
             </Head>
             <div className="col-md-6">
                 {/* tab */}
               <img src={product.images[tab].url} alt={product.images[tab].url} 
               className="d-block img-thumbnail rounded mt-4 w-100"
               style={{height: '350px'}} 
               />

                <div className="row mx-0 galary" 
                style={{cursor: 'pointer'}}
                >
                {product.images.map((img, index) => (
                    <img key={index} src={img.url} alt={img.url}
                    className={`img-thumbnail rounded  ${isActive(index)} `}
                    // style={{height: '80px', width: '20%'}}
                    // setTab index
                    onClick={() => setTab(index)}
                     />
                ))}

                </div>
            </div>
            <div className="col-md-6 mt-3">
                <h2 className="text-uppercase">{product.title}</h2>
                <h5 className="text-danger">${product.price}</h5>

                <div className="row mx-0 d-flex justify-content-between">
                    {
                        product.inStock > 0
                        ? <h6 className="text-danger">In Stock: {product.inStock}</h6>
                        : <h6 className="text-danger">Out Stock</h6>
                    }

                    <h6 className="text-danger">Sold: {product.sold}</h6>
                </div>

                <div className="my-2">{product.description}</div>
                <div className="my-2">
                    {product.content}
                </div>

                <button type="button" className="btn btn-dark d-block my-3 px-5"
                onClick={() => dispatch(addToCart(product, cart))} 
                >
                    Buy
                </button>

            </div>

         </div>
     )
 }
 export async function getServerSideProps({params: {id}} ) {
    const res = await getData(`product/${id}`)
    
   
    // serve side rendering
    return {
        props: { product: res.product }, // will be passed to the page component as props
    }
  }

export default DetailProduct