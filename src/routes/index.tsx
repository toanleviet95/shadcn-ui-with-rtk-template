import { Routes, Route } from 'react-router'
import { lazy } from 'react';

const LayoutWithSidebar = lazy(() => import('@/layout/layout-with-sidebar'));
const Dashboard = lazy(() => import('@/pages/dashboard'));
const Profile = lazy(() => import('@/pages/profile'));
const Files = lazy(() => import('@/pages/file-management'));
const Projects = lazy(() => import('@/pages/project-management'));
const Knowledge = lazy(() => import('@/pages/knowledge-management'));

const NotFound = lazy(() => import('@/pages/not-found'));


function ConfiguredRoutes() {
  return (
    <Routes>
      <Route element={<LayoutWithSidebar />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="files" element={<Files />} />
        <Route path="projects" element={<Projects />} />
        <Route path="knowledge" element={<Knowledge />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default ConfiguredRoutes
