import React from 'react'
import './style.css'
function Card() {
  return (
    <div className='Card-block'>
      <img src="https://cdn.pixabay.com/photo/2020/11/05/02/07/car-5713998_1280.jpg" alt="Car" />
      <div className="car-info-block">
        <h2 ><span className='highlighted'>Hyper Car</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, harum distinctio libero veritatis sint consequatur blanditiis quod quasi voluptatem. Consectetur sit consequuntur doloribus esse quos explicabo dignissimos dolores? Est, consectetur?</p>
      </div>
    </div>
  )
}

export default Card
