import Home from '@/pages/home';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Home
    }
  ],
  {
    basename: import.meta.env.LIRY_ASSET_PREFIX
  }
);

export { router };
