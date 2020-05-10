import React, { memo } from 'react';
import { Navbar } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';

function Footer(props: RouteComponentProps) {
  return (
    <Navbar id='dashboardFooter' bg='dark' className='fixed-bottom d-flex justify-content-center align-items-center'>
      <div className='text-secondary'>Just example react-redux setup</div>
    </Navbar>
  );
}

export default memo(Footer);
