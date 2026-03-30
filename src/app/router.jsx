import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { NotFoundPage } from '../pages/NotFoundPage'
import { StudioAboutPage } from '../pages/StudioAboutPage'
import { StudioContactPage } from '../pages/StudioContactPage'
import { StudioHomePage } from '../pages/StudioHomePage'

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
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
