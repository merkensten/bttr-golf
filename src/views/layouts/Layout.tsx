import * as React from 'react';

// components
import { Navbar, Footer } from '../../components';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  const user = true;

  return (
    <>
      {user && <Navbar />}
      <main>{children}</main>

      {user && <Footer />}
    </>
  );
}
