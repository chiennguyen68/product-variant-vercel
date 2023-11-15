import React from "react";

export default function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        <input
          className="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden
          defaultChecked
        />
        <div className="carousel-item">
          <img src="https://img.freepik.com/free-vector/set-clothes-accessories-man-woman-illustrations-garment-from-wardrobe-cartoon-pants-jeans-shirt-dress-isolated-white_74855-20713.jpg?w=2000" />
        </div>
        <input
          className="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden
        />
        <div className="carousel-item">
          <img src="https://media.glamourmagazine.co.uk/photos/64ba7203c24fb9a18ac297ef/16:9/w_1920,h_1080,c_limit/BABY%20CLOTHES%20210723%20default-.jpg" />
        </div>
        <input
          className="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden
        />
        <div className="carousel-item">
          <img src="https://media.glamour.com/photos/63a34e7159865935c710d67f/16:9/w_2992,h_1683,c_limit/affordable%20baby%20clothes.png" />
        </div>
        <label htmlFor="carousel-3" className="carousel-control prev control-1">
          ‹
        </label>
        <label htmlFor="carousel-2" className="carousel-control next control-1">
          ›
        </label>
        <label htmlFor="carousel-1" className="carousel-control prev control-2">
          ‹
        </label>
        <label htmlFor="carousel-3" className="carousel-control next control-2">
          ›
        </label>
        <label htmlFor="carousel-2" className="carousel-control prev control-3">
          ‹
        </label>
        <label htmlFor="carousel-1" className="carousel-control next control-3">
          ›
        </label>
        <ol className="carousel-indicators">
          <li>
            <label htmlFor="carousel-1" className="carousel-bullet">
              •
            </label>
          </li>
          <li>
            <label htmlFor="carousel-2" className="carousel-bullet">
              •
            </label>
          </li>
          <li>
            <label htmlFor="carousel-3" className="carousel-bullet">
              •
            </label>
          </li>
        </ol>
      </div>
    </div>
  );
}
