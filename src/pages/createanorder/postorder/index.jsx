import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Header from "components/Header";

const postOrderPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-start mx-auto p-[30px] sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1320px] mb-[434px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <Text
            className="mt-[81px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
            size="txtMontserratSemiBold24Black900"
          >
            Опубликуйте ваш заказ
          </Text>
          <div className="flex flex-col gap-[18px] items-start justify-start mt-[57px] w-[49%] md:w-full">
            <Text
              className="text-gray-900_01 text-lg"
              size="txtMontserratMedium18Gray90001"
            >
              Название{" "}
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
          <div className="flex flex-col gap-[19px] items-start justify-start mt-[29px] w-[49%] md:w-full">
            <Text
              className="text-gray-900_01 text-lg"
              size="txtMontserratMedium18Gray90001"
            >
              Описание
            </Text>
            <TextArea
              className="bg-transparent border-0 border-b border-gray-100 flex pb-1 pl-5 pr-1 w-full"
              name="group125"
              placeholder="Кратко опишите свой ворк"
            ></TextArea>
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
                  name="groupSeventySix"
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
                  alt="arrowdown_One"
                />
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
                  name="groupSeventySix_One"
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
                  alt="arrowdown_Two"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[17px] items-start justify-start mt-[30px] w-[49%] md:w-full">
            <Text
              className="text-gray-900_01 text-lg"
              size="txtMontserratMedium18Gray90001"
            >
              Срок выполнения работы в днях
            </Text>
            <Input
              name="language_One"
              placeholder="14 "
              className="!placeholder:text-gray-900_01 !text-gray-900_01 font-medium leading-[normal] p-0 sm:pr-5 text-base text-left w-full"
              wrapClassName="pl-5 pr-[35px] w-full"
              color="gray_100"
              size="sm"
              variant="underline"
            ></Input>
          </div>
          <div className="flex flex-col gap-[17px] items-start justify-start mt-[30px] w-[49%] md:w-full">
            <Text
              className="text-gray-900_01 text-lg"
              size="txtMontserratMedium18Gray90001"
            >
              Бюджет в тенге
            </Text>
            <Input
              name="language_Two"
              placeholder="250 000 "
              className="!placeholder:text-gray-900_01 !text-gray-900_01 font-medium leading-[normal] p-0 sm:pr-5 text-base text-left w-full"
              wrapClassName="pl-5 pr-[35px] w-full"
              color="gray_100"
              size="sm"
              variant="underline"
            ></Input>
          </div>
          <Text
            className="mt-[31px] text-black-900 text-lg"
            size="txtMontserratSemiBold18Black900"
          >
            Документы
          </Text>
          <div className="border border-gray-100 border-solid flex flex-col gap-5 items-start justify-center mt-7 md:px-10 px-11 sm:px-5 py-5 rounded-[20px] w-auto sm:w-full">
            <div className="flex flex-col gap-[6.32px] h-[170px] md:h-auto items-start justify-start w-[333px]">
              <div className="bg-gray-100 border border-dashed border-gray-300 flex flex-col font-notosanssc gap-[13px] items-center justify-end p-[15px] rounded-[3px] w-full">
                <Img
                  className="h-[42px] mt-[21px] w-[42px]"
                  src="images/img_pageupmajor1.svg"
                  alt="pageupmajorOne"
                />
                <Text
                  className="leading-[17.00px] text-[11.05px] text-center text-gray-700 w-[86%] sm:w-full"
                  size="txtNotoSansSCRegular1105"
                >
                  <span className="text-gray-700 font-montserrat font-normal">
                    Перетащите файл сюда или нажмите{" "}
                  </span>
                  <span className="text-orange-300 font-montserrat font-medium">
                    Загрузить
                  </span>
                </Text>
              </div>
              <Text
                className="text-[9.47px] text-gray-500 w-auto"
                size="txtMontserratRegular947"
              >
                Загружайте только файлы doc, pdf, png, jpg, jpeg и не более 500
                КБ
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[332px]">
              <div className="flex flex-row items-center justify-start p-[3px] rounded-[1px] w-full">
                <Img className="h-4 w-4" src="images/img_file.svg" alt="file" />
                <Text
                  className="ml-[5px] text-gray-700 text-sm"
                  size="txtMontserratRegular14Gray700"
                >
                  food.jpg
                </Text>
                <Img
                  className="h-5 ml-[203px] my-2 w-5"
                  src="images/img_pagedownmajor1.svg"
                  alt="pagedownmajorOne"
                />
                <Img
                  className="h-3.5 ml-2 w-3.5"
                  src="images/img_done.svg"
                  alt="done"
                />
              </div>
              <div className="flex flex-row gap-[18px] items-center justify-start pr-3 pt-3 rounded-[1px] w-full">
                <div className="flex flex-col items-center justify-start w-[84%]">
                  <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                    <div className="flex flex-row gap-[5px] items-center justify-start md:ml-[0] ml-[3px] w-[30%] md:w-full">
                      <Img
                        className="h-4 w-4"
                        src="images/img_file.svg"
                        alt="file_One"
                      />
                      <Text
                        className="text-gray-700 text-sm"
                        size="txtMontserratRegular14Gray700"
                      >
                        food.jpg
                      </Text>
                    </div>
                    <Line className="bg-green-A700 h-0.5 w-full" />
                  </div>
                </div>
                <Img
                  className="h-5 w-5"
                  src="images/img_pagedownmajor1.svg"
                  alt="pagedownmajorOne_One"
                />
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-20 w-full">
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[240px] rounded-[30px] text-center text-xl"
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

export default postOrderPage;