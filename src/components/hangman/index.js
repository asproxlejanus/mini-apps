import React, { useState } from "react";

export const Hangman = () => {
  const [word, setWord] = useState("banana");
  const [choosedWord, setChoosedWord] = useState("");
  const [match, setMatch] = useState([]);

  const checkWord = () => {
    let tempWord = "";
    word.split("").map((item, index) => {
      if (item === choosedWord) {
        console.log(item);
      } else {
        tempWord.push(choosedWord);
      }
      console.log(item, index);
    });
    console.log(tempWord);
  };

  return (
    <div>
      <h4>Hangman</h4>
      <p>
        The hidden secret has {word.length} words
        <br />
        {word?.split("").map((item) => (
          <span>*</span>
        ))}
      </p>
      <p>
        <label>Choose a word:</label>
        <input
          value={choosedWord}
          onChange={(e) => setChoosedWord(e.target.value)}
        />
        <button className="ui button" onClick={checkWord}>
          {" "}
          Check
        </button>
      </p>
    </div>
  );
};

export default Hangman;
