// src/components/Spinner.jsx
import React from "react";

export default function Spinner({ size = 16, border = 4, color = "primary" }) {
  const spinnerSize = `${size}rem`;
  const borderSize = `${border}px`;

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div
        className={`rounded-full animate-spin border-t-primary`}
        style={{
          width: spinnerSize,
          height: spinnerSize,
          borderWidth: borderSize,
          borderColor: `${color}  ${color} `,
        }}
      ></div>
    </div>
  );
}
