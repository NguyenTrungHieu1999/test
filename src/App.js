import logo from './logo.svg';
import './App.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <div className="App">
       <MessengerCustomerChat
          pageId="100225912358943"
          appId="136478068166816"
        />
    </div>
  );
}

export default App;