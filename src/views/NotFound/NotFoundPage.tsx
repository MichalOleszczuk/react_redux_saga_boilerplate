import React from 'react';
import { Container } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';

/**
 * Generic not found page component.
 * @param {props} RouteComponentProps
 * @returns JSX.Element
 */
function NotFoundPage(_props: RouteComponentProps) {
  return (
    <Container className='container-max-1600 text-white vh-100 d-flex justify-content-center align-items-center flex-column'>
      <b>404 - Page not found</b>
      <p>Sorry, we cannot find page you are looking for!</p>
    </Container>
  );
}

export default NotFoundPage;
