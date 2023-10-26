import React, { useState } from "react";
import StarBold from "../assets/svg/starBold";

const StarRating = () => {
  const [stars, setStars] = useState([false, false, false, false, false]);

  const toggleStar = (index) => {
    const newStars = stars.map((star, i) => (i < index ? true : false));
    setStars(newStars);
  };

  return (
    <>
      <div className="text-9xl mt-4 w-[272px] flex justify-between">
        {stars.map((star, index) => (
          <span
            key={index}
            onClick={() => toggleStar(index + 1)}
            className={`cursor-pointer `}
          >
            <StarBold fill={star ? "#E3A75A" : "gray"} />
          </span>
        ))}
      </div>
    </>
  );
};

export default StarRating;
