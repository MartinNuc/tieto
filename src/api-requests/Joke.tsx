import { useEffect, useState } from "react"
import axios from 'axios';

type ResponseType = {
  value: string;
}

export const Joke = () => {

  const [joke, setJoke] = useState<string | null>(null);

  async function fetchJoke() {
    const response = await axios.get<ResponseType>('https://api.chucknorris.io/jokes/random')
    setJoke(response.data.value);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return <>
    <div>{joke}</div>
    <button type="button" onClick={fetchJoke}>Fetch next joke</button>
  </>
}