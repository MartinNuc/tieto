import React from 'react'
import { useParams } from 'react-router';
import { useJoke } from '../api-requests/use-joke';

export function JokePage() {
  const { category } = useParams();
  const { joke } = useJoke({ category });

  return (
    <div>{joke}</div>
  )
}
