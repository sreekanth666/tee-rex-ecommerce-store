import React, { createContext, useContext, useState } from 'react'
export const CartContext = createContext()

function Context({children}) {
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])
    return (
        <>
            <CartContext.Provider value={{cart, setCart, wishlist, setWishlist}}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default Context