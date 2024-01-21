import React from "react";

const sizeClasses = {
  txtMontserratMedium20: "font-medium font-montserrat",
  txtMontserratSemiBold18WhiteA700: "font-montserrat font-semibold",
  txtMontserratRegular16Black900: "font-montserrat font-normal",
  txtMontserratSemiBold24WhiteA700: "font-montserrat font-semibold",
  txtMontserratMedium24: "font-medium font-montserrat",
  txtMontserratRegular14Black900: "font-montserrat font-normal",
  txtMontserratRegular18Bluegray600: "font-montserrat font-normal",
  txtMontserratSemiBold36: "font-montserrat font-semibold",
  txtMontserratSemiBold14Black900: "font-montserrat font-semibold",
  txtMontserratSemiBold30: "font-montserrat font-semibold",
  txtMontserratSemiBold24Gray50: "font-montserrat font-semibold",
  txtMontserratSemiBold16Gray90001: "font-montserrat font-semibold",
  txtMontserratSemiBold20Orange300: "font-montserrat font-semibold",
  txtMontserratBold24: "font-bold font-montserrat",
  txtMontserratMedium16Deeppurple200: "font-medium font-montserrat",
  txtMontserratRegular14Gray700: "font-montserrat font-normal",
  txtMontserratSemiBold36Gray90001: "font-montserrat font-semibold",
  txtMontserratSemiBold16GreenA700: "font-montserrat font-semibold",
  txtMontserratMedium16GreenA700: "font-medium font-montserrat",
  txtMontserratBold30: "font-bold font-montserrat",
  txtMontserratMedium18Bluegray600: "font-medium font-montserrat",
  txtMontserratRegular18Gray90001: "font-montserrat font-normal",
  txtMontserratSemiBold18Black900: "font-montserrat font-semibold",
  txtMontserratMedium16Black900: "font-medium font-montserrat",
  txtMontserratBold36: "font-bold font-montserrat",
  txtMontserratMedium18Gray90001: "font-medium font-montserrat",
  txtMontserratRegular14Bluegray600: "font-montserrat font-normal",
  txtNotoSansSCRegular1105: "font-normal font-notosanssc",
  txtMontserratSemiBold18: "font-montserrat font-semibold",
  txtMontserratSemiBold16: "font-montserrat font-semibold",
  txtMontserratSemiBold24Black900: "font-montserrat font-semibold",
  txtMontserratRegular14Deeppurple200: "font-montserrat font-normal",
  txtMontserratRegular20: "font-montserrat font-normal",
  txtMontserratSemiBold14: "font-montserrat font-semibold",
  txtMontserratRegular16Bluegray90001: "font-montserrat font-normal",
  txtMontserratRegular18: "font-montserrat font-normal",
  txtMontserratRegular16: "font-montserrat font-normal",
  txtMontserratRegular14: "font-montserrat font-normal",
  txtMontserratSemiBold20GreenA700: "font-montserrat font-semibold",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtMontserratMedium16: "font-medium font-montserrat",
  txtMontserratMedium14GreenA700: "font-medium font-montserrat",
  txtMontserratMedium18: "font-medium font-montserrat",
  txtMontserratMedium16Gray90001: "font-medium font-montserrat",
  txtMontserratSemiBold24: "font-montserrat font-semibold",
  txtMontserratSemiBold20: "font-montserrat font-semibold",
  txtMontserratRegular18Orange300: "font-montserrat font-normal",
  txtRobotoRegular16: "font-normal font-roboto",
  txtMontserratMedium24Black900: "font-medium font-montserrat",
  txtMontserratRegular947: "font-montserrat font-normal",
  txtMontserratSemiBold20Black900: "font-montserrat font-semibold",
  txtMontserratSemiBold24Orange300: "font-montserrat font-semibold",
  txtMontserratSemiBold24GreenA700: "font-montserrat font-semibold",
  txtMontserratSemiBold18GreenA700: "font-montserrat font-semibold",
  txtMontserratSemiBold18Orange300: "font-montserrat font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
