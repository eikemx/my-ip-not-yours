import React, { useEffect, useState } from 'react';
import './App.css';
import MyMap from './Mapp';

const App = () => {

const ipAPI = process.env.REACT_APP_USERIP_API_ENDPOINT;
const userFlag = process.env.REACT_APP_USERFLAG_API_ENDPOINT;

const [userData, setUserData] = useState()

useEffect(() => {
  fetch(ipAPI)
    .then((res) => res.json())
    .then((ipData) => {
      
      // setUserIP(data));
      
      const countryCode = ipData.location.country;
      // console.log(countryCode)
      fetch(`${userFlag}${countryCode}`)
      .then((res) => res.json())
      .then((countryData) => {

        setUserData({...ipData, flag: countryData[0].flags.png})
        // console.log({
        //   ipData,
        //   countryData
        // })
      })
    })
          
}, [])


  if (!userData) {
    return <h2>still loading...</h2>
  } 

  // console.log(userData)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='header'>My IP adress</h1>
        <div className='ip-adress'>{userData.ip}</div>
        <img className="user-flag" src={userData.flag} alt="user flag"/>
      </header>
      <MyMap userIP={userData} />
    </div>
  );
}

export default App;
