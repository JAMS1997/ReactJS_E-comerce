import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/index'
import { Layout } from '../../Components/Layout'
import { OrdersCard } from '../../Components/OrdersCard/indnex'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className='flex  justify-center items-center relative w-80'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
        </Link>
        <h1 className='font-medium text-xl'> My Orders</h1>
      </div>
 
      {
        context.order.map((order , index) => (
          <Link  key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProduct={order.totalProduct}
          />
          </Link>
        ))
      }
    </Layout>
  )
}

export default MyOrders
