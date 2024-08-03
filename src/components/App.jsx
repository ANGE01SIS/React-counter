import { useState } from "react";

export function App() {
  let [count, setCount] = useState(0);

  return (
    <>
      <div className="contTotalCounter">
        <button
          onClick={() => {
            if (count !== 0) {
              setCount(count - 1);
            }
          }}
          className={
            count === 0
              ? "button button-minus button-desactive"
              : "button button-minus button-active"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
        <h1 className="countNumber">{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="button button-plus"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <div className="inputCont">
        <input
          type="number"
          onChange={(e) => setCount((count = Number(e.target.value)))}
          className="input-change-value"
          min={0}
        />
      </div>
    </>
  );
}
