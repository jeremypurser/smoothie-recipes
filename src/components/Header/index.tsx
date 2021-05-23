import { Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <h1>Smoothie Recipes</h1>
      <nav>
        <ul>
          <li>
            <Link to="recipe">New Recipe</Link>
          </li>
          <li>All Recipes</li>
        </ul>
      </nav>
    </>
  );
}
