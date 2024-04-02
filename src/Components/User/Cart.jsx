import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'

const Cart = () => {


    const [order, setOrder] = useState([])

    const navigate = useNavigate()

    const username = sessionStorage.getItem('username')

    const getOrder = async () => {
        const resp = await axios.get("http://localhost:5003/OrderedItem")
        setOrder(resp.data)
    }
    useEffect(() => {
        getOrder()
    }, [])


    return (
        <>
            <Navbar />
            <div className="row my-5">
                <div className="offset-lg-3 col-lg-8">
                    <form action="" className='container' >
                        <div className="card">
                            <div className="card-header text-center">
                                <h4>Your Cart</h4>

                            </div>
                            {order.map((data, index) => {
                                {
                                    if (data.personid == username) {
                                        return (

                                            <>

                                                <div className="card-body" key={index}>
                                                    <div className="form-group">
                                                        <label htmlFor="" className='text-bold' >Product Name  </label> &nbsp;
                                                        <label htmlFor=""><b>{data.productNane} </b>  </label>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="form-group" key={index}>
                                                        <label htmlFor="">Product Description  </label>  &nbsp;
                                                        <label htmlFor=""><b>{data.productDesc}</b>   </label>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <label htmlFor="">Product Price  </label>  &nbsp;
                                                        <label htmlFor=""><b>{data.productPrice}</b>   </label>

                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <label htmlFor="">Product Quantity  </label>  &nbsp;
                                                        <label htmlFor=""><b>{data.productQuantity} </b>  </label>

                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="card-footer">
                                                    <button className="btn btn-primary mx-5 my-3" onClick={(() => { navigate(`/checkout/${data.id}`) })} type='submit'>Proceed to Check Out</button>
                                                    <label className='btn btn-info mx-5 my-3' onClick={(() => { navigate('/products') })}>Go Back</label>
                                                </div>
                                            </>
                                        )
                                    }
                                }
                            })}
                        </div>
                    </form>
                </div>
            </div>

        </>

    )
}

export default Cart