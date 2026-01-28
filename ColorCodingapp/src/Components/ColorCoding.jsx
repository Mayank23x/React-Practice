import React from 'react'
import Header from '../Header'
import Resistance from '../assets/resistor-color-diagram.png'
function ColorCoding() {
  const firstBandColorCoding = () => {
    return (
      <div className='first-band-color-coding'>
        <h2>5 Color Band</h2>
        <div className="band-inner-block">
          <label htmlFor="Value">value</label>
          <select name="Value" id="value">
            
          </select>
        </div>
      </div>
    );
  }

  return (
    <div className='color-coding'>
      <Header />
      <main>
        <img src={Resistance} alt="Resistance" />
        {firstBandColorCoding()}
      </main>
    </div>
  );
}

export default ColorCoding

