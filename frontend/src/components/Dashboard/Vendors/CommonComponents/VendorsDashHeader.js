import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const VendorsDashHeader = (props) => {
    return (
        <div>
            <Navbar style={{ backgroundColor:'#4BCB00' }}>
                <Link exact to="/vendorDashboard">  <Navbar.Brand href="#home" style={{ color:'#fff' }}>ILA</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link exact to="/vendorDashboard"><Nav.Link href="#home" style={{ color:'#fff' }}>Home</Nav.Link></Link>
                    <Link to="/vendorDashboard/uploadProjectImage"> <Nav.Link href="#features" style={{ color:'#fff' }}>Add Products</Nav.Link></Link>
                    <Link to="/vendorDashboard/showProjects"> <Nav.Link href="#features" style={{ color:'#fff' }}>My Products</Nav.Link></Link>

                    <Button
                        onClick={() => {
                            auth.logout(() => {
                                props.logout.push("/");
                            });
                        }}
                    >
                        Logout
                    </Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default VendorsDashHeader
