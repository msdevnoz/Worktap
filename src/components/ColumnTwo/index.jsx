import React from "react";

import { Img, RatingBar, Text } from "components";

const ColumnTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[174px] relative w-full">
          <Img
            className="absolute h-[174px] inset-[0] justify-center m-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
            src="images/img_rectangle19.png"
            alt="rectangleNineteen"
          />
          <Img
            className="absolute h-8 right-[6%] rounded-[1px] shadow-bs1 top-[11%] w-8"
            src="images/img_star12_32x32.svg"
            alt="starTwelve"
          />
        </div>
        <div className="flex flex-col gap-[19px] items-start justify-start ml-5 md:ml-[0] w-[83%] md:w-full">
          <Text
            className="text-gray-900_01 text-lg"
            size="txtMontserratSemiBold18"
          >
            {props?.sixhundred}
          </Text>
          <Text
            className="text-green-A700 text-lg"
            size="txtMontserratSemiBold18GreenA700"
          >
            {props?.p50000}
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row gap-3 items-end justify-between w-full">
              <Img
                className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                src="images/img_ellipse65_60x60.png"
                alt="ellipseSixtyFive"
              />
              <div className="flex flex-col gap-[9px] items-start justify-start mb-1 mt-[7px]">
                <Text
                  className="text-base text-black-900"
                  size="txtMontserratMedium16Black900"
                >
                  {props?.username}
                </Text>
                <Text
                  className="text-deep_purple-200 text-sm"
                  size="txtMontserratRegular14Deeppurple200"
                >
                  {props?.projectcount}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-3/5 md:w-full">
            <RatingBar
              className="flex justify-between rounded-sm w-[150px]"
              value={4}
              starCount={5}
              color="#afaad0"
              activeColor="#fba457"
              size={30}
            ></RatingBar>
          </div>
        </div>
      </div>
    </>
  );
};

ColumnTwo.defaultProps = {
  sixhundred: "Дизайн сайта",
  p50000: "50 000 тенге",
  username: "Екатерина Иванова",
  projectcount: "Выполнено проектов: 45 ",
};

export default ColumnTwo;
