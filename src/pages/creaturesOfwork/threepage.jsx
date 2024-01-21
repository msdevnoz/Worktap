import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";
import ThreeInput from "components/ThreeInput";

const creaturesOfWorkPage3 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-start mx-auto p-[30px] sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1336px] mb-[70px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start ml-4 md:ml-[0] w-[99%] md:w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
            <div className="sm:h-[141px] md:h-[503px] h-[89px] md:ml-[0] ml-[194px] mt-[52px] pr-[15px] relative w-[71%] md:w-full">
              <div className="absolute h-[3px] inset-x-[0] mx-auto top-[38%] w-[84%] md:w-full">
                <Line className="bg-deep_purple-200 h-[3px] m-auto w-full" />
                <Line className="absolute bg-green-A700 h-[3px] inset-y-[0] left-[0] my-auto w-[45%]" />
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
              <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[60px] h-full inset-[0] items-start justify-center m-auto w-[65%]">
                <div className="flex flex-col gap-[13px] items-center justify-start md:mt-0 mt-2 w-[28%] md:w-full">
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
                <div className="flex flex-col items-center justify-start w-[87px] md:w-full">
                  <div className="h-16 relative w-16">
                    <div className="bg-green-A700 h-12 m-auto rounded-[50%] w-12"></div>
                    <Text
                      className="absolute bg-green-A700_71 flex h-full inset-[0] items-center justify-center m-auto sm:px-5 rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-max"
                      size="txtMontserratSemiBold24WhiteA700"
                    >
                      3
                    </Text>
                  </div>
                  <Text
                    className="mt-1 text-base text-black-900 text-center"
                    size="txtMontserratMedium16Black900"
                  >
                    Описание
                  </Text>
                </div>
                <div className="flex flex-col gap-[13px] items-center justify-start md:mt-0 mt-2">
                  <Text
                    className="bg-deep_purple-200 flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-12"
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
                <div className="flex flex-col gap-[13px] items-center justify-start md:mt-0 mt-2">
                  <Text
                    className="bg-deep_purple-200 flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-12"
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
              <div className="absolute bottom-[0] flex flex-col gap-[13px] items-center justify-start right-[17%]">
                <Text
                  className="bg-deep_purple-200 flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-12"
                  size="txtMontserratSemiBold24WhiteA700"
                >
                  6
                </Text>
                <Text
                  className="text-base text-black-900 text-center"
                  size="txtMontserratMedium16Black900"
                >
                  Публикация
                </Text>
              </div>
            </div>
            <Text
              className="mt-[77px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtMontserratSemiBold24Black900"
            >
              Описание
            </Text>
          </div>
          <div className="flex flex-col items-end justify-start mt-[19px] w-[57%] md:w-full">
            <div className="bg-deep_purple-50 flex flex-col items-start justify-start p-1 rounded-[10px] w-full">
              <Img
                className="h-8 ml-3 md:ml-[0] w-[607px]"
                src="images/img_frame123.svg"
                alt="frame123"
              />
            </div>
            <Text
              className="mt-[21px] text-base text-deep_purple-200"
              size="txtMontserratMedium16Deeppurple200"
            >
              Кратко опишите свой ворк
            </Text>
            <Line className="bg-deep_purple-200 h-px mr-[5px] mt-[122px] rotate-[-135deg] w-[9px]" />
            <Line className="bg-deep_purple-200 h-px mr-1 rotate-[-135deg] w-1.5" />
            <Line className="bg-gray-100 h-px mt-[3px] rounded-[1px] w-full" />
          </div>
          <div className="flex flex-col items-start justify-start ml-4 md:ml-[0] mt-[71px] w-[99%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtMontserratSemiBold24Black900"
            >
              Часто задаваеммые вопросы
            </Text>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start mt-[27px] w-[66%] md:w-full">
              <div className="border border-gray-100 border-solid flex flex-col gap-[30px] items-center justify-center p-5 rounded-[20px] w-[533px] sm:w-full">
                <ThreeInput
                  className="flex flex-col gap-4 items-start justify-start w-[86%] md:w-full"
                  placeholdertext="Placeholder"
                />
                <ThreeInput
                  className="flex flex-col gap-[18px] items-start justify-start w-[86%] md:w-full"
                  questiontext="Ответ"
                />
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[420px] sm:min-w-full rounded-[30px] text-center text-xl"
                  color="red_100"
                  size="lg"
                  variant="fill"
                >
                  Удалить
                </Button>
              </div>
              <div className="bg-gray-100 flex flex-col h-[300px] md:h-auto items-center justify-center sm:px-5 px-[26px] py-6 rounded-[20px] w-[307px]">
                <div className="flex flex-col gap-5 items-center justify-start w-[99%] md:w-full">
                  <Img
                    className="h-[70px] w-[70px]"
                    src="images/img_circleplusmajor.svg"
                    alt="circleplusmajor"
                  />
                  <Text
                    className="text-center text-orange-300 text-xl"
                    size="txtMontserratSemiBold20Orange300"
                  >
                    Добавить вопрос-ответ
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-20 w-full">
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
                Дальше
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default creaturesOfWorkPage3;