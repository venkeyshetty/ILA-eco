import React, { Component, Fragment } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";

class HomeUI extends Component {
    render() {
        return (
            <Jumbotron style={{ backgroundColor: '#fff' }}>
                <Container>
                    <Row>
                        <Col> <img
                            src="https://image.freepik.com/free-vector/earth-planet-with-ecology-trees-ribbon_24877-55707.jpg" /></Col>
                        <Col>
                            <br /><br /> <br /><br /><br /><br /><br /><br />
                            <h1 style={{ color:'#258B00' }}>One destination for the future...</h1>
                            <p style={{ color:'#258B00' }}> Try changing the world by using eco friendly bags for carrying the daily esssentials by using our ILA eco products,</p>
                            <p><Button variant="success" href='/login'>Sign in</Button></p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default HomeUI;
