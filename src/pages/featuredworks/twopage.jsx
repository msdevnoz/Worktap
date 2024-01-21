import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, RatingBar, SelectBox, Text } from "components";
import ColumnFive from "components/ColumnFive";
import ColumnOne1 from "components/ColumnOne1";
import ColumnTwo from "components/ColumnTwo";
import Columnrectanglenineteen from "components/Columnrectanglenineteen";
import Footer from "components/Footer";
import Header from "components/Header";

const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const featuredWorksPage1 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-end mx-auto pt-[30px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-gray-50 border border-gray-50_01 border-solid flex flex-col items-center justify-start p-5 shadow-bs2 w-full">
              <div className="flex flex-col gap-10 justify-start max-w-[1268px] mx-auto md:px-5 w-full">
                <div className="bg-gray-100 flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[337px] mr-[285px] pl-5 rounded-[30px] w-[51%] md:w-full">
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
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                  <Button
                    className="common-pointer cursor-pointer leading-[normal] min-w-[96px] text-center text-sm"
                    onClick={() => navigate("/two")}
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="outline"
                  >
                    Дизайн
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[124px] text-center text-sm"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="outline"
                  >
                    Разработка
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[196px] text-center text-sm"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="outline"
                  >
                    Аудио, видео монтаж{" "}
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[181px] text-center text-sm"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="outline"
                  >
                    Тексты и переводы{" "}
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[186px] text-center text-sm"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="outline"
                  >
                    SEO и оптимизация
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[181px] text-center text-sm"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="outline"
                  >
                    Соцсети и реклама
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[156px] text-center text-sm"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="outline"
                  >
                    Бизнес и жизнь
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[148px] text-center text-sm"
                    shape="round"
                    color="orange_300"
                    size="sm"
                    variant="outline"
                  >
                    Все категории
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start max-w-[1319px] mt-[60px] mx-auto md:px-5 w-full">
              <Text
                className="mb-1 md:mt-0 mt-[7px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[0.48px]"
                size="txtMontserratSemiBold24"
              >
                65 ворков по дизайну
              </Text>
              <div className="flex md:flex-1 sm:flex-col flex-row gap-2 items-start justify-center md:ml-[0] ml-[273px] w-[32%] md:w-full">
                <Button
                  className="!text-blue_gray-600 cursor-pointer leading-[normal] min-w-[195px] rounded-[20px] text-center text-sm"
                  color="gray_100"
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
                  className="!text-blue_gray-600 cursor-pointer leading-[normal] min-w-[195px] rounded-[20px] text-center text-sm"
                  color="gray_100"
                  size="md"
                  variant="outline"
                >
                  Максимальная цена
                </Button>
              </div>
              <SelectBox
                className="md:flex-1 font-semibold leading-[normal] md:ml-[0] ml-[51px] rounded-[21px] text-left text-lg w-[22%] md:w-full"
                placeholderClassName="text-gray-900_01"
                indicator={
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown_gray_900_01_20x20.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="frameNine"
                options={optionsList}
                isSearchable={false}
                placeholder="По возрастанию цены"
                shape="round"
                color="gray_100"
                size="sm"
                variant="outline"
              />
            </div>
            <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1322px] min-h-[auto] mt-10 mx-auto md:px-5 w-full">
              <Columnrectanglenineteen className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnTwo className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnFive className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs shadow-bs hover:w-full w-full" />
              <ColumnFive className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs shadow-bs hover:w-full w-full" />
              <Columnrectanglenineteen className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnOne1 className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs shadow-bs hover:w-full w-full" />
              <ColumnTwo className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnTwo className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <Columnrectanglenineteen className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnTwo className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <Columnrectanglenineteen className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <Columnrectanglenineteen className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <Columnrectanglenineteen className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnTwo className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnOne1 className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs shadow-bs hover:w-full w-full" />
              <ColumnOne1 className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs shadow-bs hover:w-full w-full" />
              <Columnrectanglenineteen className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <Columnrectanglenineteen className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnTwo className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnTwo className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
            </div>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[238px] mt-[60px] rounded-[27px] text-center text-lg"
              color="green_A700"
              size="lg"
              variant="outline"
            >
              Загрузить еще
            </Button>
            <Footer className="bg-gray-100 flex items-center justify-center mt-[60px] md:px-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default featuredWorksPage2;
