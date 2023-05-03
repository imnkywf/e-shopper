import { Navigate } from "react-router-dom";
import Home from '../../Pages/Home'
import Login from '../../Pages/Login'
import Cart from '../../Pages/Cart'
import Products from '../../Pages/Products'
import GoodsDetails from "../../Pages/GoodsDetails";

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
  path: 'products',
  element: <Products />,
},
{
  path: '/goods/:id',
  element: <GoodsDetails />

},
{
  path: '',
  element: <Navigate to='home' />
}]

export default routes