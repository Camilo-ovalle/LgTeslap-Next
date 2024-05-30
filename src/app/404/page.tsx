import React from 'react';

function page() {
  return (
    <div>
      <div className="flex flex-col bg-gray-50 items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-gray-600">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <div className="mt-4 text-center">
          <a
            href="/"
            className="text-primary-50 bg-secondary-600 hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-secondary-400 font-medium rounded-lg text-sm px-8 py-4 text-center dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-400"
          >
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
