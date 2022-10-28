import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

type Props = {
  childComponent: React.ReactNode;
};

const ProtectedRoute = ({ childComponent }: Props) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  return <>{childComponent}</>;
};

export default ProtectedRoute;
