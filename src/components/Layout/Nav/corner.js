import React from "react";

export default function Corner({ data, handler }) {
  const node = React.useRef();

  React.useEffect(() => {
    // add when mounted
    const handleClick = (e) => {
      if (!node.current.contains(e.target)) {
        handler({ type: "hide", payload: { location: "dropdown" } });
        return;
      }
    };
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  return (
    <>
      <div className="hidden sm:ml-6 sm:flex sm:items-center">
        <button
          className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
          aria-label="Notifications"
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        {/* <!-- Profile dropdown --> */}
        <div className="ml-3 relative" ref={node}>
          <div>
            <button
              className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
              id="user-menu"
              aria-label="User menu"
              aria-haspopup="true"
              onClick={() =>
                handler({ type: "show", payload: { location: "dropdown" } })
              }
            >
              <img
                className="h-8 w-8 rounded-full"
                src="https://res.cloudinary.com/geerd/image/upload/v1586695206/defaul-avatar_0_g88ld2.jpg"
                alt=""
              />
            </button>
          </div>
          {/* <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-200"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
          {data.dropdown && (
            <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg">
              <div className="py-1 rounded-md bg-white shadow-xs">
                <button
                  href="#"
                  className="block px-4 py-2 text-sm w-full leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Your Profile
                </button>
                <button
                  href="#"
                  className="block px-4 py-2 text-sm w-full leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Settings
                </button>
                <button
                  href="#"
                  className="block px-4 py-2 text-sm w-full leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {data.mobileMenuButton && (
        <div className="-mr-2 flex items-center">
          {/* <!-- Mobile menu button --> */}
          <button
            onClick={() =>
              handler({ type: "mobileDropdown" })
            }
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          >
            {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
            <svg
              className="block h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
            <svg
              className="hidden h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
