export const addProdcutToCartHelper = (product) => {
    
    if(!JSON.parse(localStorage.getItem('cart'))){
        localStorage.setItem('cart', JSON.stringify([]));
    }

    const cart = JSON.parse(localStorage.getItem('cart'));

    const updatedCart = [...cart, {...product, quantity: 1}];

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    return updatedCart;

}

export const decreaseProductQuantityHelper = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const updatedCart = cart.map(product => product.id === id ? {
        ...product,
        quantity: product.quantity-1
    } : product)
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
}

export const increaseProductQuantityHelper = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const updatedCart = cart.map(product => product.id === id ? {
        ...product,
        quantity: product.quantity+1
    } : product)
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
}

export const removeProductFromCartHelper = (id) => {
    
    const cart = JSON.parse(localStorage.getItem('cart'));
    const updatedCart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;

}
