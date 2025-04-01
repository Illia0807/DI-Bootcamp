import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      
      const response = await fetch("http://localhost:4000/api/world", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();
      setResponseMessage(data.message); 
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    async function fetchMessage() {
      const response = await fetch("http://localhost:4000/api/hello");
      const data = await response.text();
      setMessage(data);
    }

    fetchMessage();
  }, []);

  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Введите текст"
          />
          <button type="submit">Send</button>
        </form>

        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </>
  );
}

export default App;
