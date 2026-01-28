import React from "react";

function Anidis(props) {
  return (
    <div className="flex gap-4 bg-gray-800 p-4 rounded-lg mb-4 text-white" >
      <img
        src={props.img}
        alt={props.name}
        srcset=""
      />
      <div>
        <h4 className="text-lg font-semibold text-blue-200">{props.name}</h4>
        <p className="text-xl">{props.description}</p>
        <div className='flex gap-3 text-xs font-semibold flex-wrap'>
          <span className='px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full border border-orange-400'>{props.genre[0]}</span>
          <span className='px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-400'>{props.genre[1]}</span>
            <span className='px-3 py-1 bg-red-500/20 text-red-300 rounded-full border border-red-400'>{props.genre[2]}</span>
            <span className='px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-400'>{props.genre[3]}</span>
            <span className='px-3 py-1 bg-green-500/20 text-green-300 rounded-full border border-green-400'>{props.genre[4]}</span>
        </div>
        <div className="mt-2 text-sm flex items-center gap-1 text-yellow-400">
        <span className="">{props.rating}</span>
        <span> | </span>
        <span>{props.reviews} Reviews</span>
        </div>
      </div>
    </div>
  );
}

export default Anidis;
