import { createContext, useState  } from 'react';

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {
    // Shopping Cart . Increment quantity
    const [ count , setCount ] = useState(0)
    
    // Product Detail - Open/Close 
    const [isProductDetailOpen , setIsProductDetailOpen ] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen( true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Product detail - Show Product
    const [ productToShow , setProductToShow ] = useState({})

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            setIsProductDetailOpen,
            productToShow,
            setProductToShow,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider , ShoppingCartContext}