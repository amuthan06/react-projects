import React, { useEffect, useState } from 'react'

function LoadMore() {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    // const [page, setPage] = useState(1)
    const [skip, setSkip] = useState(0)

    useEffect(()=>{
        getData()
    },[skip])

    const getData = async ()=>{
        const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`)
        const data = await res.json()
        setProduct([...product, ...data.products])
        setLoading(false)
    }

    const handleViewMore = ()=>{
        // setPage(pre => pre+1)
        setSkip(pre => pre+10)
    } 
    
  return (
    <div className="p-6">
            <div>
                {loading ? <p className="text-center text-lg font-semibold">Loading products...</p>
                    : <div className="grid grid-cols-5 gap-6">
                        {product.map((value, index) => (
                            <div key={index} className="border p-4 rounded-lg shadow-md text-center">
                                <img src={value.thumbnail} alt={value.images[0]} className="w-full h-32 object-cover rounded-md" />
                                <p className="mt-2 font-semibold">{value.id}. {value.title}</p>
                            </div>
                        ))}
                    </div>}
            </div>
            <div className="mt-6 text-center">
                {skip === 90
                    ? <p className="text-lg font-bold text-green-600">100 products displayed</p>
                    : <button 
                        onClick={handleViewMore} 
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        View More
                    </button>}
            </div>
        </div>
  )
}

export default LoadMore