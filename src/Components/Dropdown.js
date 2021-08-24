import React, { useState, useEffect } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setOpen(false);
    }, {capture: true});
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        onClick={() => {
          onSelectedChange(option);
        }}
        key={option.value}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  const openDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">select a color </label>
        <div
          onClick={openDropdown}
          className={`ui selection dropdown ${open ? "visible ative" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
