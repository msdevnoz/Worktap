import React from "react";

import { Text } from "components";

const Column5 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start mt-0.5 w-full">
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
          <Text
            className="md:ml-[0] ml-[1119px] mt-2 text-blue_gray-600 text-right text-sm"
            size="txtMontserratRegular14Bluegray600"
          >
            {props?.timetext}
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
            <div className="flex flex-col gap-[31px] items-start justify-start">
              <Text
                className="text-black-900 text-lg w-full"
                size="txtMontserratRegular18"
              >
                {props?.descriptiontext}
              </Text>
              <Text
                className="text-green-A700 text-lg"
                size="txtMontserratSemiBold18GreenA700"
              >
                {props?.statustext}
              </Text>
            </div>
            <Text
              className="md:mt-0 mt-[97px] text-blue_gray-600 text-lg text-right"
              size="txtMontserratRegular18Bluegray600"
            >
              {props?.offertext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

Column5.defaultProps = {
  designtext: "Нужно сделать Дизайн сайта по тематике авто",
  budgettext: "Бюджет: 50 000 тенге",
  timetext: "4 часа 28 минут назад",
  descriptiontext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus volutpat sollicitudin in ligula. Massa in ultricies vitae varius habitasse. Est lacus eros nec fermentum, id gravida. Dui aliquet dolor convallis mauris. Massa in ultricies vitae varius habitasse. Est lacus eros nec fermentum...",
  statustext: "Завершено",
  offertext: "Предложений: 50",
};

export default Column5;
