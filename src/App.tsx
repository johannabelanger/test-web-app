import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Layout from './components/Layout'


function App() {
  const [serverMessage, setServerMessage] = useState('');

  const getServerMessage = () => {
    axios.get('/api/accounts/1')
    .then((response) => setServerMessage(response.data.accountName))
    .catch((error) => setServerMessage(error.message));
  };

  useEffect(() => getServerMessage(), []);

  return (
    <>
      <Layout subscriberName={serverMessage}/>
    </>
  )  
}
 
export default App
