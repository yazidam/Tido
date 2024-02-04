import React, { useState } from "react";
import Counter from "../Counter";

function CounterList() {
  const initArrayOfObjects = [
    { id: 1, title: "Title 1", value: 1 },
    { id: 2, title: "Title 2", value: 20 },
    { id: 3, title: "Title 3", value: 25 },
  ];

  const [arrayOfObjects, setArrayOfObjects] = useState(initArrayOfObjects);

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
    <div>
      {arrayOfObjects.map((elem) => (
        <Counter
          key={elem.id}
          id={elem.id}
          value={elem.value}
          increment={increment}
          decrement={decrement}
          reset={reset}
        >
          {elem.title}
        </Counter>
      ))}
    </div>
  );
}

export default CounterList;
