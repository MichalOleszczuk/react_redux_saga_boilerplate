import React, { memo } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import ErrorAlert from './components/ErrorAlert';
import List from './components/List';
import { useResourcesList } from './useResourcesList';

function ResourcesList(_props: RouteComponentProps) {
  const { error, inProgress } = useResourcesList();

  return (
    <>
      {error.length > 0 ? (
        <Container className='h-100 d-flex justify-content-center align-items-center'>
          <ErrorAlert message={error} />
        </Container>
      ) : (
        <>
          {inProgress ? (
            <Container className='h-100 d-flex justify-content-center align-items-center'>
              <Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' />
            </Container>
          ) : (
            <List />
          )}
        </>
      )}
    </>
  );
}

export default memo(ResourcesList);
