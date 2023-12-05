import { useRoutes , BrowserRouter } from 'react-router-dom'
import Home from '../Home/index'
import MyAccount from '../MyAccount/index'
import MyOrder from '../MyOrder/index'
import MyOrders from '../MyOrders/index'
import NotFound from '../NotFound/index'
import SignIn from '../SignIn/index'
import { Navbar } from '../../Components/Navbar'
import './App.css'

  const AppRoutes = () => {
    let routes = useRoutes ([
      {path: '/', element: <Home />},
      {path:'/my-accouunt', element: <MyAccount/>},
      {path:'/my-order',element: <MyOrder/>},
      {path:'/my-orders',element: <MyOrders/>},
      {path:'/sign-in',element: <SignIn/>},
      {path:'/*',element: <NotFound/>},
    ])

    return routes;
  } 

const App = () => {


  return (
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
    </BrowserRouter>
  )
}

export default App
