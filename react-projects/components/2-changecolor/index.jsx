import React, { useEffect, useState } from 'react'

function ColourChange() {
    const [colorType, setColorType] = useState('')
    const [randomColor, setRandomColor] = useState("#FFFFFF")

    const handleHexColor = () => {
        console.log("Inside HEX")
        const randomHexColor = `#${Math.floor(1000000 + Math.random() * 900000).toString(16)}`;
        setRandomColor(randomHexColor)
    } 

    const handleRgbColor = () => {
        console.log("Inside RGB")
        const randomRGBColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        setRandomColor(randomRGBColor)
    }

    useEffect(()=>{
        if(colorType==='hex'){
            handleHexColor()
        }else if(colorType==='rgb'){
            handleRgbColor()
        }
    },[colorType])

    console.log('1',colorType)
    console.log('2',randomColor)

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center" style={{ background: randomColor }}>
            <div className="flex gap-4 mb-4">
                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition" 
                    onClick={() => setColorType('hex')}
                >
                    Change to HEX
                </button>
                <button 
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition" 
                    onClick={() => setColorType('rgb')}
                >
                    Change to RGB
                </button>
            </div>
            <div className="text-white text-lg font-semibold">{randomColor}</div>
            <button 
                className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition" 
                onClick={colorType === 'hex' ? handleHexColor : handleRgbColor}
            >
                Generate Color
            </button>
        </div>
    )
}

export default ColourChange
