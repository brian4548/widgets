import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend javaScript Framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS framework among engineers",
  },
  {
    title: "Why do you use React?",
    content: "you use React by creating components.",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "Blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Toggle Dropdown
      </button>
      {showDropdown ? 
        <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> : null}
    </div>
  );
};
