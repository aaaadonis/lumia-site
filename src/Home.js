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
        <Button
          pages={[
            ["Fashion"],
            ["Personal"],
            ["Press"],
            ["About"],
          ]}
        />
      </div>
    );
}

export default Home
