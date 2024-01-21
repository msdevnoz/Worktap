import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";
import ThreeInput from "components/ThreeInput";


const creaturesOfWorkPage5 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-start mx-auto p-[30px] sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1320px] mb-[183px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <div className="sm:h-[141px] md:h-[503px] h-[89px] md:ml-[0] ml-[194px] mt-[52px] pr-[15px] relative w-[71%] md:w-full">
            <div className="absolute h-[3px] inset-x-[0] mx-auto top-[38%] w-[84%] md:w-full">
              <Line className="bg-deep_purple-200 h-[3px] m-auto w-full" />
              <Line className="absolute bg-green-A700 h-[3px] inset-y-[0] left-[0] my-auto w-[85%]" />
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
              <div className="flex flex-col gap-3 items-center justify-start md:mt-0 mt-2">
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
              <div className="flex flex-col gap-[13px] items-center justify-start md:mt-0 mt-2">
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
              <div className="flex flex-col gap-[5px] items-center justify-start w-[12%] md:w-full">
                <div className="h-16 relative w-16">
                  <div className="bg-green-A700 h-12 m-auto rounded-[50%] w-12"></div>
                  <Text
                    className="absolute bg-green-A700_71 flex h-full inset-[0] items-center justify-center m-auto sm:px-5 rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-max"
                    size="txtMontserratSemiBold24WhiteA700"
                  >
                    5
                  </Text>
                </div>
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
          <div className="flex flex-col gap-[27px] items-start justify-start mt-[79px]">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtMontserratSemiBold24Black900"
            >
              Создайте свою галерею
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtMontserratMedium18"
            >
              Добавьте запоминающийся контент в свою галерею, чтобы выделиться
              среди конкурентов.
            </Text>
          </div>
          <div className="flex flex-col gap-[27px] items-start justify-start mt-[61px]">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtMontserratSemiBold24Black900"
            >
              Фотографии ворка
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtMontserratMedium18"
            >
              Загрузите фотографии, которые описывают или имеют отношение к
              вашему ворку. Только файлы с расширением png, jpg, jpeg.
            </Text>
          </div>
          <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start mt-[30px] w-[49%] md:w-full">
            <div className="bg-deep_purple-50 flex flex-col h-[195px] items-center justify-start p-[17px] rounded-[20px] w-[195px]">
              <div className="flex flex-col gap-5 items-center justify-start mb-[21px] mt-6 w-full">
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_circleplusmajor.svg"
                  alt="circleplusmajor"
                />
                <Text
                  className="text-center text-orange-300 text-xl"
                  size="txtMontserratSemiBold20Orange300"
                >
                  Добавить фото{" "}
                </Text>
              </div>
            </div>
            <Img
              className="h-[195px] md:h-auto object-cover rounded-[20px] w-[195px]"
              src="images/img_rectangle33.png"
              alt="rectangleThirtyThree"
            />
            <Img
              className="h-[195px] md:h-auto object-cover rounded-[20px] w-[195px]"
              src="images/img_rectangle34.png"
              alt="rectangleThirtyFour"
            />
          </div>
          <ThreeInput
            className="flex flex-col gap-[17px] items-start justify-start mt-[30px] w-[32%] md:w-full"
            questiontext="Ссылка на видео Youtube"
            placeholdertext="Placeholder"
          />
          <div className="flex flex-col gap-[26px] items-start justify-start mt-[62px]">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtMontserratSemiBold24Black900"
            >
              Документы ворка
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtMontserratMedium18"
            >
              Мы рекомендуем добавлять файл документа только в том случае, если
              он дополнительно разъясняет услугу, которую вы будете
              предоставлять.
            </Text>
          </div>
          <div className="border border-gray-100 border-solid flex flex-col gap-5 items-start justify-center mt-[30px] md:px-10 px-11 sm:px-5 py-5 rounded-[20px] w-auto sm:w-full">
            <div className="flex flex-col gap-[6.32px] h-[170px] md:h-auto items-start justify-start w-[332px]">
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
                Загружайте только файлы doc / pdf и не более 500 КБ
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[332px]">
              <div className="flex flex-row items-center justify-start p-[3px] rounded-[1px] w-full">
                <Img className="h-4 w-4" src="images/img_file.svg" alt="file" />
                <Text
                  className="ml-[5px] text-gray-700 text-sm"
                  size="txtMontserratRegular14Gray700"
                >
                  food.doc
                </Text>
                <Img
                  className="h-5 ml-[200px] my-2 w-5"
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
                        food.pdf
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
    </>
  );
};

export default creaturesOfWorkPage5;