import React, { useEffect, useState } from 'react'


function ImageSlider({url}) {

    const [image,setImage] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [slideNumber, setSlideNumber] = useState(1)

    const imageUrl = url
    console.log(imageUrl);

    useEffect(()=>{
        getUrl(imageUrl)
    },[slideNumber])

    const getUrl = async (imageUrl)=>{
        try {
            const data = await fetch(imageUrl)
            const imageUrls = await data.json();
            setImage(imageUrls)
        } catch (err) {
            setError(err.message)
        }finally{
            setLoading(false)
        }
    }

    const handleReduceSlide = ()=>{
        if(slideNumber>1){
            setSlideNumber((pre) => pre-1)
        }
    }
    const handleIncreasSlice = () => {
        if(slideNumber<image.length-1){
            setSlideNumber((prev)=>prev+1)
        }
    }
  console.log('==>',slideNumber)
  return (
    <div>
        <div>
            {loading
            ?<p>Images Loading .....</p>
            :<div>
                {image.map((value,index)=>(
                    slideNumber === index
                    ?<img src={value.url} alt={value.id} key={index} />
                    :null
                ))}
                </div>}
        </div>
        <div>
            <button onClick={handleReduceSlide}>-</button>
            <button onClick={handleIncreasSlice}>+</button>
        </div>
    </div>
  )
}

export default ImageSlider