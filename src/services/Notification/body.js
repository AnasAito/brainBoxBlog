import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";

import { useQuery } from "services/Client";
import withStore from "services/Store";

const Body = ({ store }) => {
  const { data } = useQuery({ event: "notification" });
  const type = get(data, "notification.type", "");
  const message = get(data, "notification.message", "");
  const opened = get(data, "notification.opened", "");

  const handleClose = () => {
    store.set("notification", {
      message: "",
      type: "",
      opened: false,
      __typename: "notification",
    });
    return;
  };

  React.useEffect(() => {
    if (opened) {
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  });
  if (!type || !message || !opened) return <div />;

  const textColor =
    type === "success"
      ? "text-green-400"
      : type === "danger"
      ? "text-red-400"
      : type === "warning"
      ? "text-yellow-400"
      : "";

  const iconPath =
    type === "success"
      ? "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      : type === "danger"
      ? "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
      : type === "warning"
      ? "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
      : "";

  return (
    <div className="fixed inset-0 z-30 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
      <div
        // x-transition:enter="transform ease-out duration-300 transition"
        // x-transition:enter-start="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        // x-transition:enter-end="translate-y-0 opacity-100 sm:translate-x-0"
        // x-transition:leave="transition ease-in duration-100"
        // x-transition:leave-start="opacity-100"
        // x-transition:leave-end="opacity-0"
        className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto"
      >
        <div className="rounded-lg shadow-xs overflow-hidden">
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className={`h-5 w-5 ${textColor}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" clipRule="evenodd" d={iconPath} />
                </svg>
              </div>
              <div className="ml-3 w-0 flex-1">
                <p className="text-sm leading-5 font-medium text-gray-900">
                  {message}
                </p>
                {/* <p className="mt-1 text-sm leading-5 text-gray-500">
                        Anyone with a link can now view this file.
                      </p> */}
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  onClick={handleClose}
                  className="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Body.propTypes = {
  store: PropTypes.object.isRequired,
};

export default withStore(Body);
