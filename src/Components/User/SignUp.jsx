import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import '../../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {


    const [id, setID] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [country, setCountry] = useState('')
    const [gender, setGender] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        let registered = { id, password, fullname, email, phone, address, country, gender }
        axios.post("http://localhost:5003/UserData", registered)
            .then(() => {
                Swal.fire('Registered Successfully', 'You can now sign in', 'success')
                navigate('/login')
            })
    }
    return (
        <>
            <Navbar />
            <div className="row my-5">
                <div className="offset-lg-4 col-lg-8">
                    <form action="" className='container' onSubmit={handleSubmit}>
                        <div className="card">
                            <div className="card-header text-center">
                                <h4>SignUp | Regsiter Here</h4>

                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Username <span className='errmsg'>*</span></label>
                                    <input type="text" value={id} onChange={((e) => { setID(e.target.value) })} className="form-control" />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Password <span className='errmsg'>*</span></label>
                                    <input type="password" value={password} onChange={((e) => { setPassword(e.target.value) })} className="form-control" />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Full Name <span className='errmsg'>*</span></label>
                                    <input type="text" value={fullname} onChange={((e) => { setFullname(e.target.value) })} className="form-control" />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Email <span className='errmsg'>*</span></label>
                                    <input type="email" value={email} onChange={((e) => { setEmail(e.target.value) })} className="form-control" />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Phone <span className='errmsg'>*</span></label>
                                    <input type="phone" value={phone} onChange={((e) => { setPhone(e.target.value) })} className="form-control" />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Gender <span className='errmsg'>*</span></label>
                                    <br /><br />
                                    <input type="radio" checked={gender === 'male'} value="male" name='gender' onChange={((e) => { setGender(e.target.value) })} className="app-check" />
                                    <label htmlFor="">Male</label>
                                    <br /><br />
                                    <input type="radio" checked={gender === 'female'} value="female" name='gender' onChange={((e) => { setGender(e.target.value) })} className="app-check" />
                                    <label htmlFor="">Female</label>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Country <span className='errmsg'>*</span></label>
                                    <select name="" id="" className='form-control' value={country} onChange={((e) => { setCountry(e.target.value) })}>
                                        <option value="">Select Country</option>
                                        <option value="india">India</option>
                                        <option value="usa">USA</option>
                                        <option value="pak">Pakistan</option>
                                        <option value="china">China</option>
                                        <option value="srilanka">Srilanka</option>
                                    </select>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Address <span className='errmsg'>*</span></label>
                                    <textarea name="" id="" className='form-control' value={address} cols="30" rows="5" onChange={((e) => { setAddress(e.target.value) })}></textarea>                        </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary mx-5 my-3" type='submit'>Register</button>
                                <button className='btn btn-info mx-5 my-3' type='reset'>Reset</button>
                                <p>Already Registered <a href="/signup">Click Here</a> to Sign In </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp