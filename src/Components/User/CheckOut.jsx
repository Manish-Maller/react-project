import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const CheckOut = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const username = sessionStorage.getItem('username')
    const [productQuantity, setProductQuantity] = useState([])
    const getOrder = async () => {
        const resp = await axios.get(`http://localhost:5003/OrderedItem/${id}`)
        setProductQuantity(resp.data)

    }
    const handleCheck = () => {
        Swal.fire("You'have Placed the Order", "You'll receive the order earliest", "info")
        navigate('/products')

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
                            {/* {productQuantity.map((data)=>{ */}
                            <>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="">Product Price  </label>  &nbsp;
                                        <label htmlFor="" ><b>{productQuantity.productPrice}</b>   </label>

                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="">Product Quantity  </label>  &nbsp;
                                        <label htmlFor="">{productQuantity.productQuantity} </label>  &nbsp;

                                    </div>
                                </div>
                                <hr />



                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="">Total Price Quantity  </label>  &nbsp;
                                        <label htmlFor="" className='text-info'><b>{productQuantity.productPrice * productQuantity.productQuantity} </b>  </label>

                                    </div>
                                </div>
                            </>
                            {/* })} */}
                            <div className="card-footer">
                                <button className="btn btn-primary mx-5 my-3" type='submit' onClick={handleCheck} >Proceed to Check Out</button>
                                <label className='btn btn-danger mx-5 my-3' onClick={(() => { navigate('/products') })}>Go Back</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CheckOut