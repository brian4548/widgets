import React from "react";
// import Accordion from "./Components/Accordion";
import Search from "./Components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend javaScript Framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS framework among engineers"
  },
  {
    title: "Why do you use React?",
    content: "you use React by creating components.",
  },
];

export default () => {
  return (
    <div>
      {/* <Accordion items={items}/> */}
      <Search />
    </div>
  );
};
