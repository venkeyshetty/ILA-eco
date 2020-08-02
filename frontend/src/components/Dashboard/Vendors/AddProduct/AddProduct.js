import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../../../Home/CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
const AddProduct = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        callServerToAddInfo(data)

        props.history.push('./vendorDashboard')
    }
    console.log(errors);

    return (
        <div>
            <center>
                <Card style={{ width: '48rem', backgroundColor: '#A1C4FF' }}>

                    <Card.Body>
                        {props.location.fileNameImage}

                        <Form onSubmit={handleSubmit(onSubmit)}>

                            <Form.Group controlId="productName">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Product name" name="productName" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="productCategory">
                                <Form.Label>Product Category</Form.Label>
                                <Form.Control type="text" placeholder="Enter Product Category" name="productCategory" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="productDescription">
                                <Form.Label>Product Description</Form.Label>
                                <Form.Control type="text" placeholder="Product Description" name="productDescription" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="productPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" placeholder="Enter Price in Rs" name="productPrice" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="stockDetail">
                                <Form.Label>Stock Detail</Form.Label>
                                <Form.Control type="text" placeholder="In Stock/ Out of Stock" name="stockDetail" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="returnDetails">
                                <Form.Label>Return Details</Form.Label>
                                <Form.Control type="text" placeholder="Return Accepted | 30 days return policy | No Returns" name="returnDetails" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <br /> <br /> <br />
                            <Button variant="primary" type="submit">
                                Submit
                             </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </center>
        </div>
    )

    function callServerToAddInfo(requestObject) {

        requestObject = { ...requestObject, "email": auth.userEmail, "imageName": props.location.fileNameImage }
        console.log('call server 1 ', requestObject)

        fetch('/api/admin/addProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject)
        })
            .then(res => res.json())
            .then(data1 => console.log('data from update ', data1))
            .catch(error => console.log('Error while adding Info ', error))

    }

}

export default AddProduct
