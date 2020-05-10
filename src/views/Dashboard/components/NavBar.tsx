import React, { memo } from 'react';
import { Button, Nav, Navbar, Spinner } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import { HOME_PAGE, RESOURCES_LIST_PAGE } from '../../../config/paths';
import { useNavBar } from './useNavBar';

function NavBar({ history }: RouteComponentProps) {
  const { inProgress, signOut } = useNavBar(history);

  return (
    <Navbar bg='dark' variant='light' className='fixed-top'>
      <Navbar.Brand className='text-white'>React-Boilerplate</Navbar.Brand>
      <Navbar.Collapse id='navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link className='text-white' onClick={() => history.push(HOME_PAGE)}>
            Home
          </Nav.Link>
          <Nav.Link className='text-white' onClick={() => history.push(RESOURCES_LIST_PAGE)}>
            List
          </Nav.Link>
        </Nav>
        {inProgress ? (
          <Button id='signOutInProgressButton' variant='success' disabled>
            <Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' />
            <span className='sr-only'>Loading...</span>
          </Button>
        ) : (
          <Button variant='success' onClick={signOut}>
            Sign Out
          </Button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default memo(NavBar);
