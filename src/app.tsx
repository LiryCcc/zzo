import classNames from 'classnames';
import { StrictMode } from 'react';
import s from './app.module.less';

const App = () => {
  return (
    <StrictMode>
      <div className={classNames(s['app-name'])}>{'Zzo app by Dawanbuchila & Liry'}</div>
    </StrictMode>
  );
};

export default App;
