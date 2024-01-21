import React from "react";

import { Img, Text } from "components";

const ColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[172px] sm:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
          src="images/img_rectangle20.png"
          alt="rectangleNineteen"
        />
        <div className="flex flex-col gap-[19px] items-start justify-start ml-5 md:ml-[0]">
          <Text
            className="text-gray-900_01 text-lg"
            size="txtMontserratSemiBold18"
          >
            {props?.sitedesigntext}
          </Text>
          <Text
            className="text-green-A700 text-lg"
            size="txtMontserratSemiBold18GreenA700"
          >
            {props?.pricetext}
          </Text>
        </div>
      </div>
    </>
  );
};

ColumnOne.defaultProps = {
  sitedesigntext: "Дизайн сайта",
  pricetext: "50 000 тенге",
};

export default ColumnOne;
