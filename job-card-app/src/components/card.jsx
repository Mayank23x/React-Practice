import React from 'react'
import {Bookmark} from 'lucide-react'
const card = (props) => {
  return (
    <div className='Card'>
        <div className="top">
            <img src={props.brandlogo} alt="" />
            <button>save<Bookmark  size={16}/></button>
        </div>
        <div className="center">
            <h3>{props.companyname} <span>{props.dateposted}</span></h3>
            <h2>{props.post}</h2>
           
            <span className="job-details"> <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4></span>
        </div>
        <div className="bottom">
            <h3>{props.pay} <span>{props.location}</span></h3>
            <button>Apply now</button>
        </div>      
    </div>
  )
}

export default card
