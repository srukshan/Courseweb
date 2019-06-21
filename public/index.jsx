import React from 'react';
import {render} from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';


import App from './Components/App';

render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));
