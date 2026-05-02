import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export function GlobalErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 p-4">
          <h1 className="text-6xl font-black text-gray-300">404</h1>
          <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
          <p className="mt-2 text-gray-600 max-w-md text-center">
            The link you followed may be broken, or the page may have been removed.
          </p>
          <Link to="/" className="mt-6 px-6 py-2 bg-[#022169] text-white rounded-lg hover:bg-blue-800 transition">
            Return Home
          </Link>
        </div>
      );
    }
  }

  // Fallback for JS runtime errors during routing
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-600 p-8">
      <h1 className="text-4xl font-black">Application Error</h1>
      <p className="mt-4 text-lg">Something went fundamentally wrong while loading this page.</p>
      <Link to="/" className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
        Return Home
      </Link>
    </div>
  );
}
