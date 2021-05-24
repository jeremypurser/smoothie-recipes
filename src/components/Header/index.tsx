import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles.container}>
      <h1>Smoothie Recipes</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              activeClassName={styles.active}
              className={styles.link}
              to="/recipe"
            >
              New Recipe
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={styles.active}
              className={styles.link}
              to="/recipes"
            >
              Recipes
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
