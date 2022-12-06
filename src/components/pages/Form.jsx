import React  from 'react';
import Form from  'react-bootstrap/Form'
import {Row,Col} from 'react-bootstrap'


const RegForm = () => {

  return (

    <>
        <Form>
            <Row className="mb-3">
                <Form.Group  as={Col-6}>
                    <Form.Label>username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username"></Form.Control>
                </Form.Group>
                <Form.Group  as={Col-6}>
                    <Form.Label>username</Form.Label>
                    <Form.Control type="Password" placeholder="Enter Password"></Form.Control>
                </Form.Group>
            </Row>
        </Form>
    </>
  )
}

export default RegForm ;