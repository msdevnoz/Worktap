import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, RatingBar, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";
const TwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray-50_01 flex flex-col items-center justify-start p-[30px] sm:px-5 w-full">
            <div className="flex flex-col gap-[38px] items-center justify-start max-w-[1323px] mb-[92px] mx-auto md:px-5 w-full">
              <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[72px] w-[46%] md:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_01 tracking-[1.80px] w-full"
                    size="txtMontserratBold36"
                  >
                    <span className="text-gray-900_01 font-montserrat text-left font-bold">
                      Покупайте{" "}
                    </span>
                    <span className="text-gray-900_01 font-montserrat text-left font-bold">
                      ф
                    </span>
                    <span className="text-gray-900_01 font-montserrat text-left font-bold">
                      риланс-
                    </span>
                    <span className="text-gray-900_01 font-montserrat text-left font-bold">
                      у
                    </span>
                    <span className="text-gray-900_01 font-montserrat text-left font-bold">
                      слуги{" "}
                    </span>
                    <span className="text-gray-900_01 font-montserrat text-left font-bold">
                      в{" "}
                    </span>
                    <span className="text-green-A700 font-montserrat text-left font-bold">
                      два клика
                    </span>
                  </Text>
                  <Text
                    className="mt-[30px] text-gray-900_01 text-xl w-[90%] sm:w-full"
                    size="txtMontserratMedium20"
                  >
                    Ворк — единица работы продавца, которую можно купить как
                    товар в магазине{" "}
                  </Text>
                  <div className="bg-gray-100 flex flex-row sm:gap-10 items-center justify-between mt-[49px] pl-[19px] rounded-[30px] w-[90%] md:w-full">
                    <Text
                      className="text-base text-blue_gray-600"
                      size="txtMontserratMedium16"
                    >
                      Что нужно сделать?
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
                  <Text
                    className="mt-[51px] text-base text-gray-900_01"
                    size="txtMontserratMedium16Gray90001"
                  >
                    Выберите рубрику, чтобы начать
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-start mt-7 w-4/5 md:w-full">
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[116px] rounded-[18px]"
                      onClick={() => navigate("/")}
                      leftIcon={
                        <Img
                          className="h-[15px] mr-1 my-px"
                          src="images/img_arrowright_green_a700.svg"
                          alt="arrow_right"/>
                         }
                      color="green_A700"
                      size="sm"
                      variant="outline">
                      <div className="font-semibold leading-[normal] text-left text-sm">
                        Дизайн
                      </div>
                    </Button>
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
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-start mt-5 w-[96%] md:w-full">
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
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-5 w-[99%] md:w-full">
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[176px] text-center text-sm"
                      shape="round"
                      color="gray_100"
                      size="sm"
                      variant="outline"
                    >
                      Баннеры и стенды
                    </Button>
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
                      onClick={() => navigate("/page14")}
                      shape="round"
                      color="orange_300"
                      size="sm"
                      variant="outline"
                    >
                      Все подкатегории
                    </Button>
                  </div>
                </div>
                <div className="md:h-[559px] h-[630px] relative w-[46%] md:w-full">
                  <div className="absolute md:h-[559px] h-[624px] inset-y-[0] my-auto right-[0] w-[89%] sm:w-full">
                    <Img
                      className="h-[86px] ml-auto mr-[74px] mt-[78px]"
                      src="images/img_thumbsup_gray_100.svg"
                      alt="thumbsup"
                    />
                    <div className="absolute md:h-[559px] h-[624px] inset-[0] justify-center m-auto w-full">
                      <div className="md:h-[559px] h-[624px] m-auto w-full">
                        <div className="absolute bg-orange-100 bottom-[0] flex flex-col h-[532px] sm:h-auto inset-x-[0] items-center justify-start mx-auto rounded-[50%] w-[532px]">
                          <div className="h-[532px] relative w-[532px] sm:w-full">
                            <Img
                              className="h-[532px] m-auto rounded-[50%] w-[532px]"
                              src="images/img_handsomebusine.png"
                              alt="handsomebusine"
                            />
                            <Img
                              className="absolute bottom-[0] h-[41px] left-[0]"
                              src="images/img_thumbsup_orange_300.svg"
                              alt="thumbsup_One"
                            />
                          </div>
                        </div>
                        <div className="absolute h-[559px] inset-x-[0] mx-auto top-[0] w-full">
                          <Img
                            className="h-[559px] m-auto object-cover w-full"
                            src="images/img_handsomebusine_559x535.png"
                            alt="handsomebusine_One"
                          />
                          <div className="absolute bottom-[14%] flex flex-col md:gap-10 gap-[171px] justify-start right-[3%] w-[36%]">
                            <div className="bg-orange-300 h-[49px] md:ml-[0] ml-[130px] mr-2.5 rounded-[25px] w-[50px]"></div>
                            <div className="bg-gray-50 flex flex-col items-start justify-start p-5 rounded-[20px] shadow-bs w-auto">
                              <RatingBar
                                className="flex justify-between rounded-sm w-[150px]"
                                value={5}
                                starCount={5}
                                color="#afaad0"
                                activeColor="#fba457"
                                size={30}
                              ></RatingBar>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[7%] h-[34px] right-[6%]"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                    </div>
                  </div>
                  <div className="absolute bg-orange-50 h-[81px] left-[16%] rounded-[41px] top-[0] w-[82px]"></div>
                  <Img
                    className="absolute h-[126px] left-[0] top-1/4"
                    src="images/img_group6.svg"
                    alt="groupSix"
                  />
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-[122px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[0.48px]"
            size="txtMontserratSemiBold24"
          >
            Актуальные ворки
          </Text>
          <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1320px] min-h-[auto] mt-[34px] mx-auto md:px-5 w-full">
            <div className="border hover:border-0 border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[20px] hover:shadow-bs2 hover:w-full w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                  <Img
                    className="h-11 md:h-auto rounded-[50%] w-11"
                    src="images/img_ellipse54.png"
                    alt="ellipseFiftyFour"
                  />
                  <Text
                    className="sm:flex-1 text-gray-900_01 text-lg w-[84%] sm:w-full"
                    size="txtMontserratSemiBold18"
                  >
                    Сделать дизайн интернет-магазина
                  </Text>
                </div>
                <Text
                  className="text-gray-900_01 text-sm w-full"
                  size="txtMontserratRegular14"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sed leo at hendrerit dictum diam, enim. Dolor in
                  imperdiet ultrices mauris. Est vitae vulputate est nec cras.
                  Turpis nunc ornare nulla neque, interdum. At pharetra
                  consectetur nec est convallis...
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[380px] sm:min-w-full rounded-[20px] text-center text-sm"
                  shape="round"
                  color="green_A700"
                  size="sm"
                  variant="outline"
                >
                  Посмотреть
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 border hover:border-0 border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[20px] hover:shadow-bs2 shadow-bs2 hover:w-full w-full">
              <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-[72%] md:w-full">
                  <Img
                    className="h-11 md:h-auto rounded-[50%] w-11"
                    src="images/img_ellipse54_44x44.png"
                    alt="ellipseFiftyFour"
                  />
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtMontserratSemiBold18"
                  >
                    Верстка landing page
                  </Text>
                </div>
                <Text
                  className="text-gray-900_01 text-sm w-full"
                  size="txtMontserratRegular14"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sed leo at hendrerit dictum diam, enim. Dolor in
                  imperdiet ultrices mauris. Est vitae vulputate est nec cras.
                  Turpis nunc ornare nulla neque, interdum. At pharetra
                  consectetur nec est convallis...
                </Text>
                <Button
                  className="border border-green-A700 border-solid cursor-pointer font-medium leading-[normal] min-w-[380px] sm:min-w-full rounded-[20px] text-center text-sm"
                  shape="round"
                  color="green_A700"
                  size="sm"
                  variant="fill"
                >
                  Посмотреть
                </Button>
              </div>
            </div>
            <div className="border hover:border-0 border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[20px] hover:shadow-bs2 hover:w-full w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                  <Img
                    className="h-11 md:h-auto rounded-[50%] w-11"
                    src="images/img_ellipse54_1.png"
                    alt="ellipseFiftyFour"
                  />
                  <Text
                    className="sm:flex-1 text-gray-900_01 text-lg w-[84%] sm:w-full"
                    size="txtMontserratSemiBold18"
                  >
                    Сделать дизайн сайта-каталога и посадить на какой нибудь
                    ко...
                  </Text>
                </div>
                <Text
                  className="text-gray-900_01 text-sm w-full"
                  size="txtMontserratRegular14"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sed leo at hendrerit dictum diam, enim. Dolor in
                  imperdiet ultrices mauris. Est vitae vulputate est nec cras.
                  Turpis nunc ornare nulla neque, interdum. At pharetra
                  consectetur nec est convallis...
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[380px] sm:min-w-full rounded-[20px] text-center text-sm"
                  shape="round"
                  color="green_A700"
                  size="sm"
                  variant="outline"
                >
                  Посмотреть
                </Button>
              </div>
            </div>
            <div className="border hover:border-0 border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[20px] hover:shadow-bs2 hover:w-full w-full">
              <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-4/5 md:w-full">
                  <Img
                    className="h-11 md:h-auto rounded-[50%] w-11"
                    src="images/img_ellipse54_2.png"
                    alt="ellipseFiftyFour"
                  />
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtMontserratSemiBold18"
                  >
                    Продвижение instagram{" "}
                  </Text>
                </div>
                <Text
                  className="text-gray-900_01 text-sm w-full"
                  size="txtMontserratRegular14"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sed leo at hendrerit dictum diam, enim. Dolor in
                  imperdiet ultrices mauris. Est vitae vulputate est nec cras.
                  Turpis nunc ornare nulla neque, interdum. At pharetra
                  consectetur nec est convallis...
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[380px] sm:min-w-full rounded-[20px] text-center text-sm"
                  shape="round"
                  color="green_A700"
                  size="sm"
                  variant="outline"
                >
                  Посмотреть
                </Button>
              </div>
            </div>
            <div className="border hover:border-0 border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[20px] hover:shadow-bs2 hover:w-full w-full">
              <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-[94%] md:w-full">
                  <Img
                    className="h-11 md:h-auto rounded-[50%] w-11"
                    src="images/img_ellipse54_3.png"
                    alt="ellipseFiftyFour"
                  />
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtMontserratSemiBold18"
                  >
                    Срочно! Нужен веб дизайнер!
                  </Text>
                </div>
                <Text
                  className="text-gray-900_01 text-sm w-full"
                  size="txtMontserratRegular14"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sed leo at hendrerit dictum diam, enim. Dolor in
                  imperdiet ultrices mauris. Est vitae vulputate est nec cras.
                  Turpis nunc ornare nulla neque, interdum. At pharetra
                  consectetur nec est convallis...
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[380px] sm:min-w-full rounded-[20px] text-center text-sm"
                  shape="round"
                  color="green_A700"
                  size="sm"
                  variant="outline"
                >
                  Посмотреть
                </Button>
              </div>
            </div>
            <div className="bg-gray-100 hover:border-0 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[113px] md:px-10 sm:px-5 rounded-[20px] hover:shadow-bs2 hover:w-full w-full">
              <Text
                className="mb-[9px] mt-3 text-green-A700 text-lg"
                size="txtMontserratSemiBold18GreenA700"
              >
                Смотреть все ворки
              </Text>
            </div>
          </div>
          <Text
            className="mt-[101px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[0.48px]"
            size="txtMontserratSemiBold24"
          >
            Топ фрилансеров
          </Text>
          <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1320px] min-h-[auto] mt-[37px] mx-auto md:px-5 w-full">
            <div className="bg-gray-50 border hover:border-0 border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-[30px] items-center justify-center p-5 rounded-[20px] hover:shadow-bs2 shadow-bs2 hover:w-full w-full">
              <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-between w-[97%] md:w-full">
                <div className="h-[150px] relative w-[150px]">
                  <Img
                    className="h-[150px] m-auto rounded-[50%] w-[150px]"
                    src="images/img_ellipse55.png"
                    alt="ellipseFiftyFive"
                  />
                  <div className="absolute bg-green-A700 bottom-[0] h-[19px] right-[20%] rounded-[9px] w-[19px]"></div>
                </div>
                <div className="flex flex-col items-start justify-start w-[52%] sm:w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] text-base text-gray-900_01"
                    size="txtMontserratMedium16Gray90001"
                  >
                    Марина Королёва
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-2.5 text-lg text-orange-300"
                    size="txtMontserratSemiBold18Orange300"
                  >
                    Разработчик PHP{" "}
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-2.5 text-gray-900_01 text-sm"
                    size="txtMontserratMedium14"
                  >
                    Выполено проектов: 65
                  </Text>
                  <div className="flex flex-row items-center justify-start mt-[7px] w-4/5 md:w-full">
                    <RatingBar
                      className="flex justify-between rounded-sm w-[120px]"
                      value={4}
                      starCount={4}
                      color="#afaad0"
                      activeColor="#fba457"
                      size={30}
                    ></RatingBar>
                    <div className="h-[30px] relative w-[30px]">
                      <Img
                        className="h-[30px] m-auto rounded-sm w-[30px]"
                        src="images/img_star11_30x30.svg"
                        alt="starEleven"
                      />
                      <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-1/2">
                        <Img
                          className="h-7 rounded-bl-sm rounded-br-sm w-full"
                          src="images/img_star10_28x15.svg"
                          alt="starTen"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="bg-green-A700 border border-green-A700 border-solid justify-center sm:px-5 px-[35px] py-[11px] rounded-[20px] text-gray-50 text-sm w-auto"
                size="txtMontserratSemiBold14"
              >
                Написать
              </Text>
            </div>
            <div className="border hover:border-0 border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-[30px] items-center justify-center p-5 rounded-[20px] hover:shadow-bs2 hover:w-full w-full">
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-[97%] md:w-full">
                <div className="h-[150px] relative w-[150px]">
                  <Img
                    className="h-[150px] m-auto rounded-[50%] w-[150px]"
                    src="images/img_ellipse55_150x150.png"
                    alt="ellipseFiftyFive"
                  />
                  <div className="absolute bg-green-A700 bottom-[0] h-[19px] right-[20%] rounded-[9px] w-[19px]"></div>
                </div>
                <div className="flex flex-col items-start justify-start w-[52%] sm:w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] text-base text-gray-900_01"
                    size="txtMontserratMedium16Gray90001"
                  >
                    Семён Сергеев
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-[11px] text-lg text-orange-300"
                    size="txtMontserratSemiBold18Orange300"
                  >
                    Копирайтер
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-2.5 text-gray-900_01 text-sm"
                    size="txtMontserratMedium14"
                  >
                    Выполено проектов: 104
                  </Text>
                  <RatingBar
                    className="flex justify-between mt-[7px] rounded-sm w-[150px]"
                    value={4}
                    starCount={5}
                    color="#afaad0"
                    activeColor="#fba457"
                    size={30}
                  ></RatingBar>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[380px] sm:min-w-full rounded-[20px] text-center text-sm"
                shape="round"
                color="green_A700"
                size="sm"
                variant="outline"
              >
                Написать
              </Button>
            </div>
            <div className="border hover:border-0 border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-[30px] items-center justify-center p-5 rounded-[20px] hover:shadow-bs2 hover:w-full w-full">
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-[97%] md:w-full">
                <div className="h-[150px] relative w-[150px]">
                  <Img
                    className="h-[150px] m-auto rounded-[50%] w-[150px]"
                    src="images/img_ellipse55_1.png"
                    alt="ellipseFiftyFive"
                  />
                  <div className="absolute bg-deep_purple-200 bottom-[0] h-[19px] right-[20%] rounded-[9px] w-[19px]"></div>
                </div>
                <div className="flex flex-col items-start justify-start w-[52%] sm:w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] text-base text-gray-900_01"
                    size="txtMontserratMedium16Gray90001"
                  >
                    Ангелина Сорокина
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-[11px] text-lg text-orange-300"
                    size="txtMontserratSemiBold18Orange300"
                  >
                    Дизайнер сайтов
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-2.5 text-gray-900_01 text-sm"
                    size="txtMontserratMedium14"
                  >
                    Выполено проектов: 25
                  </Text>
                  <RatingBar
                    className="flex justify-between mt-[7px] rounded-sm w-[150px]"
                    value={5}
                    starCount={5}
                    color="#afaad0"
                    activeColor="#fba457"
                    size={30}
                  ></RatingBar>
                </div>
              </div>
              <Text
                className="border border-green-A700 border-solid sm:px-5 px-[35px] py-[11px] rounded-[20px] text-green-A700 text-sm w-auto"
                size="txtMontserratMedium14GreenA700"
              >
                Написать
              </Text>
            </div>
            <div className="border hover:border-0 border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-[30px] items-center justify-center p-5 rounded-[20px] hover:shadow-bs2 hover:w-full w-full">
              <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-between w-[97%] md:w-full">
                <div className="h-[150px] relative w-[150px]">
                  <Img
                    className="h-[150px] m-auto rounded-[50%] w-[150px]"
                    src="images/img_ellipse55_2.png"
                    alt="ellipseFiftyFive"
                  />
                  <div className="absolute bg-green-A700 bottom-[0] h-[19px] right-[20%] rounded-[9px] w-[19px]"></div>
                </div>
                <div className="flex flex-col items-start justify-start w-[52%] sm:w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] text-base text-gray-900_01"
                    size="txtMontserratMedium16Gray90001"
                  >
                    Никита Зайцев
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-3 text-lg text-orange-300"
                    size="txtMontserratSemiBold18Orange300"
                  >
                    Маркетолог
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-2.5 text-gray-900_01 text-sm"
                    size="txtMontserratMedium14"
                  >
                    Выполено проектов: 144
                  </Text>
                  <RatingBar
                    className="flex justify-between mt-[7px] rounded-sm w-[150px]"
                    value={4}
                    starCount={5}
                    color="#afaad0"
                    activeColor="#fba457"
                    size={30}
                  ></RatingBar>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[380px] sm:min-w-full rounded-[20px] text-center text-sm"
                shape="round"
                color="green_A700"
                size="sm"
                variant="outline"
              >
                Написать
              </Button>
            </div>
            <div className="border hover:border-0 border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-[30px] items-center justify-center p-5 rounded-[20px] hover:shadow-bs2 hover:w-full w-full">
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-[97%] md:w-full">
                <div className="h-[150px] relative w-[150px]">
                  <Img
                    className="h-[150px] m-auto rounded-[50%] w-[150px]"
                    src="images/img_ellipse55_3.png"
                    alt="ellipseFiftyFive"
                  />
                  <div className="absolute bg-deep_purple-200 bottom-[0] h-[19px] right-[20%] rounded-[9px] w-[19px]"></div>
                </div>
                <div className="flex flex-col items-start justify-start w-[52%] sm:w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] text-base text-gray-900_01"
                    size="txtMontserratMedium16Gray90001"
                  >
                    Наталья Захарова
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-2.5 text-lg text-orange-300"
                    size="txtMontserratSemiBold18Orange300"
                  >
                    Motion дизайнер{" "}
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-2.5 text-gray-900_01 text-sm"
                    size="txtMontserratMedium14"
                  >
                    Выполено проектов: 71
                  </Text>
                  <RatingBar
                    className="flex justify-between mt-[7px] rounded-sm w-[150px]"
                    value={5}
                    starCount={5}
                    color="#afaad0"
                    activeColor="#fba457"
                    size={30}
                  ></RatingBar>
                </div>
              </div>
              <Text
                className="border border-green-A700 border-solid sm:px-5 px-[35px] py-[11px] rounded-[20px] text-green-A700 text-sm w-auto"
                size="txtMontserratMedium14GreenA700"
              >
                Написать
              </Text>
            </div>
            <div className="bg-gray-100 hover:border-0 hover:cursor-pointer flex flex-1 flex-col h-[261px] md:h-auto items-center justify-center p-5 rounded-[20px] hover:shadow-bs2 hover:w-full w-full">
              <Text
                className="text-center text-green-A700 text-lg w-auto"
                size="txtMontserratSemiBold18GreenA700"
              >
                Посмотреть всех ТОП фрилансеров
              </Text>
            </div>
          </div>
          <Text
            className="mt-[101px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[0.48px]"
            size="txtMontserratSemiBold24"
          >
            Как решать задачи на WorkTap?
          </Text>
          <Text
            className="mt-[18px] text-base text-gray-900_01"
            size="txtMontserratRegular16"
          >
            Идеально подходит для бизнеса и частных лиц
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1288px] mt-[49px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[31%] md:w-full">
              <Img
                className="h-[83px] w-[82px]"
                src="images/img_thumbsup_gray_900_01.svg"
                alt="thumbsup_Two"
              />
              <Text
                className="text-gray-900_01 text-lg"
                size="txtMontserratSemiBold18"
              >
                Выберите услугу
              </Text>
              <Text
                className="text-gray-900_01 text-sm w-full"
                size="txtMontserratRegular14"
              >
                В супермаркете WorkTap представлен широкий выбор услуг от
                квалифицированных специалистов.
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start md:ml-[0] ml-[61px] w-[28%] md:w-full">
              <Img
                className="h-[82px] w-[83px]"
                src="images/img_maximize.svg"
                alt="maximize"
              />
              <Text
                className="text-gray-900_01 text-lg"
                size="txtMontserratSemiBold18"
              >
                Оплатите
              </Text>
              <Text
                className="text-gray-900_01 text-sm w-full"
                size="txtMontserratRegular14"
              >
                Деньги будут перечислены продавцу после того, как он выполнит
                работу, и вы её одобрите.{" "}
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[91px] w-[31%] md:w-full">
              <Img
                className="h-20"
                src="images/img_group_gray_900_01.svg"
                alt="group"
              />
              <Text
                className="mt-[21px] text-gray-900_01 text-lg"
                size="txtMontserratSemiBold18"
              >
                Получите результат
              </Text>
              <Text
                className="mt-[18px] text-gray-900_01 text-sm w-full"
                size="txtMontserratRegular14"
              >
                Наш супермаркет гарантирует вам возврат средств в полном объёме
                в случае невыполнения заказа.
              </Text>
            </div>
          </div>
          <div className="h-[734px] md:h-[833px] mt-[99px] md:px-5 relative w-full">
            <div className="h-[734px] m-auto w-full">
              <div className="absolute bg-gradient1  flex flex-col h-full inset-y-[0] items-center justify-end left-[0] my-auto p-[97px] md:px-10 sm:px-5 w-[44%]">
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[221px] mt-[471px] rounded-[34px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[0.48px]"
                  color="indigo_400"
                  size="xl"
                  variant="fill"
                >
                  Начать!
                </Button>
              </div>
              <div className="bg-gradient  h-[594px] ml-auto w-[7%]"></div>
              <Img
                className="absolute h-[734px] inset-y-[0] my-auto object-cover right-[0] w-[68%]"
                src="images/img_workspacewith.png"
                alt="workspacewith"
              />
            </div>
            <div className="absolute flex flex-col items-start justify-start left-[16%] top-[7%] w-[28%]">
              <Text
                className="text-2xl md:text-[22px] text-gray-50 sm:text-xl tracking-[0.48px]"
                size="txtMontserratSemiBold24Gray50"
              >
                Как WorkTap помогает бизнесу?
              </Text>
              <Input
                name="groupTwentySeven"
                placeholder="Оплачивайте с р/с или карты компании"
                className="leading-[normal] p-0 placeholder:text-gray-900_01 text-left text-sm w-full"
                wrapClassName="flex mt-[42px] w-full"
                prefix={
                  <Img
                    className="h-[50px] mr-[30px] my-auto"
                    src="images/img_user.svg"
                    alt="user"
                  />
                }
                shape="round"
                color="gray_50"
                size="md"
                variant="fill"
              ></Input>
              <Input
                name="groupTwentyEight"
                placeholder="Экономьте до 87% бюджета на фрилансе"
                className="leading-[normal] p-0 placeholder:text-gray-900_01 text-left text-sm w-full"
                wrapClassName="flex mt-[30px] w-full"
                prefix={
                  <Img
                    className="h-[50px] mr-[30px] my-auto"
                    src="images/img_money_1_1.svg"
                    alt="money (1) 1"
                  />
                }
                shape="round"
                color="gray_50"
                size="md"
                variant="fill"
              ></Input>
              <Input
                name="groupTwentyNine"
                placeholder="Экономьте до 75% времени на решении фриланс задач"
                className="leading-[normal] p-0 placeholder:text-gray-900_01 text-left text-sm w-full"
                wrapClassName="flex mt-[30px] w-full"
                prefix={
                  <Img
                    className="h-[50px] mr-[30px] my-auto"
                    src="images/img_clock_orange_300_01.svg"
                    alt="clock"
                  />
                }
                shape="round"
                color="gray_50"
                size="md"
                variant="fill"
              ></Input>
              <Text
                className="mt-[50px] text-gray-50 text-xl tracking-[0.40px]"
                size="txtMontserratSemiBold20"
              >
                WorkTap — быстро, просто и безопасно!
              </Text>
            </div>
          </div>
          <Footer className="bg-gray-100 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default TwoPage;
