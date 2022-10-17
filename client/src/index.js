import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./styles/common.scss"
import reportWebVitals from './reportWebVitals';
import { LandingPage } from './pages/LandingPage/LandingPage';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <LandingPage />
    <Input_pw />
    <Input_id />
    <Sign_in />
    <Login_Btn />
    <Find_txt />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
