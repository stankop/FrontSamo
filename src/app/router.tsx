import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from '../features/auth/ProtectedRoute'
import { MainLayout } from '../layouts/MainLayout'
import { NotFoundPage } from '../pages/NotFoundPage'
import { StudioAboutPage } from '../pages/StudioAboutPage'
import { StudioContactPage } from '../pages/StudioContactPage'
import { StudioDashboardPage } from '../pages/StudioDashboardPage'
import { StudioHomePage } from '../pages/StudioHomePage'
import { StudioLoginPage } from '../pages/StudioLoginPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <StudioHomePage />,
      },
      {
        path: 'o-projektu',
        element: <StudioAboutPage />,
      },
      {
        path: 'kontakt',
        element: <StudioContactPage />,
      },
      {
        path: 'prijava',
        element: <StudioLoginPage />,
      },
    ],
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: 'dashboard',
        element: <StudioDashboardPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
