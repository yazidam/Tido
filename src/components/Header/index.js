/* eslint-disable no-unreachable */
import React, { useState } from "react";
import CounterList from "../CounterList";

function Header() {
  const initArrayOfObjects = [
    { id: 1, title: "Title 1", value: 1 },
    { id: 2, title: "Title 2", value: 20 },
    { id: 3, title: "Title 3", value: 25 },
  ];

  const [arrayOfObjects, setArrayOfObjects] = useState(initArrayOfObjects);
  const total = arrayOfObjects.reduce((acc, item) => acc + item.value, 0);

  const increment = (id) => {
    let items = [...arrayOfObjects];
    let i = items.findIndex((elem) => elem.id === id);
    let counter = items[i];
    if (counter) {
      counter = { ...counter, value: counter.value + 1 };

      items[i] = counter;
    }
    setArrayOfObjects(items);
  };

  const decrement = (id) => {
    let items = [...arrayOfObjects];
    let i = items.findIndex((elem) => elem.id === id);
    let counter = items[i];

    if (counter) {
      counter = { ...counter, value: counter.value - 1 };

      items[i] = counter;
    }
    setArrayOfObjects(items);
  };

  const reset = (id) => {
    let items = [...arrayOfObjects];
    let i = items.findIndex((elem) => elem.id === id);
    let counter = items[i];

    if (counter) {
      counter = { ...counter, value: 0 };

      items[i] = counter;
    }
    setArrayOfObjects(items);
  };

  return (
    <>
      <div>summ : {total}</div>
      <CounterList
        arrayOfObjects={arrayOfObjects}
        decrement={decrement}
        increment={increment}
        reset={reset}
      />
    </>
  );
}

export default Header;
