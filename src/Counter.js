import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue(value + 1)}>increment</button>
      <button onClick={() => setValue(value - 1)}>decrement</button>
      <h1>{value}</h1>
    </div>
  );
};
export default Counter;
