import { Link, NavLink } from 'react-router';

export default function AboutPage() {
  const mainRoute = '/';

  return (
    <div>
      about page
      <br />
      <NavLink to="/">nav link</NavLink>
      <br />
      <Link to={mainRoute}>Link</Link>
    </div>
  );
}
