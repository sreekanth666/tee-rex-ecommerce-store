import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { getTShirtAPI } from '../Services/allAPI'
import { CartContext } from '../Context/Context'

function Home() {
    const {cart, setCart} = useContext(CartContext)
    const {wishlist, setWishlist} = useContext(CartContext)
    const [allProducts, setAllProducts] = useState([])
    const fetchProducts = async() => {
        const result = await getTShirtAPI()
        setAllProducts(result.data);
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div className='container pb-3'>
<div className="container-fluid d-flex algn-items-center justify-content-center" style={{maxHeight:'90dvh'}}>
    <img src="https://images.bewakoof.com/uploads/grid/app/720x420-Midsize-bannner-Combos-1699277122.jpg" alt="" className='img-fluid' />
            </div>

            {/* Sale cards */}
            <div className='container mt-5'>
                <p className='m-0 fs-2' style={{fontWeight:'600'}}>TeeRex Special Edition</p>
                <p className='m-0 fs-3' style={{color:'#bdc2c5'}}>Shop Now</p>
                <div className="row cards">
                    {
                        allProducts.length > 0 ?
                        allProducts?.map((item) => (
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center justify-content-center">
                                <Card item = {item}/>
                            </div>
                        )) :
                        "No products are available"
                    }
                </div>
            </div>
        </div>
    )
}

export default Home