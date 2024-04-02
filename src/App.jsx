import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Products from './Components/Products/Products'
import Login from './Components/User/Login'
import SignUp from './Components/User/SignUp'
import Cart from './Components/User/Cart'
import CheckOut from './Components/User/CheckOut'

const App = () => {

  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout/:id' element={<CheckOut />} />
    </Routes>
  )
}

export default App