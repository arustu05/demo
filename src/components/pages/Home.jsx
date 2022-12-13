import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card, CardImg, Container } from 'react-bootstrap';
import Photo from '../../../src/components/images/Photo.jpg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Home = () => {

  const [startDate, setStartDate] = useState(new Date());

  const option = [
    { value: 'Green', label: 'Rajasthan' },
    { value: 'red', label: 'Punjab' },
    { value: 'purpal', label: 'Haryana' }
  ]
  return (
    <div>
      <h1>Home Page</h1>
      <div className="d-flex  justify-content-between align-item-center border border-success " style={{height:80}} >
          <h5 className='text-success d-flex align-items-center'>TODAY
            <DatePicker
                id='ReportedDate'
                dateFormat="MM/dd/yyyy HH:mm"
                timeInputLabel name='Date'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeInput
                autoComplete="off"
            />
          </h5>
          <div className="icons d-flex align-items-center">
            <p><FcGoogle /></p> &nbsp; &nbsp;<p><FaFacebookF /></p> &nbsp; &nbsp;<p><FaLinkedinIn /></p> &nbsp; &nbsp; <p><FaApple /></p> &nbsp; &nbsp;
          </div>
      </div>
      {/* <Select 
              options={option}
              placeholder={'Select States...'}
          /> */}
      <Container fluid="md" className='mt-5 border border-warning' style={{ height: 400 }} >
        <Row className='d-flex align-item-center justify-content-around mt-5'>
          <Col className='border border-danger col-3'>
              <Card>
                <Card.Img variant='top' src={Photo} alt='img' />
                <Card.Body>
                  <Card.Title>User...</Card.Title>
                  <Card.Text>Happy to Use</Card.Text>
                  <Button variant='warning'>Supper</Button>
                </Card.Body>
              </Card>
          </Col>
          <Col className='border border-danger col-3' >
              <Card>
                <Card.Img variant='top' src={Photo} alt='img' />
                  <Card.Body>
                    <Card.Title>User...</Card.Title>
                    <Card.Text>Happy to Use</Card.Text>
                    <Button variant='warning'>Supper</Button>
                  </Card.Body>
              </Card>
          </Col>
          <Col className='border border-danger col-3 ' >
            <Card>
              <Card.Img variant='top' src={Photo} alt='img' />
                <Card.Body>
                  <Card.Title>User...</Card.Title>
                  <Card.Text>Happy to Use</Card.Text>
                  <Button variant='warning'>Supper</Button>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 border border-danger " style={{}}>
        <Col className=' '><img src={Photo} alt="img" style={{ width: '100%', height: '100%' }} /> </Col>
      </Container>
      <Container className='mt-5 border border-success' style={{ height: '500px' }}>
        <div className='d-flex justify-content-around mt-4' style={{ width: '95%', height: '40%' }}>
          <div className='border border-success' style={{ width: '25%', height: '100%' }}>
            <Card>
              <Card.Img variant='top' src={Photo} alt='img' />
                <Card.Body>
                  <Card.Title>User...</Card.Title>
                  <Card.Text>Happy to Use</Card.Text>
                  <Button variant='warning'>Supper</Button>
                </Card.Body>
            </Card>
          </div>
          <div className='border border-success' style={{ width: '25%', height: '100%' }}>
          <Card>
              <Card.Img variant='top' src={Photo} alt='img' />
                <Card.Body>
                  <Card.Title>User...</Card.Title>
                  <Card.Text>Happy to Use</Card.Text>
                  <Button variant='warning'>Supper</Button>
                </Card.Body>
            </Card>
          </div>
        </div>
        {/* <div className='d-flex justify-content-around mt-4' style={{ width: '95%', height: '40%' }}>
          <div className='border border-success' style={{ width: '25%', height: '100%' }}>
            third Column
          </div>
          <div className='border border-success' style={{ width: '25%', height: '100%' }}>
            fourth Column
          </div>
        </div> */}
      </Container>
    </div>
  )
}

export default Home
