import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
 import App from './App'
=======

import Signup from './Signup';
import ContactUs from './Contact_Us';
=======
import home from './home';

>>>>>>> 9f6f9315bcaeff0f5e005af26135abdc420ab0dd
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
=======

    <Signup />
    <Login />
    <ContactUs />
>>>>>>> 9f6f9315bcaeff0f5e005af26135abdc420ab0dd

=======
    <home />

  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
