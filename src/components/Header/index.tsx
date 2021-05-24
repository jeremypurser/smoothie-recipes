import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles.container}>
      <h1>Smoothie Recipes</h1>
      <nav>
        <ul>
          <li>
            <Link to="/recipe">New Recipe</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
