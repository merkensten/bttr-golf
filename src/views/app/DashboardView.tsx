import React from 'react';
import { Layout } from '../layouts/Layout';
import { UserAuth } from '../../context/AuthContext';

export function DashboardView() {
  const { user } = UserAuth();

  return (
    <Layout>
      <h1>App view</h1>
      {user && <p>{user.email}</p>}
    </Layout>
  );
}
