import React from "react";
import Accordian from "../components/1-accordian";
import ColourChange from "../components/2-changecolor";
import StarRating from "../components/3-star-rating";
import ImageSlider from "../components/4-image-slider";
import ImageSliderWithoutApi from "../components/4.1.image-slide-without-api";

function App() {
  return (
    <div>
      {/* <Accordian/> */}
      {/* <ColourChange/> */}
      {/* <StarRating starcount={10}/> */}
      {/*<ImageSlider url={'https://picsum.photos/v2/list?page=1&limit=10'}/>*/} {/*image slider using API */}
      <ImageSliderWithoutApi/>
    </div>
  );
}

export default App;
