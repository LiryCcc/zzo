import { createRoot } from 'react-dom/client';
import App from './app';
import init from './init';

const root = createRoot(document.getElementById('root')!);

const mount = () => {
  root.render(<App />);
};

const unmount = () => {
  root.unmount();
};

const main = async () => {
  window.mount = mount;
  window.unmount = unmount;
  await init();
  if (!window.__MICRO_APP_ENVIRONMENT__) {
    mount();
  }
};

main();

export type UnmountType = typeof unmount;
export type MountType = typeof mount;
