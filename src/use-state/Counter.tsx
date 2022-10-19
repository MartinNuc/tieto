import { useEffect, useState } from "react";

export function Counter() {

  const [count, setCount] = useState(0);
  const [timeoutReference, setTimeoutReference] = useState(null);

  useEffect(() => {
    const timeoutReference = setTimeout(() => console.log(), 1000)
  }, []);


  return <div>
    <p>{count}</p>
    <button type="button" onClick={() => setCount(count + 1)}>Inc</button>
  </div>
}