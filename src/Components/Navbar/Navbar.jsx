import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
const Navbar = () => {
  const navigate = useNavigate()

  const user = sessionStorage.getItem('username')
  const [username, setUsername] = useState('')
  const getUser = async () => {
    const resp = await axios.get(`http://localhost:5003/UserData/${user}`)
    setUsername(resp.data.id)
  }
  useEffect(() => {
    getUser()

  }, [])

  const logout = () => {
    Swal.fire('Logged Out', 'You have successfully!! Logout', 'success')

    sessionStorage.clear()
    navigate('/')

  }
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">THBS | Market Place</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            {username !== '' &&
              <>

                <li class="nav-item">
                  <a class="nav-link" href="/cart">View Cart</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={logout} href="#">Logout</a>
                </li>
                <p className='userinfo'>Hi {username}</p>
              </>
            }


          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar