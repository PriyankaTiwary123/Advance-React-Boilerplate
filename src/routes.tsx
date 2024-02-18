import { RouteObject } from 'react-router-dom';
import { Home, Detail } from './pages';

// Define your route configuration
const routeConfig: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/pet-details', element: <Detail /> },
];

export default routeConfig;
