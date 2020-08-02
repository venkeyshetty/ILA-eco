import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const UploadProductImage = (props) => {

    const [value, setValue] = useState()


    const handleChange = (e) => {
        setValue(e.target.files[0]); // you get all the files object here
    }

    const uploadImageInServer = (e) => {
        e.preventDefault();
        console.log('In uploadImageInServer 1')
        const formData = new FormData();
        formData.append('avatar', value)

        fetch('/api/admin/uploadProjectImage', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log('upload success')
                // props.history.push('./myProjects')

                props.history.push({
                    pathname: './createJobOpenings',
                    fileNameImage: data.uploadedFileName
                })

            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div>
            <center>
                <Card style={{ width: '48rem', backgroundColor: '#A1C4FF',marginTop:'50px' }}>
                    <Card.Body>
                        <Card.Title style={{ color:'#fff' }}>Upload Product Image</Card.Title>
                        <form encType="multipart/form-data" onSubmit={uploadImageInServer}>
                            <label for="avatar" style={{ color:'#fff' }}>Select image:&nbsp;&nbsp;  </label>
                            <input type="file" style={{ color:'#fff' }} id="avatar" name="avatar" accept="image/*,video/*" onChange={handleChange} />

                        &nbsp;&nbsp; <Button variant="primary" type="submit">SUBMIT</Button>
                        </form>
                    </Card.Body>
                </Card>

            </center>
        </div>
    )





}

export default UploadProductImage
