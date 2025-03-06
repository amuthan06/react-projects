import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

function StarRating({starcount}) {

    const [hover, setHover] = useState(0)
    const [clicked,setClicked] = useState(0)

    
    const generateArray=(num)=> {
        let result = [];
        for (let i = 1; i <= num; i++) {
          result.push(i);
        }
        return result;
      }
    const star= generateArray(starcount)
    // console.log(star,'COUNT')
    // console.log('hover value is',hover)
    // console.log('Clicked', clicked);

  return (
    <div className='flex space-x-2'>
        {star.map((_,index)=>(
            <FaStar 
            key={index}
            color={(index+1 <= clicked || index+1 <= hover ? "gold":"grey")}
            onMouseLeave={()=>setHover(0)}
            onMouseOver={()=>setHover(index+1)} 
            onClick={()=>setClicked(index+1)} ></FaStar>
        ))}
    </div>
  )
}

export default StarRating