import React, { memo } from 'react';
import { Alert } from 'react-bootstrap';

export interface IErrorAlertProps {
  message: string;
}

function ErrorAlert({ message }: IErrorAlertProps) {
  return (
    <Alert variant='danger' className='w-75 text-center'>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
}

export default memo(ErrorAlert);
