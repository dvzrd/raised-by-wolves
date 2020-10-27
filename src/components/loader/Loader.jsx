import React from "react";
import classNames from "classnames";

export const Loader = ({ className }) => (
  <div className={classNames("flex content-center items-center justify-center min-h-screen", className)}>
    <h1 className="text-6xl">L O A D I N G</h1>
  </div>
);
