import HTMLFlipBook from "react-pageflip";
import React, { useState } from "react";
import frontcover from "../../../assets/images/frontcover.png";
import backcover from "../../../assets/images/backcover.png";

// Import Like This
// <Flipbook pages={pages} />
// const [pages, setPages] = useState([
//   { id: 2, body: "Angel going on a picnic!", image: "https://i.pinimg.com/736x/9a/18/bd/9a18bdb1387b44db5df2b96ef4419bf7.jpg" },
//   { id: 3, body: "We're in New York OMG!!!", image: "https://i.pinimg.com/736x/61/d5/b9/61d5b9bc245f7fbaa9bcf33f1018e746.jpg" },
//   { id: 4, body: "Visiting mom today :')", image: "https://i.pinimg.com/736x/66/e7/cd/66e7cd95979a904f28a66031a84a62e6.jpg" },
//   { id: 5, body: "Here at the doctor, hopefully I don't have the flu...", image: "https://i.pinimg.com/736x/09/77/2f/09772fe7262839afbcda7318fe1c647d.jpg" },
//   { id: 6, body: "SKYDIVING WITH MY LITTLE ANGEL AHHH", image: "https://i.pinimg.com/736x/56/65/6a/56656ac91d200d97780a0e2c1715efeb.jpg" },
//   { id: 7, body: "SKYDIVING WITH MY LITTLE ANGEL AHHH", image: "https://i.pinimg.com/736x/56/65/6a/56656ac91d200d97780a0e2c1715efeb.jpg" }
// ]);

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
        {props.pages.length % 2 === 0 ? <Pages image={backcover}></Pages> : <Pages/> }
      </HTMLFlipBook>
    </div>
  );
}

export default Flipbook;
