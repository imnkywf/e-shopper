import { Navigate } from "react-router-dom";
import Home from '../../Pages/Home'
import Login from '../../Pages/Login'
import Cart from '../../Pages/Cart'
import Products from '../../Pages/Products'
import ProductsDetails from "../../Pages/Products/ProductsDetails";

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
  children: [{
    path: ':id',
    element: <ProductsDetails />
  }]
},
{
  path: '',
  element: <Navigate to='home' />
}]

export default routes