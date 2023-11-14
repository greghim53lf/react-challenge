import { useEffect, useState } from "react";
import { imageURLs } from "./data";
import "./style.css";

export default function MainApp() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageChange = (op) => {
    let nextIndex;
    switch (op) {
      case "+":
        const isLastSlide = currentIndex === imageURLs.length - 1;
        nextIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
        break;
      case "-":
        const isFirstSlide = currentIndex === 0;
        nextIndex = isFirstSlide ? imageURLs.length - 1 : currentIndex - 1;
        setCurrentIndex(nextIndex);
        break;
      default:
        break;
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    };
    

    
  return (
    <div className="mainApp">
      <div className="image">
        <img src={imageURLs[currentIndex].url} alt="slide" />
      </div>
      <div className="slideDots">
        {imageURLs.map((slide, index) => (
          <div
            className={`dot ${index === currentIndex && "active"}`}
            key={index}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={() => handleImageChange("+")}>+</button>
        <button onClick={() => handleImageChange("-")}>-</button>
      </div>
      {/* <div className="controls">
        <button onClick={() => setIsAuto(prev => !prev)}>Auto+</button>
        <button onClick={() => setIsAuto("stop")}>Stop</button>
        <button onClick={() => setIsAuto(prev => !prev)}>Auto-</button>
      </div> */}
    </div>
  );
}
