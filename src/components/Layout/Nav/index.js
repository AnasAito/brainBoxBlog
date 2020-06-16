import React from "react";
import Corner from "./corner";
import Links from "./links";
import Mobile from "./mobile";
export default function LayoutDesktop({ data, handler }) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Links />
          <Corner data={data} handler={handler} />
        </div>
      </div>
      {data.mobileNav && <Mobile />}
    </>
  );
}
