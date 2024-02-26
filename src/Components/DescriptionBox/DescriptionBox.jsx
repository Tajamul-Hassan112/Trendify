import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="DescriptionBox">
      <div className="DescriptionBox-navigator">
        <div className="DescriptionBox-navbox">Description</div>
        <div className="DescriptionBox-navbox fade">Reviews (125)</div>
        <div className="DescriptionBox-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            ratione itaque impedit esse eveniet facere eos, necessitatibus
            suscipit quod aut reprehenderit architecto a dicta aliquid, incidunt
            quas doloribus fuga commodi, veritatis error expedita perferendis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            unde voluptas quos sit nesciunt, quis aspernatur maiores sint aut
            dolor modi rem ea, voluptatum, qui incidunt. Officia dolorem ab
            beatae vero, tenetur dolore ratione ullam reprehenderit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
