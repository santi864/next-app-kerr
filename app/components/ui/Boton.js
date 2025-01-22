import React from "react";

export const Boton = ({ children, className = "", ...args }) => {
  return (
    <button
      className={`bg-blue-600 text-white px-4 py-2 rounded ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};
