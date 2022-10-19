import { useEffect, useState } from 'react';
import axios from 'axios';

type ResponseType = {
  value: string;
};

export function useJoke() {
  const [joke, setJoke] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchJoke() {
    setIsLoading(true);
    const response = await axios.get<ResponseType>(
      'https://api.chucknorris.io/jokes/random'
    );
    setJoke(response.data.value);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return {
    joke,
    refetch: fetchJoke,
    isLoading,
  };
}
