import React from "react";
export default function Header({ title }) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        src="https://res.cloudinary.com/geerd/image/upload/c_scale,dpr_2.0,w_300/language_lab_logo"
        width="100%"
        className="mx-auto w-1/4"
        alt="Logo"
      />
      <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        {title}
      </h2>
    </div>
  );
}
