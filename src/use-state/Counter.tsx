import { useState } from "react";
import { useJoke } from "../api-requests/use-joke";

export const Counter: React.FC<{}> = () => {
  const [count, setCount] = useState(0);

  return <div>
    <p data-testid="counter">{count}</p>
    <button type="button" onClick={() => setCount(count + 1)}>Inc</button>
  </div>
}