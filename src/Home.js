import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Button from './components/Button'
import "./index.css";

const Home = () => {
    return (
      <div>
        <Header />
        <Card />
        <Button pages={[["Personal"], ["About"], ["Press"], ["Fashion"]]} />
      </div>
    );
}

export default Home
