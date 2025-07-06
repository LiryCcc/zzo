import classNames from 'classnames';
import s from './app.module.less';

const App = () => {
  return <div className={classNames(s['app-name'])}>{'Zzo app by Dawanbuchila & Liry'}</div>;
};

export default App;
