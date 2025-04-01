import { useState } from "react";
import "./App.css";
import quotes from "./components/QuoteDatabase";
import QuoteAndAuthor from "./components/QuoteAndAuthor";

function App() {
  const [quote, setQuote] = useState(quotes[0].quote);
  const [author, setAuthor] = useState(quotes[0].author);

  const randomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  };

  const shuffleQuotes = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleClick = () => {
    const generateRandomQuote = randomQuote();
    setQuote(generateRandomQuote.quote);
    setAuthor(generateRandomQuote.author);
    shuffleQuotes(quotes); 
  };

  const randomColor = () => {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`; // 
    return color;
  };

  return (
    <>
      <div>
        <QuoteAndAuthor
          displayColor={randomColor}
          handleClick={handleClick}
          quote={quote}
          author={author}
        />
      </div>
    </>
  );
}

export default App;
