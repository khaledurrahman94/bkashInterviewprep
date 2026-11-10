import React from "react";
import "./grid.css";

function Grid() {
  return (
    <>
      <div className="w-full">
        {/* <div className="container ">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div> */}

        <div className="container2">
          <div className="item1">1</div>
          <div className="item2">2</div>
          <div className="item3">3</div>
          <div className="item4">4</div>
          <div className="item5">5</div>
          <div className="item6">6</div>
          <div className="item6">7</div>
          <div className="item6">8</div>
        </div>
      </div>

      {/* <div className="container3 ">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div> */}

      <div>
        <button className=" trigger">Select</button>
        <div className=" listbox">
          <div>option 1</div>
          <div>option 2</div>
        </div>
      </div>
    </>
  );
}

export default Grid;
