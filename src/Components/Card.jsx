import React, { useContext } from 'react'
import { CartContext } from '../Context/Context'

function Card({item}) {
    const {cart, setCart} = useContext(CartContext)
    const addToCart = (product) =>{
        const updatedCart = [...cart];
        updatedCart.push(product);
        setCart(updatedCart);
    }
    console.log(cart);
    return (
        <div>
            <div class="card border-0 m-2 mb-4" style={{width: "15rem"}}>
                <img src={item.image} class="card-img-top" alt="..." style={{height:'250px'}} />
                <div class="card-body">
                    <h5 class="card-title m-0">{item.title}</h5>
                    <p class="card-text m-0">{item.price}</p>
                    <div className='buttons d-flex'>
                        <a href="#" class="btn btn-primary me-1" onClick={() => {addToCart(item)}}><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="#" class="btn btn-primary"><i class="fa-solid fa-heart"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card