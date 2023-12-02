import React, { useContext } from 'react'
import { CartContext } from '../Context/Context'

function Wishlist() {
    const {wishlist, setWishlist} = useContext(CartContext)
    console.log(wishlist);
    const removeFromWishlist = (productId) => {
        const updatedWishlist = wishlist.filter((product) => product.id !== productId);
        setWishlist(updatedWishlist);
        alert('Item deleted from wishlist');
    };

    const {cart, setCart} = useContext(CartContext)


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
    return (
        <div className='container-fluid'>
            <div className="row mt-4">
                {
                    wishlist.length > 0?
                    wishlist?.map((item) => (
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center justify-content-center">
                        <div class="card border-0 m-2 mb-4" style={{width: "15rem"}}>
                            <img src={item.image} class="card-img-top" alt="..." style={{height:'250px'}} />
                            <div class="card-body">
                                <h5 class="card-title m-0">{item.title}</h5>
                                <p class="card-text m-0">{item.price}</p>
                                <div className='buttons d-flex'>
                                    <button class="btn btn-primary me-1" onClick={() => removeFromWishlist(item.id)}><i class="fa-solid fa-trash"></i></button>
                                    <button  class="btn btn-primary" onClick={() => {addToCart(item)}}><i class="fa-solid fa-cart-shopping"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )) :
                    "Nothing in wishlist"
                }
            </div>
        </div>
    )
}

export default Wishlist