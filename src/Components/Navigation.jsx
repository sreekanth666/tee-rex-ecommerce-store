import React, { useContext } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { CartContext } from '../Context/Context'
import { Link } from 'react-router-dom'

function Navigation() {
    const {cart, setCart} = useContext(CartContext)
    const {wishlist, setWishlist} = useContext(CartContext)
    return (
        <div>
            <Navbar expand="lg" className="" style={{backgroundColor:"#f5f5f5"}}>
                <Container>
                    <Link to='/' style={{textDecoration:'none', color:'black'}}><Navbar.Brand style={{fontWeight:'600'}} className='fs-3'>TeeRex</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#home">MEN</Nav.Link>
                        <Nav.Link href="#link">WOMEN</Nav.Link>
                        <Nav.Link href="#link">WINTER</Nav.Link>
                        <Link to='/cart' style={{textDecoration:'none', color:'black'}}><p className='border border-2 m-2 ps-2 pe-2' style={{fontWeight:'600'}}>CART ({cart.length})</p></Link>
                        <Link to='/wishlist' style={{textDecoration:'none', color:'black'}}><p  className='border border-2 m-2 ps-2 pe-2' style={{fontWeight:'600'}}>WISHLIST ({wishlist.length})</p></Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation