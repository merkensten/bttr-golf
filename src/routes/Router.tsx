import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RoutingPath } from './RoutingPath';

import { HomeView, NotFoundView, DashboardView } from '../views';
import { UserAuth } from '../context/AuthContext';
import ProtectedRoute from './ProtectedRoute';

export function Router() {
  const { user } = UserAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutingPath.homeView}>
          <Route index element={<HomeView />} />

          <Route path={RoutingPath.dashboardView}>
            <Route
              index
              element={<ProtectedRoute childComponent={<DashboardView />} />}
            />
          </Route>

          {/* Not Found */}
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
