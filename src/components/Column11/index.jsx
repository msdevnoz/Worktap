import React from "react";

import { Img, RatingBar, Text } from "components";

const Column11 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[9px] items-center justify-start mt-0.5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.48px]"
              size="txtMontserratSemiBold24Black900"
            >
              {props?.designtext}
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-green-A700 text-right sm:text-xl tracking-[0.48px]"
              size="txtMontserratSemiBold24GreenA700"
            >
              {props?.budgettext}
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-2 w-[37%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                <Img
                  className="h-[120px] md:h-auto rounded-[50%] w-[120px]"
                  src="images/img_ellipse65.png"
                  alt="ellipseSixtyFive"
                />
                <div className="flex flex-col gap-[11px] items-start justify-start">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtMontserratMedium18"
                  >
                    {props?.username}
                  </Text>
                  <Text
                    className="text-black-900 text-lg"
                    size="txtMontserratMedium18"
                  >
                    {props?.projectcount}
                  </Text>
                  <div className="flex flex-row gap-[23px] items-center justify-start w-[77%] md:w-full">
                    <RatingBar
                      className="flex justify-between rounded-sm w-[150px]"
                      value={4}
                      starCount={5}
                      color="#afaad0"
                      activeColor="#fba457"
                      size={30}
                    ></RatingBar>
                    <Text
                      className="text-black-900 text-sm"
                      size="txtMontserratSemiBold14Black900"
                    >
                      {props?.reviewcount}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[89px] items-center justify-start">
              <Text
                className="text-blue_gray-600 text-right text-sm"
                size="txtMontserratRegular14Bluegray600"
              >
                {props?.timetext}
              </Text>
              <Text
                className="text-blue_gray-600 text-lg text-right"
                size="txtMontserratRegular18Bluegray600"
              >
                {props?.offercount}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Column11.defaultProps = {
  designtext: "Нужно сделать Дизайн сайта по тематике авто",
  budgettext: "Бюджет: 50 000 тенге",
  username: "Екатерина Иванова",
  projectcount: "Размещено проектов на бирже: 25",
  reviewcount: "15 отзывов",
  timetext: "4 часа 28 минут назад",
  offercount: "Предложений: 50",
};

export default Column11;
