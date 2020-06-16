import React from "react";
import Nav from "./Nav";
import useLayoutReducer from "./useLayoutReducer"

export default function Layout({ header }) {

  const { state, dispatch } = useLayoutReducer();


  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200">
        <Nav data={state} handler={dispatch} />
      </nav>

      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              {header}
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            <div className="px-4 py-8 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
            </div>
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </div>
    </div>
  );
}
