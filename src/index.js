import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import {Routes, Route} from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <App Routes={Routes} Route={Route} />
  </BrowserRouter>,
  document.getElementById('root')
)
