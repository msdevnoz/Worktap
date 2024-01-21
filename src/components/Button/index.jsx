import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[18px]" };
const variants = {
  outline: {
    blue_gray_600:
      "border border-blue_gray-600 border-solid text-blue_gray-600",
    red_500: "border border-red-500 border-solid text-red-500",
    orange_300: "border border-orange-300 border-solid text-orange-300",
    deep_purple_200:
      "border border-deep_purple-200 border-solid text-deep_purple-200",
    gray_50_01: "border border-gray-50_01 border-solid text-blue_gray-600",
    green_A700: "border border-green-A700 border-solid text-green-A700",
    gray_100: "border border-gray-100 border-solid text-gray-900_01",
  },
  fill: {
    gray_900_01: "bg-gray-900_01",
    indigo_400: "bg-indigo-400 text-gray-50",
    red_100: "bg-red-100 text-red-500",
    gray_50: "bg-gray-50",
    orange_300: "bg-orange-300 text-gray-50",
    green_A700_01: "bg-green-A700_01 text-white-A700",
    green_A700: "bg-green-A700 text-gray-50",
    gray_100: "bg-gray-100 text-blue_gray-600",
    deep_purple_50: "bg-deep_purple-50 text-blue_gray-600",
  },
};
const sizes = {
  xs: "py-px",
  sm: "p-[9px]",
  md: "p-[13px]",
  lg: "p-[17px]",
  xl: "p-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "blue_gray_600",
    "red_500",
    "orange_300",
    "deep_purple_200",
    "gray_50_01",
    "green_A700",
    "gray_100",
    "gray_900_01",
    "indigo_400",
    "red_100",
    "gray_50",
    "green_A700_01",
    "deep_purple_50",
  ]),
};

export { Button };
