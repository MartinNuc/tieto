import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export function JokeCategories() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get<string[]>('https://api.chucknorris.io/jokes/categories')
      setCategories(response.data);
    };

    fetch();
  }, []);

  return (
    <ul>
      {categories.map(category => (
        <li key={category}>
          <Link to={`/categories/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  )
}
