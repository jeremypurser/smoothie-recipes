import { NavLink } from 'react-router-dom';
import styles from './style.module.css';

export function Header() {
  return (
    <div className={styles.container}>
      <h1>Smoothie Recipes</h1>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" className="link" to="/recipe">
              New Recipe
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" className="link" to="/recipes">
              Recipes
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
