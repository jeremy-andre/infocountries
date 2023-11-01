import React, { useState, useRef } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useClickAway } from "react-use";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  defaultOption: string;
  onOptionChange: (value: string) => void;
  label?: string | null;
  classname?: string | null;
}

const SelectUI: React.FC<CustomSelectProps> = ({
  options,
  defaultOption,
  onOptionChange,
  label,
  classname,
}) => {
  // transform value in label to persist default value with label
  const defaultValue = options.find((option) => option.value === defaultOption);
  console.log(defaultValue);

  const [selectedOption, setSelectedOption] = useState(defaultValue?.label);
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option.label);
    setShowOptions(false);
    onOptionChange(option.value);
  };

  const clickAwayRef = useRef(null);

  useClickAway(clickAwayRef, () => {
    setShowOptions(false);
  });

  return (
    <div
      className={`w-full ${classname} relative overflow-visible`}
      ref={clickAwayRef}
    >
      <div
        className=" flex h-[2.5rem] cursor-pointer select-none items-center justify-between gap-2 rounded-md bg-[rgb(230,230,230)] px-3 transition hover:bg-[rgb(210,210,210)] dark:bg-blackRGB30 dark:hover:bg-[rgb(40,40,40)]"
        onClick={toggleOptions}
      >
        {/* {label && <h1>{label}</h1>} */}
        <h1>{selectedOption}</h1>
        <MdOutlineKeyboardArrowUp
          className={`transition ${showOptions ? "rotate-180" : ""}`}
        />
      </div>
      {showOptions && (
        <ul
          className={`absolute mt-2 flex w-full dark:bg-blackRGB30 ${classname} z-10 flex-col overflow-visible rounded-md bg-[rgb(240,240,240)] p-2`}
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer select-none rounded-md px-2 py-1 transition hover:bg-[rgb(220,220,220)] dark:hover:bg-[rgb(40,40,40)]"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectUI;
