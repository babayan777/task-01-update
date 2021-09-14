import React from 'react'
import Card from './images/card.png'

function Home() {
    return (
            <main className="main-container container">
                <div className="main-wrapper">
                    <div className="title-container">
                        <div className="title-wrapper">
                            <p className="title">Get Credit Card Debt Help</p>
                            <p className="subtitle">From American's top debt relief company</p>
                        </div>
                    </div>
                    <div className="img-container">
                        <img className="card-img" src={Card} />
                    </div>
                </div>
            </main>
    )
}

export default Home