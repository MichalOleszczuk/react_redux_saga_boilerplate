import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';

library.add(faCog);

function Home(_props: RouteComponentProps) {
  const [isSpinning, setIsSpinning] = useState(false);

  return (
    <div className='pt-5'>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <h1 id='dashboard-title'>Wellcome to React-Redux-Saga boilerplate!</h1>
        <h2>It's based on create-react-app enhanced with:</h2>
      </div>
      <Row className='m-0'>
        <Col xs={2} className='p-0' />
        <Col xs={10} className='p-0'>
          <ul className='ml-25'>
            <li>containers examples</li>
            <li>components examples</li>
            <li>router routes examples</li>
            <li>routes guardians</li>
            <li>asynchronous calls with saga examples</li>
            <li>rootReducer, rootSaga examples</li>
            <li>ready requests library based on axios</li>
            <li>bootstrap and font awesome</li>
          </ul>
        </Col>
      </Row>
      <div className='d-flex justify-content-center align-items-center'>
        <div
          className='pointer'
          onClick={() => {
            setIsSpinning(!isSpinning);
          }}
        >
          <FontAwesomeIcon icon={['fas', 'cog']} spin={isSpinning} fixedWidth={false} size='4x' />
          <p>Spin me!</p>
        </div>
      </div>
    </div>
  );
}

export default memo(Home);
