import React from "react";

const Button = ({ styles }) => {
  return (
    <div>
      <button
        type="button"
        className={`px-6 py-4 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
        Get Started
      </button>
    </div>
  );
};

export default Button;
