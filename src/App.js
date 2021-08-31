import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Route from "./Components/Route";
import Header from "./Components/Header";

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

  return (
    <div>
      <Header />
      <Route path="/">
        {" "}
        <Accordion items={items} />{" "}
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
    </div>
  );
};
