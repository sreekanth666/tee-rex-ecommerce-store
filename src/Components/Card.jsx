import React, { useContext } from 'react'
import { CartContext } from '../Context/Context'

function Card({item}) {
    const {cart, setCart} = useContext(CartContext)
    const {wishlist, setWishlist} = useContext(CartContext)

    const isProductInCart = (productId) => {
        return cart.some((product) => product.id === productId);
    };
    const addToCart = (product) => {
        if (!isProductInCart(product.id)) {
            const updatedCart = [...cart];
            updatedCart.push(product);
            setCart(updatedCart);
            alert("Product added to cart")

        } else {
            alert('Product already in the cart!');
        }
    };

    const isProductInWishlist = (productId) => {
        return wishlist.some((product) => product.id === productId);
    };
    const addToWishlist = (product) => {
        if (!isProductInWishlist(product.id)) {
            const updatedWishlist = [...wishlist];
            updatedWishlist.push(product);
            setWishlist(updatedWishlist);
            alert("Product added to wishlist")
        } else {
            alert('Product already in the cart!');
        }
    };
    console.log(cart);
    return (
        <div>
            <div class="card border-0 m-2 mb-4" style={{width: "15rem"}}>
                <img src={item.image} class="card-img-top" alt="..." style={{height:'250px'}} />
                <div class="card-body">
                    <h5 class="card-title m-0">{item.title}</h5>
                    <p class="card-text m-0">{item.price}</p>
                    <div className='buttons d-flex'>
                        <button class="btn btn-primary me-1" onClick={() => {addToCart(item)}}><i class="fa-solid fa-cart-shopping"></i></button>
                        <button  class="btn btn-primary" onClick={() => {addToWishlist(item)}}><i class="fa-solid fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card