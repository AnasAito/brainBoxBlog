import React from "react";

export default function MyInput({
  inputValue,
  inputState,
  handleChange,
  id,
  type,
  name,
  ...rest
}) {
  const inputStateColor =
    inputState === "error"
      ? "border-red-300 text-red-900 focus:border-red-300 focus:shadow-outline-red"
      : inputState === "success"
      ? "border-green-300 text-green-900 focus:border-green-300 focus:shadow-outline-green"
      : "";
  return (
    <div>
      <input
        id={id}
        type={type}
        name={name}
        className={`form-input block w-full pr-10 ${inputStateColor} sm:text-sm sm:leading-5`}
        onChange={handleChange}
        value={inputValue}
        {...rest}
      />
      {inputState === "error" && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      {inputState === "success" && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
