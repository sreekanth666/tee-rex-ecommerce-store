import React, { useContext } from 'react'
import { CartContext } from '../Context/Context'


function Cart() {
    const {cart, setCart} = useContext(CartContext)
    console.log(cart);
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
        alert('Item deleted from cart');
    };
    return (
        <div>
            <div className="row m-0 mt-4">
                {
                    cart.length > 0?
                    cart?.map((item) => (
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center justify-content-center">
                        <div class="card border-0 m-2 mb-4" style={{width: "15rem"}}>
                            <img src={item.image} class="card-img-top" alt="..." style={{height:'250px'}} />
                            <div class="card-body">
                                <h5 class="card-title m-0">{item.title}</h5>
                                <p class="card-text m-0">{item.price}</p>
                                <div className='buttons d-flex'>
                                    <button class="btn btn-primary me-1" onClick={() => removeFromCart(item.id)}><i class="fa-solid fa-trash"></i></button>
                                    <button  class="btn btn-primary">Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )) :
                    "Nothing in cart"
                }
            </div>
        </div>
    )
}

export default Cart