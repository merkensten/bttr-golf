import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RoutingPath } from './RoutingPath';

import { HomeView, NotFoundView, DashboardView, Layout } from '../views';

export function Router() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutingPath.homeView}>
          <Route index element={<HomeView />} />

          {user && (
            <Route path={RoutingPath.dashboardView}>
              <Route index element={<DashboardView />} />
            </Route>
          )}

          {/* Not Found */}
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
