import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { HomePage } from '../pages/HomePage'
import { ManPage } from '../pages/ManPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'man', element: <ManPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
],  {
    basename: '/Jia',
  },)
