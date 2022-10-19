import { useEffect, useState } from 'react';
import axios from 'axios';

type ResponseType = {
  value: string;
};

type Props = {
  category?: string;
};

export function useJoke({ category }: Props = {}) {
  const [joke, setJoke] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchJoke() {
    setIsLoading(true);
    const response = await axios.get<ResponseType>(
      `https://api.chucknorris.io/jokes/random?${
        category ? `category=${category}` : ''
      }`
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
