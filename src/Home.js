import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Button from './components/Button'

const Home = () => {
    return (
        <div>
            <Header />
            <Card />
            <Button
                pages={
                [
                ["Personal"],
                ["About"],
                ["Press"],
                ]
            } 
            />
        </div>
    )
}

export default Home
