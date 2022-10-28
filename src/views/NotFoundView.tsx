import React from 'react';
import { Layout } from './layouts/Layout';
import { UserAuth } from '../context/AuthContext';

type Props = {
  children: React.ReactNode;
  cssClasses?: string;
};

function NotFoundWrapper({ children, cssClasses }: Props) {
  const { user } = UserAuth();
  return (
    <div
      className={`${cssClasses}bg-white px-4 sm:px-6 md:grid md:place-items-center lg:px-8`}
    >
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">
            404
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Sidan hittades inte
              </h1>
              <p className="mt-1 text-base text-gray-500">
                Dubbelkolla urlen och testa igen
              </p>
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export function NotFoundView() {
  const user = false;

  if (user) {
    return (
      <Layout>
        <NotFoundWrapper cssClasses="py-16 sm:py-36">
          <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <a href="/app" className="btn">
              Till appsidan
            </a>
          </div>
        </NotFoundWrapper>
      </Layout>
    );
  }

  return (
    <NotFoundWrapper cssClasses="mt-[200px] lg:mt-[500px]">
      <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
        <a href="/" className="btn">
          Till startsidan
        </a>
      </div>
    </NotFoundWrapper>
  );
}
