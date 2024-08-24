import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

import StarRating from './components/StarRating';
import Test from './components/Test';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}/>
    <StarRating maxRating={5} color='green' size={24} className='test' messages={["One", "Two", "Three", "Four", "Five"]} defaultRating={4}/>
    <Test />
  </React.StrictMode>
);
 