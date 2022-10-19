import { useState } from 'react';
import { Joke } from './api-requests/Joke';
import './App.css';
import { Dropdown } from './dropdown/Dropdown';
import { MouseTracker } from './use-effect/mouse-moving/MouseTracker';
import { NumberGeneratorClass } from './use-state/NumberGeneratorClass';

function App() {
  const [isVisible, setVisibility] = useState(true);
  return <>
    <Joke />
    <Dropdown />
    {isVisible && <MouseTracker />}
    <button onClick={() => setVisibility(!isVisible)}>toggle</button>
  </>
}

export default App;
