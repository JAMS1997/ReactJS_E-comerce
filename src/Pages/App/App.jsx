import { useRoutes , BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home/index'
import MyAccount from '../MyAccount/index'
import MyOrder from '../MyOrder/index'
import MyOrders from '../MyOrders/index'
import NotFound from '../NotFound/index'
import SignIn from '../SignIn/index'
import { Navbar } from '../../Components/Navbar'
import { CheckoutSideMenu } from '../../Components/CheckOutSideMenu'
import './App.css'

  const AppRoutes = () => {
    let routes = useRoutes ([
      {path: '/', element: <Home />},
      {path:'/my-account', element: <MyAccount/>},
      {path:'/my-order',element: <MyOrder/>},
      {path:'/my-orders',element: <MyOrders/>},
      {path:'/my-orders/last',element: <MyOrder/>},
      {path:'/my-orders/:id',element: <MyOrder/>},
      {path:'/sign-in',element: <SignIn/>},
      {path:'/*',element: <NotFound/>},
    ])

    return routes;
  } 

const App = () => {


  return (
    <ShoppingCartProvider>

    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
      <CheckoutSideMenu/>
    </BrowserRouter>

    </ShoppingCartProvider>
  )
}

export default App
