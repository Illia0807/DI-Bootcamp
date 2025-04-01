import React, { useEffect } from "react";

const QuoteAndAuthor = ({ quote, author, displayColor, handleClick }) => {
  const randomColor = displayColor();

  useEffect(() => {
    const html = document.documentElement;
    html.style.backgroundColor = randomColor; 
  }, [randomColor]);

  return (
    <div>
      <div style={{ backgroundColor: "white" }} className="quotebox">
        <div
          className="fadeIn"
          key={quote} 
          style={{ color: randomColor }}
        >
          <h1 id="quote">"{quote}"</h1>
          <h5 id="author">-{author ? author : "Unknown"}-</h5>
        </div>
        <button
          style={{ backgroundColor: randomColor }}
          id="newquote"
          onClick={handleClick}
        >
          New quote
        </button>
      </div>
    </div>
  );
};

export default QuoteAndAuthor;
