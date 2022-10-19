import { useEffect, useState } from "react";

export const AutoCounterWithInput = () => {
  const [counter, setCounter] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  useEffect(() => {
    const intervalReference = setInterval(() => {
      setCounter((counter) => counter + incrementBy);
    }, 1000)

    return () => clearInterval(intervalReference);
  }, [incrementBy]);

  return <>
    <input type="number"
      value={incrementBy}
      onChange={(e) => setIncrementBy(+e.target.value)} />
    <div>{counter}</div>
  </>
}