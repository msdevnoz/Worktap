import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, RatingBar, Text } from "components";
import Column1 from "components/Column1";
import Column11 from "components/Column11";
import Footer from "components/Footer";

const exchangePage2 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <header className="bg-gray-50 border border-gray-50_01 border-solid flex flex-col items-center justify-center md:px-5 shadow-bs2 w-full">
          <div className="flex flex-col items-center justify-center mb-[30px] mt-[21px] mx-auto w-[69%]">
            <div className="flex md:flex-col flex-row md:gap-[51px] items-center justify-between w-full">
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-3/4 md:w-full">
                <div className="bg-gray-100 flex flex-row items-center justify-between pl-5 rounded-[30px] w-[43%] md:w-full">
                  <Text
                    className="text-base text-blue_gray-600"
                    size="txtMontserratMedium16"
                  >
                    Какую работу ищете?
                  </Text>
                  <Button
                    className="border-[3px] border-gray-100 border-solid cursor-pointer font-bold leading-[normal] min-w-[154px] rounded-[30px] text-base text-center"
                    color="orange_300"
                    size="xl"
                    variant="fill"
                  >
                    Найти
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-[43%] md:w-full">
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[195px] rounded-[20px] text-center text-sm"
                    color="gray_50_01"
                    size="md"
                    variant="outline"
                  >
                    Минимальная цена
                  </Button>
                  <Text
                    className="sm:mt-0 mt-3.5 text-black-900 text-sm"
                    size="txtMontserratRegular14Black900"
                  >
                    —
                  </Text>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[195px] rounded-[20px] text-center text-sm"
                    color="gray_50_01"
                    size="md"
                    variant="outline"
                  >
                    Максимальная цена
                  </Button>
                </div>
              </div>
              <div className="border border-gray-50_01 border-solid flex flex-row gap-2.5 items-start justify-start px-5 py-2.5 rounded-[21px] w-auto">
                <Text
                  className="text-gray-900_01 text-lg w-auto"
                  size="txtMontserratSemiBold18"
                >
                  По возрастанию цены
                </Text>
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowdown_gray_900_01_20x20.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-center justify-start mt-10 w-[96%] md:w-full">
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[116px]"
                onClick={() => navigate("/")}
                leftIcon={
                  <Img
                    className="h-[15px] mr-1 my-px"
                    src="images/img_arrowright_green_a700.svg"
                    alt="arrow_right"
                  />
                }
                shape="round"
                color="gray_50_01"
                size="sm"
                variant="outline"
              >
                <div className="!text-green-A700 font-semibold leading-[normal] text-left text-sm">
                  Дизайн
                </div>
              </Button>
              <div className="border border-gray-50_01 border-solid flex md:flex-col flex-row gap-5 items-start justify-start w-auto md:w-full">
                <Button
                  className="cursor-pointer leading-[normal] min-w-[149px] text-center text-sm"
                  shape="round"
                  color="gray_100"
                  size="sm"
                  variant="outline"
                >
                  Дизайн сайтов
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[166px] text-center text-sm"
                  shape="round"
                  color="gray_100"
                  size="sm"
                  variant="outline"
                >
                  Дизайн логотипа
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[184px] text-center text-sm"
                  shape="round"
                  color="gray_100"
                  size="sm"
                  variant="outline"
                >
                  Арт и иллюстрации
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[187px] text-center text-sm"
                  shape="round"
                  color="gray_100"
                  size="sm"
                  variant="outline"
                >
                  Флаера и брошюры
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[158px] text-center text-sm"
                  shape="round"
                  color="gray_100"
                  size="sm"
                  variant="outline"
                >
                  Дизайн визиток
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[176px] text-center text-sm"
                  shape="round"
                  color="gray_100"
                  size="sm"
                  variant="outline"
                >
                  Баннеры и стенды
                </Button>
              </div>
            </div>
            <div className="border border-gray-50_01 border-solid flex sm:flex-col flex-row gap-5 items-start justify-start mt-5 w-auto sm:w-full">
              <Button
                className="cursor-pointer leading-[normal] min-w-[196px] text-center text-sm"
                shape="round"
                color="gray_100"
                size="sm"
                variant="outline"
              >
                Дизайн презентации
              </Button>
              <Button
                className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[175px] text-center text-sm"
                onClick={() => navigate("/page6")}
                shape="round"
                color="orange_300"
                size="sm"
                variant="outline"
              >
                Все подкатегории
              </Button>
            </div>
          </div>
        </header>
        <List
          className="flex flex-col gap-10 items-center max-w-[1320px] mt-10 mx-auto md:px-5 w-full"
          orientation="vertical"
        >
          <Column1 className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-end p-[18px] rounded-[20px] w-full" />
          <Column11 className="bg-gray-50 flex flex-1 flex-col items-center justify-end p-[18px] rounded-[20px] w-full" />
          <Column1 className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-end p-[18px] rounded-[20px] w-full" />
          <Column1 className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-end p-[18px] rounded-[20px] w-full" />
          <Column1 className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-end p-[18px] rounded-[20px] w-full" />
          <Column1 className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-end p-[18px] rounded-[20px] w-full" />
          <Column1 className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-end p-[18px] rounded-[20px] w-full" />
          <Column1 className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-end p-[18px] rounded-[20px] w-full" />
          <Column1 className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-end p-[18px] rounded-[20px] w-full" />
          <Column1 className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-end p-[18px] rounded-[20px] w-full" />
        </List>
        <Button
          className="cursor-pointer font-semibold leading-[normal] min-w-[238px] mt-10 rounded-[27px] text-center text-lg"
          color="green_A700"
          size="lg"
          variant="outline"
        >
          Загрузить еще
        </Button>
        <Footer className="bg-gray-100 flex items-center justify-center mt-[60px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default exchangePage2;
