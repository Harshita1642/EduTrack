import React, { useState } from "react";
import c from "../Styles/Dictionary.module.css"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const Dictionary = () => {
  const [word, setWord] = useState(""); 
  const [definition, setDefinition] = useState(""); 
  const [error, setError] = useState(""); 
  const [phonetic, setPhonetic] = useState(""); 
  const [audio, setAudio] = useState("");

  const fetchWord = async () => {
    if (!word) {
      setError("Please enter a word");
      return;
    }
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const wordData = data[0];
        const definitions = wordData.meanings[0]?.definitions;

        if (definitions && definitions.length > 0) {
          setDefinition(
            definitions.slice(0, 3).map((def, index) => (
              <div key={index}>
                <p><strong>Definition {index + 1}:</strong> {def.definition}</p>
                {def.example && <p><em>Example: {def.example}</em></p>}
              </div>
            ))
          );
          setPhonetic(wordData.phonetic);
          const audioUrl = wordData.phonetics.find((p) => p.audio)?.audio || "";
          setAudio(audioUrl);
          setError(""); 
        } else {
          setError("Definitions not found.");
          setDefinition("");
          setAudio("");
        }
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (err) {
      console.log(err);
      setError("Error fetching the word. Please try again.");
      setDefinition(""); 
      setAudio("");
    }
  };
  const handleInputChange = (e) => {
    const inputWord = e.target.value;
    setWord(inputWord);

    if (!inputWord) {
      setError("");
      setDefinition("");
      setPhonetic("");
      setAudio("");
    }
  };
  return (
    <div className={c.container}>
    <div className={c.searchBar}>
      <input
        className={c.inputBox}
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={handleInputChange}
      />
      <button 
          className={c.button}
          onClick={fetchWord}
        >
        <MagnifyingGlassIcon className="h-6 w-6" />
    </button>
    </div>
      {error && <p style={{ color: "red" }} className={c.error}>{error}</p>}
    {definition || phonetic || audio ? (
    <div className={c.resultBox}>
      {phonetic && (
        <div className={c.phonetic}>
          <h3>Phonetic: {phonetic}</h3>
          {audio && (
            <audio controls className={c.audio}>
              <source src={audio} />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      )}

      {definition && (
        <div>
          {definition}
        </div>
      )}
    </div>
    ):null}
    
  </div>
  );
};

export default Dictionary;
