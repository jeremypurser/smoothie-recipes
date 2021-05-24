import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { Smoothie } from '../Smoothie';

export function Smoothies() {
  const recipes = useAppSelector((state) => state.recipes);

  return recipes.allIds.length > 0 ? (
    <>
      {recipes.allIds.map((id) => (
        <Smoothie recipe={recipes.byId[id]} />
      ))}
    </>
  ) : (
    <p>
      No recipes yet. Create one{' '}
      <Link className="link" to="/recipe">
        here
      </Link>
      .
    </p>
  );
}
