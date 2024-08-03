import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          if (count !== 0) {
            setCount(count - 1);
          }
        }}
        className={
          count === 0
            ? "button-minus button-desactive"
            : "button-minus button-active"
        }
      >
        Minus
      </button>
    </>
  );
}
