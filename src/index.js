import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';

import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import stroe from 'redux/store';

ReactDOM.render(
  <Router>
    <Provider store={stroe}>
      <App />
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);
