import { RouterProvider } from 'react-router';
import { CommonProvider } from './components';
import { router } from './router';

const App = () => {
  return (
    <CommonProvider>
      <RouterProvider router={router} />
    </CommonProvider>
  );
};

export default App;
