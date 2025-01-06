import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Layout from './components/Layout'
import { useQuery } from '@tanstack/react-query';


function App() {
  const getAccountName = async () => {
    const response = await axios.get('/api/accounts/1');
    return response.data.accountName;
  }
  const {data: accountName} = useQuery({queryKey: ['account'], queryFn: getAccountName});

  return (
    <>
      <Layout subscriberName={accountName ?? ''}/>
    </>
  )  
}
 
export default App
