import type { PropsWithChildren } from 'react';

import { Header } from './Header';

interface AppLayoutProps extends PropsWithChildren {}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-2 sm:px-4">{children}</main>
    </>
  );
};
