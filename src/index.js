import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AccountProvider from "./providers/AccountProvider";
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, } from "react-router-dom";
// import 'semantic-ui-less/semantic.less';

ReactDOM.render(
  <AccountProvider>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </AccountProvider>,
document.getElementById('root')
);

serviceWorker.unregister();
