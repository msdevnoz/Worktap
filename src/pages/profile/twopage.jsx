import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, RatingBar, Text } from "components";
import Column2 from "components/Column2";
import Column3 from "components/Column3";
import ColumnOne from "components/ColumnOne";
import Footer from "components/Footer";
import Header from "components/Header";

const profilePage2 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="bg-gray-50_01 flex flex-col items-start justify-start sm:pr-5 pr-[30px] py-[30px] w-full">
            <div className="flex flex-col gap-[37px] justify-start mb-[50px] md:px-5 w-[86%] md:w-full">
              <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[300px] w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mr-[41px] w-[98%] md:w-full">
                <Button
                  className="common-pointer cursor-pointer flex items-center justify-center mb-[497px] min-w-[233px] md:mt-0 mt-[252px] rounded-br-[50px] rounded-tr-[50px]"
                  onClick={() => navigate("/page10")}
                  rightIcon={
                    <Img
                      className="h-6 ml-2.5 my-2"
                      src="images/img_arrowright_gray_50.svg"
                      alt="arrow_right"
                    />
                  }
                  color="orange_300"
                  size="xl"
                  variant="fill"
                >
                  <div className="font-bold leading-[normal] text-base text-left">
                    <>
                      Быстрый <br />
                      поиск ворков
                    </>
                  </div>
                </Button>
                <div className="flex flex-col items-start justify-start md:mt-0 mt-[142px]">
                  <Text
                    className="text-2xl md:text-[22px] text-orange-300 sm:text-xl"
                    size="txtMontserratSemiBold24Orange300"
                  >
                    Дизайнер{" "}
                  </Text>
                  <Text
                    className="mt-2.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                    size="txtMontserratSemiBold36"
                  >
                    Ернар Ибрагимов
                  </Text>
                  <Text
                    className="mt-[17px] text-black-900 text-sm"
                    size="txtMontserratRegular14Black900"
                  >
                    <>
                      Работаю дизайнером с 1999 года.
                      <br />
                      Был опыт в газетах, журналах, типографиях, рекламных
                      агентствах, издательских домах... Порядка 8 лет, занимаюсь
                      логотипами и фирменными стилями.
                    </>
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-5 items-start justify-start mt-[29px] w-auto sm:w-full">
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[86px] text-center text-sm"
                      shape="round"
                      color="gray_100"
                      size="sm"
                      variant="outline"
                    >
                      Figma
                    </Button>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[167px] text-center text-sm"
                      shape="round"
                      color="gray_100"
                      size="sm"
                      variant="outline"
                    >
                      Adobe photoshop
                    </Button>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[157px] text-center text-sm"
                      shape="round"
                      color="gray_100"
                      size="sm"
                      variant="outline"
                    >
                      Adobe illustrator
                    </Button>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[116px] text-center text-sm"
                      shape="round"
                      color="gray_100"
                      size="sm"
                      variant="outline"
                    >
                      Corel draw
                    </Button>
                  </div>
                  <div className="flex flex-row gap-5 items-start justify-start mt-5 w-auto">
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[176px] text-center text-sm"
                      shape="round"
                      color="gray_100"
                      size="sm"
                      variant="outline"
                    >
                      Adobe After Effects
                    </Button>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[114px] text-center text-sm"
                      shape="round"
                      color="gray_100"
                      size="sm"
                      variant="outline"
                    >
                      HTML/CSS
                    </Button>
                  </div>
                  <div className="bg-gray-100 flex flex-col gap-[30px] items-start justify-start max-w-[645px] mt-[60px] px-10 sm:px-5 py-5 rounded-[20px] w-full">
                    <Button
                      className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[565px] sm:min-w-full"
                      onClick={() => navigate("/page8")}
                      rightIcon={
                        <Img
                          className="h-4 ml-[35px]"
                          src="images/img_arrowup.svg"
                          alt="arrow_up"
                        />
                      }
                      size="xs"
                    >
                      <div className="font-medium leading-[normal] text-black-900 text-left text-lg">
                        Скрыть подробную информацию
                      </div>
                    </Button>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[74%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_globe.svg"
                          alt="globe"
                        />
                        <Text
                          className="ml-3 sm:ml-[0] text-black-900 text-lg"
                          size="txtMontserratMedium18"
                        >
                          Страна:{" "}
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[115px] text-black-900 text-lg"
                          size="txtMontserratRegular18"
                        >
                          Казахстан, Алматы
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-[52%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_clock_blue_gray_600.svg"
                          alt="clock"
                        />
                        <Text
                          className="ml-3 text-gray-900_01 text-lg"
                          size="txtMontserratMedium18Gray90001"
                        >
                          На сайте:{" "}
                        </Text>
                        <Text
                          className="ml-[100px] text-gray-900_01 text-lg"
                          size="txtMontserratRegular18Gray90001"
                        >
                          3 года
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_thumbsup_blue_gray_600.svg"
                          alt="thumbsup"
                        />
                        <Text
                          className="ml-3 sm:ml-[0] text-gray-900_01 text-lg"
                          size="txtMontserratMedium18Gray90001"
                        >
                          Образование:
                        </Text>
                        <Text
                          className="leading-[28.00px] sm:ml-[0] ml-[54px] text-gray-900_01 text-lg"
                          size="txtMontserratRegular18Gray90001"
                        >
                          <>
                            Казахстан, КазНУ, Бакалавр
                            <br />
                            Казахстан, КБТУ, Магистратура
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start md:pr-10 sm:pr-5 pr-[157px] w-[95%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_languageminor1.svg"
                          alt="languageminorOne"
                        />
                        <Text
                          className="ml-3 text-gray-900_01 text-lg"
                          size="txtMontserratMedium18Gray90001"
                        >
                          Знание языков:
                        </Text>
                        <Text
                          className="leading-[28.00px] ml-10 text-gray-900_01 text-lg"
                          size="txtMontserratRegular18Gray90001"
                        >
                          <>
                            Казахский <br />
                            Русский
                          </>
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start sm:pr-5 pr-[37px] w-[95%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_noteminor1.svg"
                          alt="noteminorOne"
                        />
                        <Text
                          className="ml-3 sm:ml-[0] text-gray-900_01 text-lg"
                          size="txtMontserratMedium18Gray90001"
                        >
                          Сертификаты:
                        </Text>
                        <Text
                          className="leading-[28.00px] sm:ml-[0] ml-[55px] text-gray-900_01 text-lg"
                          size="txtMontserratRegular18Gray90001"
                        >
                          <>
                            Сертификат 1, 2020 года
                            <br />
                            Сертификат 2, 2021 года
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:h-[252px] h-[498px] relative w-[38%] md:w-full">
                  <div className="absolute bottom-[1%] h-[424px] right-[0] w-[90%] sm:w-full">
                    <div className="md:h-[252px] h-[420px] mb-[-168px] ml-[30px] mt-auto w-[421px] sm:w-full z-[1]">
                      <Img
                        className="h-[420px] m-auto rounded-[50%] w-[421px]"
                        src="images/img_ellipse66.png"
                        alt="ellipseSixtySix"
                      />
                      <Button
                        className="absolute flex h-[52px] items-center justify-center right-[8%] rounded-[10px] shadow-bs3 top-[2%] w-[52px]"
                        color="gray_50"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-5"
                          src="images/img_settingsmajor1.svg"
                          alt="settingsmajorOne"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                        <Img
                          className="h-[41px]"
                          src="images/img_thumbsup_orange_300_41x86.svg"
                          alt="thumbsup_One"
                        />
                        <div className="bg-orange-50 h-[172px] rounded-[50%] w-[172px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-gray-50 bottom-[0] flex flex-col items-center justify-start p-5 right-[32%] rounded-[20px] shadow-bs w-auto">
                    <RatingBar
                      className="flex justify-between rounded-sm w-[150px]"
                      value={4}
                      starCount={5}
                      color="#afaad0"
                      activeColor="#fba457"
                      size={30}
                    ></RatingBar>
                  </div>
                  <Img
                    className="absolute h-[34px] right-[7%] top-[32%]"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <div className="absolute bg-orange-50 h-[103px] left-[12%] rounded-[51px] top-[0] w-[103px]"></div>
                  <div className="absolute bg-gray-50 flex flex-col h-max inset-y-[0] items-center justify-center left-[0] my-auto sm:px-5 px-9 py-3 rounded-[22px] shadow-bs3 w-auto">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <div className="bg-green-A700 h-[7px] rounded-[3px] w-[7px]"></div>
                      <Text
                        className="text-base text-green-A700 w-auto"
                        size="txtMontserratMedium16GreenA700"
                      >
                        В сети
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[300px] mt-[61px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.48px]"
            size="txtMontserratSemiBold24Black900"
          >
            Мой ворки
          </Text>
          <div className="md:gap-5 gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1322px] min-h-[auto] mt-[37px] mx-auto md:px-5 w-full">
            <Column3 className="bg-teal-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-2.5 h-[276px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[47px] py-[61px] rounded-[20px] hover:shadow-bs hover:w-full w-full" />
            <ColumnOne className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[20px] hover:shadow-bs hover:w-full w-full" />
            <Column2 className="bg-teal-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-[22px] rounded-[20px] hover:shadow-bs shadow-bs hover:w-full w-full" />
            <ColumnOne className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[20px] hover:shadow-bs hover:w-full w-full" />
            <ColumnOne className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[20px] hover:shadow-bs hover:w-full w-full" />
            <Column2 className="bg-teal-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-[22px] rounded-[20px] hover:shadow-bs shadow-bs hover:w-full w-full" />
            <ColumnOne className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[20px] hover:shadow-bs hover:w-full w-full" />
            <ColumnOne className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[20px] hover:shadow-bs hover:w-full w-full" />
            <Column2 className="bg-teal-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-[22px] rounded-[20px] hover:shadow-bs shadow-bs hover:w-full w-full" />
            <ColumnOne className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[20px] hover:shadow-bs hover:w-full w-full" />
            <ColumnOne className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[20px] hover:shadow-bs hover:w-full w-full" />
            <ColumnOne className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[20px] hover:shadow-bs hover:w-full w-full" />
          </div>
          <Button
            className="cursor-pointer font-semibold leading-[normal] min-w-[238px] md:ml-[0] ml-[841px] mt-[60px] rounded-[27px] text-center text-lg"
            color="green_A700"
            size="lg"
            variant="outline"
          >
            Загрузить еще
          </Button>
          <Text
            className="md:ml-[0] ml-[300px] mt-[59px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.48px]"
            size="txtMontserratSemiBold24Black900"
          >
            Отзывы
          </Text>
          <div className="flex sm:flex-col flex-row gap-10 items-start justify-start md:ml-[0] ml-[300px] mt-[19px] md:px-5 w-auto sm:w-full">
            <Text
              className="text-base text-green-A700 w-auto"
              size="txtMontserratSemiBold16GreenA700"
            >
              Положительные (65)
            </Text>
            <Text
              className="text-base text-black-900 w-auto"
              size="txtMontserratRegular16Black900"
            >
              Отрицательные(10)
            </Text>
          </div>
          <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1320px] min-h-[auto] mt-10 mx-auto md:px-5 w-full">
            <div className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-full">
              <div className="flex flex-row gap-5 items-center justify-start w-auto">
                <div className="bg-gray-400 h-20 rounded-[50%] w-20"></div>
                <div className="flex flex-col gap-[18px] items-center justify-start w-3/5">
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtMontserratSemiBold18"
                  >
                    Никита Евреев
                  </Text>
                  <RatingBar
                    className="flex justify-between rounded-sm w-[150px]"
                    value={4}
                    starCount={5}
                    color="#afaad0"
                    activeColor="#fba457"
                    size={30}
                  ></RatingBar>
                </div>
              </div>
              <Text
                className="max-w-[380px] md:max-w-full text-black-900 text-sm"
                size="txtMontserratRegular14Black900"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                tincidunt eget eu, eget commodo condimentum non, fringilla
                fermentum. Morbi sed enim facilisis metus pretium leo, mauris.
                In egestas cursus orci dignissim in lectus nulla.{" "}
              </Text>
            </div>
            <div className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-full">
              <div className="flex flex-row gap-5 items-center justify-start w-auto">
                <div className="bg-gray-400 h-20 rounded-[50%] w-20"></div>
                <div className="flex flex-col gap-[18px] items-center justify-start w-3/5">
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtMontserratSemiBold18"
                  >
                    Никита Евреев
                  </Text>
                  <RatingBar
                    className="flex justify-between rounded-sm w-[150px]"
                    value={4}
                    starCount={5}
                    color="#afaad0"
                    activeColor="#fba457"
                    size={30}
                  ></RatingBar>
                </div>
              </div>
              <Text
                className="max-w-[380px] md:max-w-full text-black-900 text-sm"
                size="txtMontserratRegular14Black900"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                tincidunt eget eu, eget commodo condimentum non, fringilla
                fermentum. Morbi sed enim facilisis metus pretium leo, mauris.
                In egestas cursus orci dignissim in lectus nulla.{" "}
              </Text>
            </div>
            <div className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-full">
              <div className="flex flex-row gap-5 items-center justify-start w-auto">
                <div className="bg-gray-400 h-20 rounded-[50%] w-20"></div>
                <div className="flex flex-col gap-[18px] items-center justify-start w-3/5">
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtMontserratSemiBold18"
                  >
                    Никита Евреев
                  </Text>
                  <RatingBar
                    className="flex justify-between rounded-sm w-[150px]"
                    value={4}
                    starCount={5}
                    color="#afaad0"
                    activeColor="#fba457"
                    size={30}
                  ></RatingBar>
                </div>
              </div>
              <Text
                className="max-w-[380px] md:max-w-full text-black-900 text-sm"
                size="txtMontserratRegular14Black900"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                tincidunt eget eu, eget commodo condimentum non, fringilla
                fermentum. Morbi sed enim facilisis metus pretium leo, mauris.
                In egestas cursus orci dignissim in lectus nulla.{" "}
              </Text>
            </div>
            <div className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-full">
              <div className="flex flex-row gap-5 items-center justify-start w-auto">
                <div className="bg-gray-400 h-20 rounded-[50%] w-20"></div>
                <div className="flex flex-col gap-[18px] items-center justify-start w-3/5">
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtMontserratSemiBold18"
                  >
                    Никита Евреев
                  </Text>
                  <RatingBar
                    className="flex justify-between rounded-sm w-[150px]"
                    value={4}
                    starCount={5}
                    color="#afaad0"
                    activeColor="#fba457"
                    size={30}
                  ></RatingBar>
                </div>
              </div>
              <Text
                className="max-w-[380px] md:max-w-full text-black-900 text-sm"
                size="txtMontserratRegular14Black900"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                tincidunt eget eu, eget commodo condimentum non, fringilla
                fermentum. Morbi sed enim facilisis metus pretium leo, mauris.
                In egestas cursus orci dignissim in lectus nulla.{" "}
              </Text>
            </div>
            <div className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-full">
              <div className="flex flex-row gap-5 items-center justify-start w-auto">
                <div className="bg-gray-400 h-20 rounded-[50%] w-20"></div>
                <div className="flex flex-col gap-[18px] items-center justify-start w-3/5">
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtMontserratSemiBold18"
                  >
                    Никита Евреев
                  </Text>
                  <RatingBar
                    className="flex justify-between rounded-sm w-[150px]"
                    value={4}
                    starCount={5}
                    color="#afaad0"
                    activeColor="#fba457"
                    size={30}
                  ></RatingBar>
                </div>
              </div>
              <Text
                className="max-w-[380px] md:max-w-full text-black-900 text-sm"
                size="txtMontserratRegular14Black900"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                tincidunt eget eu, eget commodo condimentum non, fringilla
                fermentum. Morbi sed enim facilisis metus pretium leo, mauris.
                In egestas cursus orci dignissim in lectus nulla.{" "}
              </Text>
            </div>
            <div className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-full">
              <div className="flex flex-row gap-5 items-center justify-start w-auto">
                <div className="bg-gray-400 h-20 rounded-[50%] w-20"></div>
                <div className="flex flex-col gap-[18px] items-center justify-start w-3/5">
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtMontserratSemiBold18"
                  >
                    Никита Евреев
                  </Text>
                  <RatingBar
                    className="flex justify-between rounded-sm w-[150px]"
                    value={4}
                    starCount={5}
                    color="#afaad0"
                    activeColor="#fba457"
                    size={30}
                  ></RatingBar>
                </div>
              </div>
              <Text
                className="max-w-[380px] md:max-w-full text-black-900 text-sm"
                size="txtMontserratRegular14Black900"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                tincidunt eget eu, eget commodo condimentum non, fringilla
                fermentum. Morbi sed enim facilisis metus pretium leo, mauris.
                In egestas cursus orci dignissim in lectus nulla.{" "}
              </Text>
            </div>
          </div>
          <Button
            className="cursor-pointer font-semibold leading-[normal] min-w-[238px] md:ml-[0] ml-[841px] mt-10 rounded-[27px] text-center text-lg"
            color="green_A700"
            size="lg"
            variant="outline"
          >
            Загрузить еще
          </Button>
          <Footer className="bg-gray-100 flex items-center justify-center mt-20 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default profilePage2;
