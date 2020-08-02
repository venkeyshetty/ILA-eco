import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../../../../Home/CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ModifyProductForm = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        callServerToUpdateInfo(data)

        props.handleClose()
    }
    console.log(errors);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="productName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control defaultValue={props.projectData.productName} type="text" placeholder="Enter Product name" name="productName" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="productCategory">
                <Form.Label>Product Category</Form.Label>
                <Form.Control defaultValue={props.projectData.productCategory} type="text" placeholder="Enter Product Category" name="productCategory" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="productDescription">
                <Form.Label>Product Description</Form.Label>
                <Form.Control defaultValue={props.projectData.productDescription} type="text" placeholder="Product Description" name="productDescription" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="productPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control defaultValue={props.projectData.productPrice} type="number" placeholder="Enter Price in Rs" name="productPrice" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="stockDetail">
                <Form.Label>Stock Detail</Form.Label>
                <Form.Control defaultValue={props.projectData.stockDetail} type="text" placeholder="In Stock/ Out of Stock" name="stockDetail" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="returnDetails">
                <Form.Label>Return Details</Form.Label>
                <Form.Control defaultValue={props.projectData.returnDetails} type="text" placeholder="Return Accepted | 30 days return policy | No Returns" name="returnDetails" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <br /> <br /> <br />
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )

    function callServerToUpdateInfo(requestObject) {

        requestObject = { ...requestObject, "email": auth.userEmail, 'imageName': props.projectData.imageName }
        console.log('call server 1 ', requestObject)

        fetch('/api/admin/modifyProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject)
        })
            .then(res => res.json())
            .then(data1 => console.log('data from update ', data1))
            .catch(error => console.log('Error while modify project Info ', error))

    }

}

export default ModifyProductForm
