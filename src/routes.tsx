import { RouteObject } from 'react-router-dom';
import { Home, About } from './pages';

// Define your route configuration
const routeConfig: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
];

export default routeConfig;
