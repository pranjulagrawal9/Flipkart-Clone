import React from "react";
import "./SliderButton.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SliderButton({ onClick, direction }) {
  return (
    <>
      {direction === "left" ? (
        <div className="left-arrow arrow" onClick={onClick}>
          <IoIosArrowBack />
        </div>
      ) : (
        <div className="right-arrow arrow" onClick={onClick}>
          <IoIosArrowForward />
        </div>
      )}
    </>
  );
}

export default SliderButton;
