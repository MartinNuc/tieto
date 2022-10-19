import { useJoke } from "./use-joke";

export const Joke = () => {
  const { isLoading, joke, refetch } = useJoke();

  return <>
    {isLoading && "Loading joke..."}
    <div>{joke}</div>
    <button type="button" onClick={refetch}>Fetch next joke</button>
  </>
}