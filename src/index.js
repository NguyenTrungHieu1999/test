import React from 'react';
import ReactDOM from 'react-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';
 
ReactDOM.render(
  <MessengerCustomerChat
    pageId="136478068166816"
    appId="100225912358943"
    htmlRef="<REF_STRING>"
  />,
  document.getElementById('demo')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
