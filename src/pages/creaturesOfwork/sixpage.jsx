import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const creaturesOfWorkPage6 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-start mx-auto p-[30px] sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1320px] mb-[70px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <div className="md:h-[141px] sm:h-[495px] h-[89px] mt-[52px] pr-[15px] relative w-[71%] md:w-full">
            <div className="absolute h-[3px] inset-x-[0] mx-auto top-[38%] w-[86%] md:w-full">
              <Line className="bg-deep_purple-200 h-[3px] m-auto w-[98%]" />
              <Line className="absolute bg-green-A700 h-[3px] inset-[0] justify-center m-auto w-full" />
            </div>
            <div className="absolute bottom-[0] flex flex-col gap-3 items-center justify-start left-[0] w-[10%]">
              <Button
                className="common-pointer !text-white-A700 cursor-pointer font-semibold h-12 leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-12"
                onClick={() => navigate("/one1")}
                shape="circle"
                color="green_A700"
                size="sm"
                variant="fill"
              >
                1
              </Button>
              <Text
                className="text-base text-black-900 text-center"
                size="txtMontserratSemiBold16"
              >
                Основные
              </Text>
            </div>
            <div className="absolute bottom-[0] flex sm:flex-col flex-row sm:gap-10 gap-[60px] inset-x-[0] items-center justify-center mx-auto w-[65%]">
              <div className="flex flex-col gap-[13px] items-center justify-start w-[28%] sm:w-full">
                <Button
                  className="common-pointer !text-white-A700 cursor-pointer font-semibold h-12 leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-12"
                  onClick={() => navigate("/two2")}
                  shape="circle"
                  color="green_A700"
                  size="sm"
                  variant="fill"
                >
                  2
                </Button>
                <Text
                  className="text-base text-black-900 text-center"
                  size="txtMontserratMedium16Black900"
                >
                  Стоимость и опции
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-center justify-start">
                <Text
                  className="bg-green-A700 flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-12"
                  size="txtMontserratSemiBold24WhiteA700"
                >
                  3
                </Text>
                <Text
                  className="text-base text-black-900 text-center"
                  size="txtMontserratMedium16Black900"
                >
                  Описание
                </Text>
              </div>
              <div className="flex flex-col gap-[13px] items-center justify-start">
                <Text
                  className="bg-green-A700 flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-12"
                  size="txtMontserratSemiBold24WhiteA700"
                >
                  4
                </Text>
                <Text
                  className="text-base text-black-900 text-center"
                  size="txtMontserratMedium16Black900"
                >
                  Требования
                </Text>
              </div>
              <div className="flex flex-col gap-[13px] items-center justify-start">
                <Text
                  className="bg-green-A700 flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-12"
                  size="txtMontserratSemiBold24WhiteA700"
                >
                  5
                </Text>
                <Text
                  className="text-base text-black-900 text-center"
                  size="txtMontserratMedium16Black900"
                >
                  Галерея
                </Text>
              </div>
            </div>
            <div className="absolute flex flex-col gap-[5px] h-full inset-y-[0] items-center justify-start my-auto right-[17%] w-[12%]">
              <div className="h-16 relative w-16">
                <div className="bg-green-A700 h-12 m-auto rounded-[50%] w-12"></div>
                <Text
                  className="absolute bg-green-A700_71 flex h-full inset-[0] items-center justify-center m-auto sm:px-5 rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-max"
                  size="txtMontserratSemiBold24WhiteA700"
                >
                  6
                </Text>
              </div>
              <Text
                className="text-base text-black-900 text-center"
                size="txtMontserratMedium16Black900"
              >
                Публикация
              </Text>
            </div>
          </div>
          <Text
            className="mt-[79px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
            size="txtMontserratSemiBold24Black900"
          >
            Поздравляем!
          </Text>
          <Text
            className="mt-7 text-base text-black-900 text-center"
            size="txtMontserratMedium16Black900"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh et
            volutpat sagittis, turpis sed cum massa.
          </Text>
          <Img
            className="h-[317px] mt-[58px]"
            src="images/img_money_1_1.svg"
            alt="undrawcertifica"
          />
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[134px] w-full">
            <Button
              className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[240px] rounded-[30px] text-center text-xl"
              onClick={() => navigate("/two2")}
              color="gray_100"
              size="lg"
              variant="fill"
            >
              Назад
            </Button>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[240px] rounded-[30px] text-center text-xl"
              color="green_A700"
              size="lg"
              variant="fill"
            >
              Опубликовать
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default creaturesOfWorkPage6;
