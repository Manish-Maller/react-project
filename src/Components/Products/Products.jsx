import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useEffect } from 'react'
import axios from 'axios'
import '../../App.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const Products = () => {
    let quantity = 1
    const navigate = useNavigate()
    const username = sessionStorage.getItem('username')
    const [products, setProduct] = useState([])




    const getData = async () => {
        const resp = await axios.get("http://localhost:5003/ProductData/")
        setProduct(resp.data)
    }
    const addItems = async (id, a, b, c, d, e) => {
        if (username) {
            try {
                const productID = await axios.get(`http://localhost:5003/OrderedItem/${id}`)
                if (productID.data.productNane === a && productID.data.personid === username) {
                    productID.data.productQuantity += 1
                    const addProducts = { personid: username, productID: e, productNane: a, productDesc: b, productPrice: c, productQuantity: productID.data.productQuantity }
                    if (d === "Available") {
                        axios.put(`http://localhost:5003/OrderedItem/${id}`, addProducts)
                        Swal.fire("Added", "Your Selected Item Added to the Cart Successfully", "success")
                        navigate(`/cart`)
                    } else {
                        Swal.fire("Sorry", "Product is Unavailable", "error")
                        navigate('/products')

                    }
                }
            } catch (err) {
                const addProducts = { personid: username, productID: e, productNane: a, productDesc: b, productPrice: c, productQuantity: quantity }
                if (d === "Available") {
                    axios.post("http://localhost:5003/OrderedItem/", addProducts)
                    Swal.fire("Added", "Your Selected Item Added to the Cart Successfully", "success")
                    navigate('/cart')
                } else {
                    Swal.fire("Sorry", "Product is Unavailable", "error")
                    navigate('/products')

                }
            }
        } else {
            Swal.fire("Continue to Login", "You're redirecting to Login Page", "info")
            navigate("/login")
        }


    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <Navbar />
            <div className="container-fluid m-5 p-3">
                <h4 className='text-center text-primary'>All Products</h4>
                {products.map((data, index) => {
                    return (
                        <div className="card w-25 m-3" key={index} >
                            <div className="card-body">

                                <h5 className="card-title">{data.pname}</h5>
                                <p className="card-text">{data.pdesc}</p>
                                <p className="card-text">{data.pprice}</p>
                                <p className="card-text">{data.pstatus}</p>

                                <button className='btn btn-primary mx-2' onClick={(() => addItems(data.id, data.pname, data.pdesc, data.pprice, data.pstatus))} >Add To Cart</button>
                                {/* <button className='btn btn-primary mx-2' >Add to Cart</button> */}
                                <button className='btn btn-warning' onClick={(() => { navigate('/checkout') })}>Buy Now</button>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Products