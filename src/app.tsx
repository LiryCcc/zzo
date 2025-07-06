import classNames from 'classnames';
import s from './app.module.less';

const App = () => {
  return <div className={classNames(s['app-name'])}>{'zzo app by dawanbuchila & liry'}</div>;
};

export default App;
