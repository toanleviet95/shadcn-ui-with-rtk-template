import { Routes, Route } from 'react-router'
import { lazy } from 'react';

const LayoutWithSidebar = lazy(() => import('@/layout/layout-with-sidebar'));
const Dashboard = lazy(() => import('@/pages/dashboard'));
const Profile = lazy(() => import('@/pages/profile'));

function ConfiguredRoutes() {
  return (
    <Routes>
      <Route element={<LayoutWithSidebar />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default ConfiguredRoutes
