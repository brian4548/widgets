import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input onChange={handleTextChange} value={text} />
        </div>
      </div>

      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
        label="select a language"
      />
      <hr />
      <h3>Output</h3>
      <Convert language={language} text={text}/>
    </div>
  );
};

export default Translate;
