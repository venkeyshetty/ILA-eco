import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const UserDashHeader = (props) => {
    return (
        <div>

            <Navbar style={{ backgroundColor:'#4BCB00' }}>
                <Link exact to="/userDashboard">  <Navbar.Brand href="#home" style={{ color:'#fff' }}>ILA</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link exact to="/userDashboard"><Nav.Link href="#home" style={{ color:'#fff' }}>Home</Nav.Link></Link>
                    <Link to="/userDashboard/myOrders"> <Nav.Link href="#features" style={{ color:'#fff' }}>My Orders</Nav.Link></Link>

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

export default UserDashHeader
