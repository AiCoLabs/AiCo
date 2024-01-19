import React from 'react';

import configureStore from './store/configureStore';
import Root from './components/Root';

import './css/imports.css';

const devMode = process.env.NODE_ENV === 'development';
const store = configureStore(devMode);

const Pix = () => {
  return (
    <Root store={store} />
  )
}

export default Pix;