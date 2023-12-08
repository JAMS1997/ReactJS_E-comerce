/**
 *  This Function calculates total pricde of a new order
 * @param {Array} products cartProduct : Array of ibjects
 * @returns {number} Total Price
 */

const totalPrice = products => {
    let sum = 0; 
    products.forEach( product => sum += product.price)
    return sum
}

export { totalPrice }