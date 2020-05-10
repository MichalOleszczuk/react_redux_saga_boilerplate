import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import logo from '../design/media/logo.svg';

function App(props: RouteComponentProps) {
  console.log('siema', props, process.env);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
