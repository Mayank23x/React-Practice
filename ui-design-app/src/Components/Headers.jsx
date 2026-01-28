import { Search,Menu } from 'lucide-react';
import React from 'react';

function Headers() {
  const list = ["Home", "About", "Services", "Contact"];
  return (
    <div className="bg-black w-full flex items-center justify-between  absolute z-10 px-4 text-white">
        <h3 className="text-yellow-400 text-2xl bold flex flex-col items-center font-serif">Anime<span className='text-sm text-gray-400'>Anime industry</span></h3>
      <nav className=" relative">
        <ul className="flex items-center justify-between gap-6 ">
            {
              list.map((item,idx)=>(
                <li className="hover:text-yellow-400" key={idx} >
                  <span className="m-0.5">{item}</span>
                </li>
              )
            )
            }
        </ul>
      </nav>
      <div className='flex items-center relative'>
        <input type="search" placeholder="Search..." className="rounded-md px-2 py-1 text-white  border-2 border-gray-500 bg-gray-600"/>
      <Search size={27} strokeWidth={1.5} absoluteStrokeWidth className='text-white absolute right-0 px-1'  />
      </div>
  <Menu size={27} strokeWidth={1.5} absoluteStrokeWidth/>
    </div>
  );
}

export default Headers;
