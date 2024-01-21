import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, RatingBar, SelectBox, Text } from "components";
import Column1 from "components/Column1";
import Column11 from "components/Column11";
import Footer from "components/Footer";
import Header from "components/Header";


const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const exchangePage1 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray-50_01 flex flex-col items-start justify-start p-[30px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-[84px] md:ml-[0] ml-[79px] md:px-5 w-[82%] md:w-full">
              <div className="bg-orange-50 h-[191px] mb-[284px] md:mt-0 mt-[281px] rounded-[95px] w-[191px]"></div>
              <div className="flex flex-col justify-start w-[88%] md:w-full">
                <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
                <div className="bg-orange-50 h-[75px] md:ml-[0] ml-[650px] mr-[595px] rounded-[37px] w-[75px]"></div>
                <div className="md:h-[108px] h-[168px] md:ml-[0] ml-[136px] mt-[5px] relative w-[86%] md:w-full">
                  <Text
                    className="absolute bottom-[0] left-[0] text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900_01 w-[93%] sm:w-full"
                    size="txtMontserratBold36"
                  >
                    <span className="text-gray-900_01 font-montserrat font-bold">
                      Ищите и находите подходящую работу среди{" "}
                    </span>
                    <span className="text-green-A700 font-montserrat font-bold">
                      10,000+
                    </span>
                    <span className="text-gray-900_01 font-montserrat font-bold">
                      {" "}
                      проектов и покажите на что Вы способны!
                    </span>
                  </Text>
                  <div className="absolute bg-teal-50 h-[103px] right-[0] rounded-[51px] top-[0] w-[103px]"></div>
                </div>
                <div className="bg-gray-100 flex flex-row sm:gap-10 items-center justify-between mt-[60px] mx-auto pl-5 rounded-[30px] w-[49%] md:w-full">
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
                <div className="flex md:flex-col flex-row gap-5 items-start justify-start md:ml-[0] ml-[332px] mt-10 w-auto md:w-full">
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
                    className="cursor-pointer leading-[normal] min-w-[124px] text-center text-sm"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="outline"
                  >
                    Разработка
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[96px] text-center text-sm"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="outline"
                  >
                    Дизайн
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
                </div>
                <div className="flex md:flex-col flex-row gap-5 items-start justify-start md:ml-[0] ml-[296px] mt-5 w-auto md:w-full">
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
                    className="cursor-pointer leading-[normal] min-w-[156px] text-center text-sm"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="outline"
                  >
                    Бизнес и жизнь
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
                    className="cursor-pointer font-medium leading-[normal] min-w-[148px] text-center text-sm"
                    shape="round"
                    color="orange_300"
                    size="sm"
                    variant="outline"
                  >
                    Все категории
                  </Button>
                </div>
                <Text
                  className="md:ml-[0] ml-[476px] mt-[41px] text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl"
                  size="txtMontserratMedium24"
                >
                  <span className="text-gray-900_01 font-montserrat font-medium">
                    Ниже все заказы по{" "}
                  </span>
                  <span className="text-green-A700 font-montserrat font-semibold">
                    дизайну
                  </span>
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[246px] mt-[17px] w-[78%] md:w-full">
                  <div className="bg-teal-50 h-[57px] md:mt-0 mt-7 rounded-[28px] w-[57px]"></div>
                  <Img
                    className="common-pointer h-10 md:ml-[0] ml-[337px] w-10"
                    src="images/img_chevrondownminor.svg"
                    alt="chevrondownmino"
                    onClick={() => navigate("/page7")}
                  />
                  <div className="bg-orange-50 h-[57px] md:ml-[0] ml-[534px] md:mt-0 mt-7 rounded-[28px] w-[57px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start max-w-[1319px] mt-[54px] mx-auto md:px-5 w-full">
            <Text
              className="mb-1 md:mt-0 mt-[7px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[0.48px]"
              size="txtMontserratSemiBold24"
            >
              65 проектов по дизайну
            </Text>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-2 items-start justify-center md:ml-[0] ml-[243px] w-[32%] md:w-full">
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
              className="md:flex-1 font-semibold leading-[normal] md:ml-[0] ml-[30px] rounded-[21px] text-left text-lg w-[24%] md:w-full"
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
          <List
            className="flex flex-col gap-10 items-center max-w-[1320px] mt-[33px] mx-auto md:px-5 w-full"
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
      </div>
    </>
  );
};

export default exchangePage1;