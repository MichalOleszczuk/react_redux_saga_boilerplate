import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import logo from '../../design/media/logo.svg';

function SignIn(props: RouteComponentProps) {
  console.log('SignIn', props);
  return (
    <Container className='container-max-1600 vh-100'>
      <Row className='vh-100'>
        <Col className='vh-100 d-flex justify-content-center align-items-center flex-column'>
          <img src={logo} id='signIn-logo' alt='logo' />
          <h3 className='font-weight-bold mb-3 text-white'>Please sign in</h3>
          <Form
            className='text-center'
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              event.stopPropagation();
            }}
          >
            <Form.Group controlId='formBasicEmail' className='mb-0'>
              <Form.Control
                type='email'
                placeholder='eve.holt@reqres.in'
                style={{ borderRadius: '.35rem .35rem 0 0' }}
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Control type='password' placeholder='cityslicka' style={{ borderRadius: '0 0 .35rem .35rem' }} />
            </Form.Group>
            <Button variant='primary' type='submit' className='w-75'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
