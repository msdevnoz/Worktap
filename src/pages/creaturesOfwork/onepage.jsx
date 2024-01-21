import React from "react";


import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const CreaturesOfWorkPage1 = ()=>{
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-start mx-auto p-[30px] sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1320px] mb-[70px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
            <div className="md:h-[140px] sm:h-[495px] h-[89px] md:ml-[0] ml-[194px] mt-[52px] pr-[15px] relative w-[71%] md:w-full">
              <Line className="absolute bg-deep_purple-200 h-[3px] inset-x-[0] mx-auto top-[38%] w-[84%]" />
              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[89px]">
                <div className="bg-green-A700_71 flex flex-col h-16 items-center justify-start p-2 rounded-[50%] w-16">
                  <Text
                    className="bg-green-A700 flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-12"
                    size="txtMontserratSemiBold24WhiteA700"
                  >
                    1
                  </Text>
                </div>
                <Text
                  className="mt-1 text-base text-black-900 text-center"
                  size="txtMontserratSemiBold16"
                >
                  Основные
                </Text>
              </div>
              <div className="absolute bottom-[0] flex sm:flex-col flex-row sm:gap-10 gap-[60px] inset-x-[0] items-center justify-center mx-auto w-[65%]">
                <div className="flex flex-col gap-[13px] items-center justify-start">
                  <Text
                    className="bg-deep_purple-200 flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-12"
                    size="txtMontserratSemiBold24WhiteA700"
                  >
                    2
                  </Text>
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtMontserratMedium16Black900"
                  >
                    Стоимость и опции
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-center justify-start">
                  <Text
                    className="bg-deep_purple-200 flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-12"
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
                <div className="flex flex-col gap-[13px] items-center justify-start">
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
            <div className="flex flex-col gap-[18px] items-start justify-start mt-[77px] w-[49%] md:w-full">
              <Text
                className="text-gray-900_01 text-lg"
                size="txtMontserratMedium18Gray90001"
              >
                Название
              </Text>
              <div className="flex flex-col gap-2 justify-start w-full">
                <Text
                  className="ml-5 md:ml-[0] text-base text-deep_purple-200"
                  size="txtMontserratMedium16Deeppurple200"
                >
                  Placeholder
                </Text>
                <Line className="bg-gray-100 h-px rounded-[1px] w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start mt-[30px] w-[49%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-[48%] md:w-full">
                <Text
                  className="text-gray-900_01 text-lg"
                  size="txtMontserratMedium18Gray90001"
                >
                  Категория
                </Text>
                <div className="md:h-[29px] h-[30px] relative w-full">
                  <Input
                    name="groupSeventySix_Five"
                    placeholder="Placeholder"
                    className="font-medium justify-center leading-[normal] p-0 placeholder:text-deep_purple-200 sm:pr-5 text-base text-left w-full"
                    wrapClassName="absolute inset-[0] m-auto pl-5 pr-[35px] w-full"
                    color="gray_100"
                    size="sm"
                    variant="underline"
                  ></Input>
                  <Img
                    className="absolute h-5 right-[1%] top-[0] w-5"
                    src="images/img_arrowdown_deep_purple_200.svg"
                    alt="arrowdown_One" />
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-[48%] md:w-full">
                <Text
                  className="text-gray-900_01 text-lg"
                  size="txtMontserratMedium18Gray90001"
                >
                  Подкатегория
                </Text>
                <div className="md:h-[29px] h-[30px] relative w-full">
                  <Input
                    name="groupSeventySix_Six"
                    placeholder="Placeholder"
                    className="font-medium justify-center leading-[normal] p-0 placeholder:text-deep_purple-200 sm:pr-5 text-base text-left w-full"
                    wrapClassName="absolute inset-[0] m-auto pl-5 pr-[35px] w-full"
                    color="gray_100"
                    size="sm"
                    variant="underline"
                  ></Input>
                  <Img
                    className="absolute h-5 right-[1%] top-[0] w-5"
                    src="images/img_arrowdown_deep_purple_200.svg"
                    alt="arrowdown_Two" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3.5 items-start justify-start mt-[29px] w-[49%] md:w-full">
            <Text
              className="text-gray-900_01 text-lg"
              size="txtMontserratMedium18Gray90001"
            >
              Теги
            </Text>
            <Input
              name="groupSeventySix_Seven"
              placeholder="Дизайн сайта"
              className="!placeholder:text-gray-900_01 !text-gray-900_01 font-medium leading-[normal] p-0 text-base text-left w-full"
              wrapClassName="flex w-full"
              prefix={<Img
                className="mt-auto mb-[26px] h-5 mr-[-67px]"
                src="images/img_mobilecancelmajor_gray_900_01.svg"
                alt="MobileCancelMajor 1" />}
              suffix={<Img
                className="mt-auto mb-[26px] h-5 ml-[35px]"
                src="images/img_mobilecancelmajor_gray_900_01.svg"
                alt="MobileCancelMajor 1" />}
              color="gray_100"
              size="xs"
              variant="underline"
            ></Input>
          </div>
          <Button
            className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[240px] md:ml-[0] ml-[1080px] mt-[284px] rounded-[30px] text-center text-xl"
            color="green_A700"
            size="lg"
            variant="fill"
          >
            Дальше
          </Button>
        </div>
      </div>
    </>
  );
}

export default CreaturesOfWorkPage1;
