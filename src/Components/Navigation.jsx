import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Navigation() {
    return (
        <div>
            <Navbar expand="lg" className="" style={{backgroundColor:"#f5f5f5"}}>
                <Container>
                    <Navbar.Brand href="/" style={{fontWeight:'600'}} className='fs-3'>TeeRex</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#home">MEN</Nav.Link>
                        <Nav.Link href="#link">WOMEN</Nav.Link>
                        <Nav.Link href="#link">WINTER</Nav.Link>
                        <Nav.Link href="#link" className='border border-2 m-2' style={{fontWeight:'600'}}>CART</Nav.Link>
                        <Nav.Link href="#link" className='border border-2 m-2' style={{fontWeight:'600'}}>WISHLIST</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation