import React from "react";
import Counter from "../Counter";

function CounterList({ arrayOfObjects, decrement, increment, reset }) {
  return (
    <div>
      {arrayOfObjects?.map((elem) => (
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
