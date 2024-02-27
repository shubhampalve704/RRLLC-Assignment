import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
};
const variants = {
  fill: {
    yellow_900: "bg-yellow-900 text-white-A700",
    white_A700: "bg-white-A700 text-blue-500",
    gray_100: "bg-gray-100 text-light_blue-900",
    blue_500: "bg-blue-500 text-white-A700",
  },
};
const sizes = {
  "2xl": "h-[52px] px-[18px] text-sm",
  lg: "h-9 pl-4 pr-[25px] text-[13px]",
  md: "h-[34px] px-[7px] text-base",
  sm: "h-7 px-[9px] text-[13px]",
  xl: "h-12 px-[35px] text-base",
  xs: "h-7 px-1.5 text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "xl",
  color = "blue_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["2xl", "lg", "md", "sm", "xl", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["yellow_900", "white_A700", "gray_100", "blue_500"]),
};

export { Button };
