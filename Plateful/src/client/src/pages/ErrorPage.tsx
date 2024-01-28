import { useRouteError } from "react-router-dom";

export type RouteError = Error & {
  statusText?: string;
  status?: string;
};

export default function ErrorPage() {
  const error = useRouteError() as RouteError | null;
  console.error(error);

  let errorMessage = 'An unexpected error has occurred.';
  let statusCodeMessage = '';

  if (error) {
    errorMessage = error.statusText || error.message || errorMessage;
    statusCodeMessage = error.status? `Error Code: ${error.status}` : '';
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {<p><i>{statusCodeMessage}: {errorMessage}</i></p>}
    </div>
  );
}
