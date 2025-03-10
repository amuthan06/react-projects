import React, { useEffect, useState } from "react";
import imageData from "./data";

function ImageSliderWithoutApi() {
  const [image, setImage] = useState([]);
  const [slideNumber, setSlideNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setImage(imageData);
  }, [slideNumber]);

  const handleReduceSlider = () => {
    setLoading(true);
    if (slideNumber > 1) {
      setSlideNumber((prev) => prev - 1);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const handleIncreaseSlider = () => {
    setImage(true);
    setLoading(true);
    if (slideNumber < image.length - 1) {
      setSlideNumber((prev) => prev + 1);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  console.log("=>", loading);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        <p>Image loading ....</p>
      ) : (
        <div className="w-80 p-4 bg-white rounded-lg shadow-md">
          {image?.map((value, index) =>
            slideNumber === index + 1 ? (
              <div key={index} className="text-center">
                <img
                  src={value.url}
                  alt={value.image_name}
                  className="w-full h-60 object-cover rounded-lg"
                />
                <p className="mt-2 text-lg font-semibold">{value.image_name}</p>
              </div>
            ) : null
          )}
        </div>
      )}
      <div className="mt-4 flex gap-4">
        <button
          onClick={handleReduceSlider}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={handleIncreaseSlider}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ImageSliderWithoutApi;
