import { NavLink  } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'


const Navbar = () => { 
    const context = useContext(ShoppingCartContext)
    const activeStyle = {
        textDecoration: "underline  ",
    }
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className="flex items-center gap-3">
                <li className='font-semibold text-lg' >
                    <NavLink 
                    to='/'
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/All'
                    style={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Clothes'
                    style={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Furnitures'
                    style={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Toys'
                    style={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Others'
                    style={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    jhon@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                    style={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                    style={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                    style={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Sign in
                    </NavLink>
                </li>
                <li className="flex items-center">
                <ShoppingBagIcon className="h-6 w-6 text-black" /> 
                <div>{context.count}</div>
                </li>
            </ul>
        </nav>
    )
}

export { Navbar}