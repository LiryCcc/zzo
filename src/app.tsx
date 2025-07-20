import { CommonProvider } from './components';
import Home from './pages/home';

const App = () => {
  return (
    <CommonProvider>
      <Home></Home>
    </CommonProvider>
  );
};

export default App;
