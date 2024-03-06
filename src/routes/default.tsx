import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('../features/home'))
const Imprint = lazy(() => import('../features/imprint'))
const DataProtection = lazy(() => import('../features/data-protection'))

export const defaultRoutes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'impressum',
    element: <Imprint />
  },
  {
    path: 'datowy-ski',
    element: <DataProtection />
  },
  { path: '*', element: <Navigate to='/' /> }
]

export enum ROUTES {
  'home' = '/',
  'imprint' = '/impressum',
  'datowy-skit' = '/datowy-ski'
}
