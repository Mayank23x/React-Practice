import React from 'react'

function Anime(props) {
  return (
      <div className="mx-3.5 inline-block">
                <div 
                    className="w-52 h-80 rounded-lg  relative bg-cover bg-center"
                    style={{
                        backgroundImage: `url("${props.img}")`
                    }}
                >
                    <span className="bg-yellow-600 text-white rounded-lg w-10 h-6 flex items-center justify-center absolute top-2 right-2">
                        {props.year}
                    </span>
                </div>
                <h4 className="text-white text-2xl font-sans mt-3">{props.name}</h4>
            </div>
  )
}

export default Anime
