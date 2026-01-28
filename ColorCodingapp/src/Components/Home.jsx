import React from 'react'
import Codecodesample from '../assets/resistor-colour-codes.jpg'
import Header from '../Header';
import ColorCodingscript from './ColorCodingscript';

function Home({ colorCodingData }) {
    return (
        <div className="home-container">
            <Header />
            <main>
                <h1>Welcome to the Color Coding App</h1>
                <p>This app helps you manage and visualize color coding for various tasks.</p>
                <p>Use the navigation menu to explore different features.</p>
                <p>Below is the color coding information:</p>
                <img src={Codecodesample} alt='Resistor color codes' className='color-coding-chart' />
                <div className="ColorCoding-info-block">
                    <h3>Color Coding Information</h3>
                    <table className="Color-Coding-table">
                        <thead>
                            <tr>
                                <th>Digit</th>
                                <th>Color</th>
                                <th>Multiplier</th>
                                <th>Tolerance</th>
                                <th>Temperature Coefficient (ppm/°C)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(Array.isArray(colorCodingData) ? colorCodingData : []).map((item, index) => (
                                <tr style={{ color: item.Color }} key={index}>
                                    <td>{item.Digit}</td>
                                    <td>{item.Color}</td>
                                    <td>{item.Multiplier}</td>
                                    <td>{item.Tolerance}</td>
                                    <td>{item.Temperature}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <ColorCodingscript />
            </main>
        </div>
    )
}

export default Home
