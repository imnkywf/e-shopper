import { Navigate } from "react-router-dom";
import Home from '../../Pages/Home'
import Login from '../../Pages/Login'
import Cart from '../../Pages/Cart'

const routes = [{
  path: 'home',
  element: <Home />
},
{
  path: 'login',
  element: <Login />
},
{
  path: 'cart',
  element: <Cart />
},
{
  path: '',
  element: <Navigate to='home' />
}]

export default routes