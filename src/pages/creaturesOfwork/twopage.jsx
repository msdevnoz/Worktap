import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";
import ThreeInput from "components/ThreeInput";

 export default  creaturesOfWorkPage2 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-start mx-auto p-[30px] sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1320px] mb-[70px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <div className="sm:h-[141px] md:h-[503px] h-[89px] md:ml-[0] ml-[194px] mt-[52px] pr-[15px] relative w-[71%] md:w-full">
            <div className="absolute h-[3px] inset-x-[0] mx-auto top-[38%] w-[84%] md:w-full">
              <Line className="bg-deep_purple-200 h-[3px] m-auto w-full" />
              <Line className="absolute bg-green-A700 h-[3px] inset-y-[0] left-[0] my-auto w-[22%]" />
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
            <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[60px] h-full inset-[0] items-end justify-center m-auto w-[65%]">
              <div className="flex flex-col gap-[5px] items-center justify-start w-[28%] md:w-full">
                <div className="h-16 relative w-16">
                  <div className="bg-green-A700 h-12 m-auto rounded-[50%] w-12"></div>
                  <Text
                    className="absolute bg-green-A700_71 flex h-full inset-[0] items-center justify-center m-auto sm:px-5 rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-max"
                    size="txtMontserratSemiBold24WhiteA700"
                  >
                    2
                  </Text>
                </div>
                <Text
                  className="text-base text-black-900 text-center"
                  size="txtMontserratMedium16Black900"
                >
                  Стоимость и опции
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-center justify-start md:mt-0 mt-2">
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
            Пакеты
          </Text>
          <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[29px] w-full">
            <div className="border border-gray-100 border-solid flex flex-1 flex-col gap-[30px] items-center justify-start p-5 rounded-[20px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-auto"
                size="txtMontserratMedium24Black900"
              >
                Эконом
              </Text>
              <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtMontserratMedium18Gray90001"
                  >
                    Описание пакета
                  </Text>
                  <div className="flex flex-col md:gap-10 gap-[79px] justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[18px] text-base text-deep_purple-200"
                      size="txtMontserratMedium16Deeppurple200"
                    >
                      Placeholder
                    </Text>
                    <Line className="bg-gray-100 h-px rounded-[1px] w-full" />
                  </div>
                </div>
                <ThreeInput
                  className="flex flex-col gap-4 items-start justify-start w-full"
                  questiontext="Срок выполнения"
                />
                <ThreeInput
                  className="flex flex-col gap-[17px] items-start justify-start w-full"
                  questiontext="Количество доработок"
                />
                <ThreeInput
                  className="flex flex-col gap-[18px] items-start justify-start w-full"
                  questiontext="Стоимость в тенге"
                />
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[380px] sm:min-w-full rounded-[30px] text-center text-xl"
                  color="deep_purple_50"
                  size="lg"
                  variant="fill"
                >
                  Добавить опцию
                </Button>
              </div>
            </div>
            <div className="border border-gray-100 border-solid flex flex-1 flex-col gap-[30px] items-center justify-start p-5 rounded-[20px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-auto"
                size="txtMontserratMedium24Black900"
              >
                Стандарт
              </Text>
              <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtMontserratMedium18Gray90001"
                  >
                    Описание пакета
                  </Text>
                  <div className="flex flex-col md:gap-10 gap-[79px] justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[18px] text-base text-deep_purple-200"
                      size="txtMontserratMedium16Deeppurple200"
                    >
                      Placeholder
                    </Text>
                    <Line className="bg-gray-100 h-px rounded-[1px] w-full" />
                  </div>
                </div>
                <ThreeInput
                  className="flex flex-col gap-4 items-start justify-start w-full"
                  questiontext="Срок выполнения"
                />
                <ThreeInput
                  className="flex flex-col gap-[17px] items-start justify-start w-full"
                  questiontext="Количество доработок"
                />
                <ThreeInput
                  className="flex flex-col gap-[18px] items-start justify-start w-full"
                  questiontext="Стоимость в тенге"
                />
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[380px] sm:min-w-full rounded-[30px] text-center text-xl"
                  color="deep_purple_50"
                  size="lg"
                  variant="fill"
                >
                  Добавить опцию
                </Button>
              </div>
            </div>
            <div className="border border-gray-100 border-solid flex flex-1 flex-col gap-[30px] items-center justify-start p-5 rounded-[20px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-auto"
                size="txtMontserratMedium24Black900"
              >
                Бизнес
              </Text>
              <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtMontserratMedium18Gray90001"
                  >
                    Описание пакета
                  </Text>
                  <div className="flex flex-col md:gap-10 gap-[79px] justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[18px] text-base text-deep_purple-200"
                      size="txtMontserratMedium16Deeppurple200"
                    >
                      Placeholder
                    </Text>
                    <Line className="bg-gray-100 h-px rounded-[1px] w-full" />
                  </div>
                </div>
                <ThreeInput
                  className="flex flex-col gap-4 items-start justify-start w-full"
                  questiontext="Срок выполнения"
                />
                <ThreeInput
                  className="flex flex-col gap-[17px] items-start justify-start w-full"
                  questiontext="Количество доработок"
                />
                <ThreeInput
                  className="flex flex-col gap-[18px] items-start justify-start w-full"
                  questiontext="Стоимость в тенге"
                />
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[380px] sm:min-w-full rounded-[30px] text-center text-xl"
                  color="deep_purple_50"
                  size="lg"
                  variant="fill"
                >
                  Добавить опцию
                </Button>
              </div>
            </div>
          </div>
          <Text
            className="mt-[131px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
            size="txtMontserratSemiBold24Black900"
          >
            Дополнительные опции
          </Text>
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start mt-[27px] w-[66%] md:w-full">
            <div className="border border-gray-100 border-solid flex flex-col gap-[30px] items-center justify-center p-5 rounded-[20px] w-[533px] sm:w-full">
              <ThreeInput
                className="flex flex-col gap-[18px] items-start justify-start w-[86%] md:w-full"
                questiontext="Название"
                placeholdertext="Placeholder"
              />
              <ThreeInput
                className="flex flex-col gap-4 items-start justify-start w-[86%] md:w-full"
                questiontext="Подсказка для покупателя"
              />
              <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-[47%] sm:w-full">
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtMontserratMedium18Gray90001"
                  >
                    Срок выполнения
                  </Text>
                  <Input
                    name="groupSeventySix_Fourteen"
                    placeholder="Placeholder"
                    className="font-medium leading-[normal] p-0 placeholder:text-deep_purple-200 sm:pr-5 text-base text-left w-full"
                    wrapClassName="pl-[9px] pr-[35px] w-full"
                    color="gray_100"
                    size="sm"
                    variant="underline"
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-[47%] sm:w-full">
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtMontserratMedium18Gray90001"
                  >
                    Цена в тенге
                  </Text>
                  <Input
                    name="groupSeventySix_Fifteen"
                    placeholder="Placeholder"
                    className="font-medium leading-[normal] p-0 placeholder:text-deep_purple-200 sm:pr-5 text-base text-left w-full"
                    wrapClassName="pl-[9px] pr-[35px] w-full"
                    color="gray_100"
                    size="sm"
                    variant="underline"
                  ></Input>
                </div>
              </div>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[420px] sm:min-w-full rounded-[30px] text-center text-xl"
                color="red_100"
                size="lg"
                variant="fill"
              >
                Удалить
              </Button>
            </div>
            <div className="bg-gray-100 border border-deep_purple-50 border-solid flex flex-col gap-5 h-[400px] md:h-auto items-center justify-center p-5 rounded-[20px] w-[307px]">
              <Img
                className="h-[70px] w-[70px]"
                src="images/img_circleplusmajor.svg"
                alt="circleplusmajor"
              />
              <Text
                className="text-lg text-orange-300 w-auto"
                size="txtMontserratSemiBold18Orange300"
              >
                Добавить новую опцию
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-20 w-full">
            <Button
              className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[240px] rounded-[30px] text-center text-xl"
              onClick={() => navigate("/one1")}
              color="gray_100"
              size="lg"
              variant="fill"
            >
              Назад
            </Button>
            <Button
              className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[240px] rounded-[30px] text-center text-xl"
              onClick={() => navigate("/three")}
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