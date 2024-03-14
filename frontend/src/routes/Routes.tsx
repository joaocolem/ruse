import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from '../pages/NotFound/NotFound'
import HomePage from '../pages/HomePage/page'
import { RoutesEnum } from './enums'

const router = createBrowserRouter([
  {
    path: RoutesEnum.ROOT,
    errorElement: <NotFound />,
    children: [{ index: true, element: <HomePage /> }, {}]
  }
])

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />
}

export default AppRoutes
