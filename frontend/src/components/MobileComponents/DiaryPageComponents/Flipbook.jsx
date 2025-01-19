import HTMLFlipBook from "react-pageflip";
import React, { useState } from "react";
import frontcover from "../../../assets/images/frontcover.png";
import backcover from "../../../assets/images/backcover.png";

const Pages = React.forwardRef((props, ref) => {
  return (
    <div className="bg-red-200 relative" ref={ref}>
      {props.number && <p className="absolute right-0 p-2 pr-3">{props.number}</p>}
      <img src={props.image} className={`w-full h-full bg-contain border-4 border-pink-300 rounded-md ${props.image ? "" : "hidden"}`} alt="Page" />
    </div>
  );
});

Pages.displayName = "Pages";

function Flipbook(props) {

  return (
    <div className={`flex w-full absolute top-24 z-10`}>
      <HTMLFlipBook
        width={300}
        height={400}
        size="stretch"
        drawShadow={true}
        showCover={true}
        mobileScrollSupport={true}
        className=""
      >
        <Pages image={frontcover}></Pages>
        {props.pages.map((page, i) => (
          <Pages key={i} number={i + 1} image={page.image}></Pages>
        ))}
        {props.pages.length % 2 === 0 ? "" : <Pages />}
        <Pages image={backcover}></Pages>
      </HTMLFlipBook>
    </div>
  );
}

export default Flipbook;
