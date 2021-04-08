import React, { useState, useEffect } from 'react';
import './index.scss';

function Bullet({ active, onClick }) {
  return (
    <span className={"dot" + (active ? " active" : "")} onClick={onClick}></span>
  )
}

function Slide({ active, image, label }) {
  return (
    <div className={"slide" + (active ? " active": "")}>
      <img src={image} className="image" alt={label} />
      <div className="text">{label}</div>
    </div>
  )
}

function Carousel({data}) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  // Set random image index when slide changes
  useEffect(() => {
    const randomImageIndex = (index) => Math.floor(Math.random() * data[index].images.length);
    setImageIndex(randomImageIndex(slideIndex));
  }, [data, slideIndex]);

  const nextSlide = () => { setSlideIndex(slideIndex + 1) };
  const prevSlide = () => { setSlideIndex(slideIndex - 1) };
  const currentSlide = (n) => () => { setSlideIndex(n) };

  return (
    <div className="carousel">
      <div className="container">
        {data.map(({id, images, title}, index) => <Slide id={id} active={slideIndex === index} image={images[imageIndex]} label={title} />)}

        {slideIndex > 0 && <span className="prev" onClick={prevSlide}>&#10094;</span>}
        {slideIndex < data.length - 1 && <span className="next" onClick={nextSlide}>&#10095;</span>}
      </div>
      <br />

      <div className="bullets">
        {data.map((_, index) => <Bullet active={slideIndex === index} onClick={currentSlide(index)} />)}
      </div>
    </div>
  );
}

export default Carousel;
