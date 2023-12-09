import { createContext, useState , useEffect  } from 'react';

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {
    // Shopping Cart . Increment quantity
    const [ count , setCount ] = useState(0)
    
    //Shopping Cart -  Add Products to Cart
    const [ cartProducts , setCartProducts] = useState([])
        const onAdd = product => {
		const productExists = cartProducts.some(el => el.id === product.id); // dará true si el producto ya se encuentra en el carrito

		if (productExists) {
			// valida la existencia
			const productCart = cartProducts.find(el => el.id === product.id); // busca el producto
			productCart.quantity += 1; // aumenta la cantidad en 1
		} else {
			product.quantity = 1; // si el producto no está, le agrega la propiedad quantity con valor uno, y luego setea el carrito agregando ese producto
			setCartProducts([...cartProducts, product]);
		}
		setCount(count + 1);
	};

    // Product Detail - Open/Close 
    const [isProductDetailOpen , setIsProductDetailOpen ] = useState(false)
        const openProductDetail = () => setIsProductDetailOpen( true);
        const closeProductDetail = () => setIsProductDetailOpen(false);

    // Product detail - Show Product
    const [ productToShow , setProductToShow ] = useState({})

        // Checkout Side Menu - Open/Close 
    const [isCheckoutSideMenuOpen , setIsCheckoutSideMenuOpen ] = useState(false)
        const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen( true);
        const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //Shoping Cart . order
    const [ order , setOrder ] = useState([]);

    //Get Products
    const [ items , setItems ] = useState(null);
    const [ filteredItems , setFilteredItems ] = useState(null);
      //Consultar la api
    useEffect(() =>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    },[])
    // Get Products by Title
    const [ searchByTitle , setSearchByTitle ] = useState(null);
    console.log(searchByTitle);

    const filteredItemsByTitle = (items , searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(()=>{
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items , searchByTitle))
    },[items , searchByTitle])
    console.log('FilteredItmes: ', filteredItems)

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
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            onAdd,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider , ShoppingCartContext}