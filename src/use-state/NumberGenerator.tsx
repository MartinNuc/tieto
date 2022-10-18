import { useState } from "react";

type Props = {
  pregeneratedCount: number;
}

export function NumberGenerator({ pregeneratedCount }: Props) {

  const initialSet = [];
  for (let i = 0; i < pregeneratedCount; i++) {
    initialSet.push(Math.random());
  }

  const [generatedNumbers, setGeneratedNumbers] = useState(initialSet);

  const handleGenerateNumber = () => {
    setGeneratedNumbers(generatedNumbers);
  }

  return <>
    {generatedNumbers.map(number => <div>{number}</div>)}
    <button type="button" onClick={handleGenerateNumber}>add new</button>
  </>
}