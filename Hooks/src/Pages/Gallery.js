import React, { useState } from "react";

function Gallery() {

  const images = [
    "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "https://en.wikipedia.org/wiki/File:Bleachanime.png",
    "https://www.imdb.com/title/tt0214341/mediaviewer/rm1132797952/?ref_=tt_ov_i"
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Image Gallery</h2>

      <img 
        src={images[current]} 
        width="400"
        alt="gallery"
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setCurrent(0)}>1</button>
        <button onClick={() => setCurrent(1)}>2</button>
        <button onClick={() => setCurrent(2)}>3</button>
      </div>
    </div>
  );
}

export default Gallery;
