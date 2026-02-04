import { isRouteErrorResponse, useRouteError } from 'react-router';

import { Layout } from './root';

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Layout>
        <div className="container">
          <h1>
            {error.status} {error.statusText}
          </h1>
          <p>{error.data}</p>
        </div>
      </Layout>
    );
  } else if (error instanceof Error) {
    return (
      <Layout>
        <div className="container">
          <h1>Error</h1>
          <p>{error.message}</p>
          <p>The stack trace is:</p>
          <pre>{error.stack}</pre>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h1>Unknown Error</h1>
      </Layout>
    );
  }
}
