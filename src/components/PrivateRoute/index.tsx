import { Suspense } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Loading from '../../components/Loading';

// Auth Context
import useAuthContext from '../../contexts/Auth';

type Props = { children: JSX.Element };

const PrivateRoute = ({ children }: Props) => {
  const location = useLocation();
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default PrivateRoute;
