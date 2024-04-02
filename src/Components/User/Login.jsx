import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import '../../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const PreventLogin = (e) => {
        e.preventDefault()
        if (validate) {
            fetch("http://localhost:5003/userData/" + username)
                .then((res) => { return res.json() })
                .then((resp) => {

                    if (Object.keys(resp).length === 0) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            footer: '<a href="">Why do I have this issue?</a>'
                        })
                    } else {

                        if (resp.password === password) {

                            Swal.fire({
                                icon: 'success',
                                title: 'Congrats',
                                text: 'Successfully Logged In!',

                            })
                            sessionStorage.setItem('username', username)
                            navigate('/products')
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Password Mismatch',
                                text: 'Please check your password once again!',
                            })
                        }
                    }

                })
                .catch((err) => { console.log(err) })
        }
    }

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false

        }
        if (password === '' || password === null) {

            result = false

        }
        return result
    }
    return (
        <>
            <Navbar />
            <div className="row my-5">
                <div className="offset-lg-4 col-lg-8">
                    <form action="" onSubmit={PreventLogin} className='container'>
                        <div className="card">
                            <div className="card-header">
                                <h1>SignIn Here!!</h1>

                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Username <span className='errmsg'>*</span></label>
                                    <input type="text" value={username} onChange={((e) => { setUsername(e.target.value) })} className="form-control" />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Password <span className='errmsg'>*</span></label>
                                    <input type="password" value={password} onChange={((e) => { setPassword(e.target.value) })} className="form-control" />
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary mx-5 my-3" type='submit'>Submit</button>
                                <button className='btn btn-info mx-5 my-3' type='reset'>Reset</button>
                                <p>Not Registered Yet,<a href="/signup">Click Here</a> to Create Account </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login