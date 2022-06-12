/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useState, useContext, useEffect } from 'react'
import { DataContext } from '../../store/GlobalState'
import { useRouter } from 'next/router'
import Link from 'next/link'
// import OrderDetail from '../../components/OrderDetail'


const DetailOrder = () => {
    const {state, dispatch} = useContext(DataContext)
    const {orders, auth} = state

    const router = useRouter()

    const [orderDetail, setOrderDetail] = useState([])

    useEffect(() => {
        const newArr = orders.filter(order => order._id === router.query.id)
        setOrderDetail(newArr)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[orders])
            
    // if(!auth.user) return null;
    return(
        <div className="my-3">
            <Head>
                <title>Detail Orders</title>
            </Head>

            <div>
                <button className="btn btn-dark" onClick={() => router.back()}>
                    <i className="fas fa-long-arrow-alt-left"  aria-hidden="true"></i> Go Back
                </button>
            </div>
            <div style={{maxWidth: "600px", margin:"20px auto"}}>
            {
            orderDetail.map(order => (
            <div key={order._id}   className="row justify-content-around">

                <div className="text-uppercase my-3" style={{maxWidth: '600px'}}>
                    <h2 className="text-break">Order {order._id}</h2>

                    <div className="mt-4 text-secondary">
                        <h3>Shipping</h3>
                        <p>Name: {order.user.name}</p>
                        <p>Email: {order.user.email}</p>
                        <p>Address: {order.address}</p>
                        <p>Mobile: {order.mobile}</p>

                        <div className={`alert ${order.delivered ? 'alert-success' : 'alert-danger'}
                        d-flex justify-content-between align-items-center`} role="alert">
                            {
                                order.delivered ? `Deliverd on ${order.updatedAt}` : 'Not Delivered'
                            }
                            {/* {
                                auth.user.role === 'admin' && !order.delivered &&
                                <button className="btn btn-dark text-uppercase"
                                onClick={() => handleDelivered(order)}>
                                    Mark as delivered
                                </button>
                            } */}
                            
                        </div>

                        {/* <h3>Payment</h3>
                        {
                            order.method && <h6>Method: <em>{order.method}</em></h6>
                        }
                        
                        {
                            order.paymentId && <p>PaymentId: <em>{order.paymentId}</em></p>
                        }
                         */}
                        {/* <div className={`alert ${order.paid ? 'alert-success' : 'alert-danger'}
                        d-flex justify-content-between align-items-center`} role="alert">
                            {
                                order.paid ? `Paid on ${order.dateOfPayment}` : 'Not Paid'
                            }
                            
                        </div> */}

                        <div>
                            <h3>Order Items</h3>
                            {
                                order.cart.map(item => (
                                    <div className="row border-bottom mx-0 p-2 justify-content-betwenn
                                    align-items-center" key={item._id} style={{maxWidth: '550px'}}>
                                        <img src={item.images[0].url} alt={item.images[0].url}
                                        style={{width: '50px', height: '45px', objectFit: 'cover'}} />

                                        <h5 className="flex-fill text-secondary px-3 m-0">
                                            <Link href={`/product/${item._id}`}>
                                                <a>{item.title}</a>
                                            </Link>
                                        </h5>

                                        <span className="text-info m-0">
                                            {item.quantity} x ${item.price} = ${item.price * item.quantity}
                                        </span>

                                    </div>
                                ))
                            }
                        </div>

                    </div>

                </div>
                            
                {/* {
                    !order.paid && auth.user.role !== 'admin' &&
                    <div className="p-4">
                        <h2 className="mb-4 text-uppercase">Total: ${order.total}</h2>
                        <PaypalBtn order={order} />
                    </div>
                } */}
               
            </div>
            ))
        }
            </div>
            
            {/* <OrderDetail orderDetail={orderDetail} state={state} dispatch={dispatch} /> */}
        
        </div>
    )
}

export default DetailOrder