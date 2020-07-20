import React from 'react';
// import logo from './logo.svg';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';

import './App.css';

function App() {
  return (
    <div className="App">
      <h2>ID Cards</h2>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth="Tue Jul 14 1992"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth="Tue May 11 19932"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h2>Greetings</h2>
      <Greetings lang="fr">Francois</Greetings>
      <Greetings lang="de">Ludwig</Greetings>
      <h2>Greetings</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h2>Box Colors</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h2>CC</h2>
      <div style={{ display: 'flex' }}>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
    </div>
  );
}

export default App;
