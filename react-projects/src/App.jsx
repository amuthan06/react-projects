import React from "react";
import Accordian from "../components/1-accordian";
import ColourChange from "../components/2-changecolor";
import StarRating from "../components/3-star-rating";

function App() {
  return (
    <div>
      {/* <Accordian/> */}
      {/* <ColourChange/> */}
      <StarRating starcount={10}/>
    </div>
  );
}

export default App;
