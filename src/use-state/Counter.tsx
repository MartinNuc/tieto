import { useState } from "react";

export function Counter() {

  const [count, setCount] = useState(0);

  return <div>
    <p>{count}</p>
    <button type="button" onClick={() => setCount(count + 1)}>Inc</button>
  </div>
}