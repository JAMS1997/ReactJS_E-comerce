import { XMarkIcon } from '@heroicons/react/24/solid'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice , totalProduct } = props
    console.log(totalProduct)
    console.log(totalPrice)

    return (
    <div className="flex justify-between items-center  border border-black p-4 w-80 rounded-lg mb-4">
        <div className='flex justify-between w-full'>
            <p className='flex flex-col'>
                <span className='font-light'>01.02.23</span>
                <span className='font-light'>{totalProduct} articles</span>
            </p>
            <p className='flex items-center gap-2'>
                <span className='font medium text-2xl'>$ {totalPrice}</span>
                <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'/>

            </p>
        </div>
    </div>
    )
  }


export {OrdersCard}