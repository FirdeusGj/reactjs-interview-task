import React, { useState } from "react";
import "./Categories.css";
import Category from "./Category";

export default function Categories() {
  const [clicked, setClicked] = useState(false);
  const [info, setInfo] = useState([
    { id: 1, categoryName: "Test1", link: "test1Link" },
    { id: 2, categoryName: "Test2", link: "test2Link" },
    { id: 3, categoryName: "Test3", link: "test3Link" },
    { id: 4, categoryName: "Test4", link: "test4Link" },
    { id: 5, categoryName: "Test5", link: "test5Link" },
  ]);
  const [inputValue, setInputValue] = useState("");
  let counterId = 0;
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const buttonClicked = () => {
    setClicked(!clicked);
  };

  const closeButton = () => {
    setClicked(false);
    setInputValue("");
  };
  const createButton = () => {
    let capitalize = inputValue.slice(0, 1).toUpperCase() + inputValue.slice(1);
    if (capitalize.trim() !== "") {
      if (info.some((elem) => elem.categoryName === capitalize)) {
        alert("Name already in use");
      } else {
        setInfo((prevInfo) => [
          ...prevInfo,
          {
            id: counterId++,
            number: 0,
            link: capitalize + "Link",
            categoryName: capitalize,
          },
        ]);
        setInputValue("");
      }
    } else {
      alert("Please write something");
    }
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      createButton();
    }
  };

  return (
    <div id="category">
      <div className="createCategory-input">
        <div
          onClick={buttonClicked}
          className={!clicked ? "category__button" : "displayNone"}
        >
          <div className="createCategory__button">
            <button>Create Category</button>
          </div>
          <div className="createCategory__svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </div>
        </div>
        <div className={clicked ? `createCategory` : `displayNone`}>
          <div className="createCategory__input">
            <input
              className="createCategory__input-text"
              type="text"
              placeholder="Add a category..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleEnterKeyPress}
            />
            <button onClick={createButton} className="createCategory__create">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </button>
            <button onClick={closeButton} className="createCategory__close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="categories">
        {info.map((elem) => (
          <Category key={elem.id} name={elem.categoryName} link={elem.link} />
        ))}
      </div>
    </div>
  );
}
