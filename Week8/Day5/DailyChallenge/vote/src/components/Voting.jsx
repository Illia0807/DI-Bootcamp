import React, { useState } from "react";

const Voting = () => {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const vote = (index) => {
        const updatedLanguages = [...languages];
        updatedLanguages[index].votes += 1;
        setLanguages(updatedLanguages);
  };
  return (
    <>
      <h2>Voiting</h2>
      {languages &&
        languages.map((item, index) => {
          return (
            <div key={index}>
              {item.name}
              {item.votes}
              <button onClick={() => vote(index)}>Vote</button>
            </div>
          );
        })}
    </>
  );
};

export default Voting;
