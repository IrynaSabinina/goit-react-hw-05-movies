import { Link, useLocation } from 'react-router-dom';

export const BackButton = () => {
  const location = useLocation();

  return (
    <Link to={location.state ? location.state : '/'} type="button">
      Back
    </Link>
  );
};
