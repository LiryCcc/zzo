import { StrictMode, type ReactNode } from 'react';

const CommonProvider = ({ children }: { children: ReactNode }) => {
  return <StrictMode>{children}</StrictMode>;
};

export { CommonProvider };
