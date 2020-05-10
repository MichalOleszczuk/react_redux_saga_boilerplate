import React from 'react';
import { Container } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';

/**
 * Generic not found page component.
 * @param {props} RouteComponentProps
 * @returns JSX.Element
 */
function NotFoundPage(props: RouteComponentProps) {
  return (
    <Container className='container-max-1600'>
      <b>404 - Strona nie znaleziona</b>
      <p>Przepraszam, nie można znaleźć strony, której szukałeś!</p>
    </Container>
  );
}

export default NotFoundPage;
