import React from "react";

import { Button, Img, List, RatingBar, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const orderFrilanserPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-end mx-auto pt-[30px] w-full">
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start max-w-[1320px] mx-auto md:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
            <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mt-[60px] w-full">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[61px] items-start justify-start w-[58%] md:w-full">
                <div className="border border-gray-100 border-solid flex flex-col items-center justify-end p-[18px] rounded-[20px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[72%] md:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                          size="txtMontserratSemiBold24Black900"
                        >
                          Нужно сделать Дизайн сайта по тематике авто{" "}
                        </Text>
                        <div className="flex flex-row gap-2 items-center justify-center w-auto sm:w-full">
                          <Text
                            className="text-deep_purple-200 text-sm w-auto"
                            size="txtMontserratRegular14Deeppurple200"
                          >
                            Дизайн
                          </Text>
                          <Img
                            className="h-2 w-1"
                            src="images/img_vector_deep_purple_200.svg"
                            alt="vector"
                          />
                          <Text
                            className="text-deep_purple-200 text-sm w-auto"
                            size="txtMontserratRegular14Deeppurple200"
                          >
                            Веб и мобильный дизайн
                          </Text>
                          <Img
                            className="h-2 w-1"
                            src="images/img_vector_deep_purple_200.svg"
                            alt="vector_One"
                          />
                          <Text
                            className="text-deep_purple-200 text-sm w-auto"
                            size="txtMontserratRegular14Deeppurple200"
                          >
                            Веб-дизайн
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[25px] items-center justify-start">
                        <Text
                          className="text-green-A700 text-lg text-right"
                          size="txtMontserratSemiBold18GreenA700"
                        >
                          50 000 тенге
                        </Text>
                        <Text
                          className="text-base text-blue_gray-600 text-right"
                          size="txtMontserratMedium16"
                        >
                          до 14.07.2021
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="mt-[18px] text-base text-black-900 w-full"
                      size="txtMontserratRegular16Black900"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tincidunt aliquet felis ullamcorper duis faucibus sapien
                      tincidunt tristique elit. Facilisi feugiat neque, morbi
                      quis. Justo non mauris velit amet, habitasse. Enim,
                      euismod purus semper urna. Lorem adipiscing tristique
                      dignissim mattis. Consectetur morbi nisl, at sodales nunc
                      egestas dolor aliquet amet. Massa ipsum laoreet ipsum
                      proin maecenas. Magnis pulvinar consequat donec ipsum id
                      pulvinar nam sed. Ut tempor turpis vehicula nulla non.
                    </Text>
                    <div className="flex flex-row gap-3 items-center justify-start mt-5 w-auto">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[5px] w-10"
                        color="deep_purple_50"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          src="images/img_frame97.svg"
                          alt="frameNinetySeven"
                        />
                      </Button>
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtMontserratMedium16Black900"
                      >
                        Документ 1.png{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start mt-3 w-auto">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[5px] w-10"
                        color="deep_purple_50"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          src="images/img_frame97.svg"
                          alt="frameNinetySeven_One"
                        />
                      </Button>
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtMontserratMedium16Black900"
                      >
                        Документ 2.jpeg{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start mt-3 w-auto">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[5px] w-10"
                        color="deep_purple_50"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          src="images/img_frame97.svg"
                          alt="frameNinetySeven_Two"
                        />
                      </Button>
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtMontserratMedium16Black900"
                      >
                        Документ 3.pdf
                      </Text>
                    </div>
                    <Text
                      className="mt-[21px] text-base text-deep_purple-200"
                      size="txtMontserratMedium16Deeppurple200"
                    >
                      Предложений: 7
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-base text-black-900"
                  size="txtMontserratMedium16Black900"
                >
                  Ставки фрилансеров
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-[41%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] rounded-[22px] text-base text-center w-64"
                    color="blue_gray_600"
                    size="md"
                    variant="outline"
                  >
                    Изменить
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] rounded-[22px] text-base text-center w-64"
                    color="red_500"
                    size="md"
                    variant="outline"
                  >
                    Закрыть без выполения
                  </Button>
                </div>
                <div className="border border-gray-100 border-solid flex flex-col items-start justify-start p-5 rounded-[20px] w-full">
                  <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                      <Img
                        className="h-[120px] md:h-auto rounded-[50%] w-[120px]"
                        src="images/img_ellipse65.png"
                        alt="ellipseSixtyFive"
                      />
                      <div className="flex flex-col gap-[11px] items-start justify-start">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtMontserratMedium18"
                        >
                          Екатерина Иванова
                        </Text>
                        <Text
                          className="text-black-900 text-lg"
                          size="txtMontserratMedium18"
                        >
                          Размещено проектов на бирже: 25
                        </Text>
                        <div className="flex flex-row gap-[23px] items-center justify-start w-[77%] md:w-full">
                          <RatingBar
                            className="flex justify-between rounded-sm w-[150px]"
                            value={4}
                            starCount={5}
                            color="#afaad0"
                            activeColor="#fba457"
                            size={30}
                          ></RatingBar>
                          <Text
                            className="text-black-900 text-sm"
                            size="txtMontserratSemiBold14Black900"
                          >
                            15 отзывов
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="flex flex-col gap-5 items-center mt-[18px] w-auto"
              orientation="vertical"
            >
              <div className="bg-gray-50 border border-gray-100 border-solid flex flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[718px] w-full">
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
                  <div className="flex flex-col gap-5 items-end justify-center w-auto">
                    <Text
                      className="text-green-A700 text-xl w-auto"
                      size="txtMontserratSemiBold20GreenA700"
                    >
                      50 000 ТГ
                    </Text>
                    <Text
                      className="text-base text-blue_gray-600 text-right w-auto"
                      size="txtMontserratMedium16"
                    >
                      3 дня
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-black-900 text-sm"
                  size="txtMontserratRegular14Black900"
                >
                  <>
                    Количество доработок: 5<br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tellus tincidunt eget eu, eget commodo condimentum non,
                    fringilla fermentum. Morbi sed enim facilisis metus pretium
                    leo, mauris. In egestas cursus orci dignissim in lectus
                    nulla.{" "}
                  </>
                </Text>
                <div className="flex flex-row gap-5 items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[147px] rounded-[22px] text-base text-center"
                    color="green_A700"
                    size="md"
                    variant="outline"
                  >
                    Выбрать{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[165px] rounded-[22px] text-base text-center"
                    color="deep_purple_200"
                    size="md"
                    variant="outline"
                  >
                    Отклонить
                  </Button>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-100 border-solid flex flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[718px] w-full">
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
                  <div className="flex flex-col gap-5 items-end justify-center w-auto">
                    <Text
                      className="text-green-A700 text-xl w-auto"
                      size="txtMontserratSemiBold20GreenA700"
                    >
                      50 000 ТГ
                    </Text>
                    <Text
                      className="text-base text-blue_gray-600 text-right w-auto"
                      size="txtMontserratMedium16"
                    >
                      3 дня
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-black-900 text-sm"
                  size="txtMontserratRegular14Black900"
                >
                  <>
                    Количество доработок: 5<br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tellus tincidunt eget eu, eget commodo condimentum non,
                    fringilla fermentum. Morbi sed enim facilisis metus pretium
                    leo, mauris. In egestas cursus orci dignissim in lectus
                    nulla.{" "}
                  </>
                </Text>
                <div className="flex flex-row gap-5 items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[147px] rounded-[22px] text-base text-center"
                    color="green_A700"
                    size="md"
                    variant="outline"
                  >
                    Выбрать{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[165px] rounded-[22px] text-base text-center"
                    color="deep_purple_200"
                    size="md"
                    variant="outline"
                  >
                    Отклонить
                  </Button>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-100 border-solid flex flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[718px] w-full">
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
                  <div className="flex flex-col gap-5 items-end justify-center w-auto">
                    <Text
                      className="text-green-A700 text-xl w-auto"
                      size="txtMontserratSemiBold20GreenA700"
                    >
                      50 000 ТГ
                    </Text>
                    <Text
                      className="text-base text-blue_gray-600 text-right w-auto"
                      size="txtMontserratMedium16"
                    >
                      3 дня
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-black-900 text-sm"
                  size="txtMontserratRegular14Black900"
                >
                  <>
                    Количество доработок: 5<br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tellus tincidunt eget eu, eget commodo condimentum non,
                    fringilla fermentum. Morbi sed enim facilisis metus pretium
                    leo, mauris. In egestas cursus orci dignissim in lectus
                    nulla.{" "}
                  </>
                </Text>
                <div className="flex flex-row gap-5 items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[147px] rounded-[22px] text-base text-center"
                    color="green_A700"
                    size="md"
                    variant="outline"
                  >
                    Выбрать{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[165px] rounded-[22px] text-base text-center"
                    color="deep_purple_200"
                    size="md"
                    variant="outline"
                  >
                    Отклонить
                  </Button>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-100 border-solid flex flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[718px] w-full">
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
                  <div className="flex flex-col gap-5 items-end justify-center w-auto">
                    <Text
                      className="text-green-A700 text-xl w-auto"
                      size="txtMontserratSemiBold20GreenA700"
                    >
                      50 000 ТГ
                    </Text>
                    <Text
                      className="text-base text-blue_gray-600 text-right w-auto"
                      size="txtMontserratMedium16"
                    >
                      3 дня
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-black-900 text-sm"
                  size="txtMontserratRegular14Black900"
                >
                  <>
                    Количество доработок: 5<br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tellus tincidunt eget eu, eget commodo condimentum non,
                    fringilla fermentum. Morbi sed enim facilisis metus pretium
                    leo, mauris. In egestas cursus orci dignissim in lectus
                    nulla.{" "}
                  </>
                </Text>
                <div className="flex flex-row gap-5 items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[147px] rounded-[22px] text-base text-center"
                    color="green_A700"
                    size="md"
                    variant="outline"
                  >
                    Выбрать{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[165px] rounded-[22px] text-base text-center"
                    color="deep_purple_200"
                    size="md"
                    variant="outline"
                  >
                    Отклонить
                  </Button>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-100 border-solid flex flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[718px] w-full">
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
                  <div className="flex flex-col gap-5 items-end justify-center w-auto">
                    <Text
                      className="text-green-A700 text-xl w-auto"
                      size="txtMontserratSemiBold20GreenA700"
                    >
                      50 000 ТГ
                    </Text>
                    <Text
                      className="text-base text-blue_gray-600 text-right w-auto"
                      size="txtMontserratMedium16"
                    >
                      3 дня
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-black-900 text-sm"
                  size="txtMontserratRegular14Black900"
                >
                  <>
                    Количество доработок: 5<br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tellus tincidunt eget eu, eget commodo condimentum non,
                    fringilla fermentum. Morbi sed enim facilisis metus pretium
                    leo, mauris. In egestas cursus orci dignissim in lectus
                    nulla.{" "}
                  </>
                </Text>
                <div className="flex flex-row gap-5 items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[147px] rounded-[22px] text-base text-center"
                    color="green_A700"
                    size="md"
                    variant="outline"
                  >
                    Выбрать{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[165px] rounded-[22px] text-base text-center"
                    color="deep_purple_200"
                    size="md"
                    variant="outline"
                  >
                    Отклонить
                  </Button>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-100 border-solid flex flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[718px] w-full">
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
                  <div className="flex flex-col gap-5 items-end justify-center w-auto">
                    <Text
                      className="text-green-A700 text-xl w-auto"
                      size="txtMontserratSemiBold20GreenA700"
                    >
                      50 000 ТГ
                    </Text>
                    <Text
                      className="text-base text-blue_gray-600 text-right w-auto"
                      size="txtMontserratMedium16"
                    >
                      3 дня
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-black-900 text-sm"
                  size="txtMontserratRegular14Black900"
                >
                  <>
                    Количество доработок: 5<br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tellus tincidunt eget eu, eget commodo condimentum non,
                    fringilla fermentum. Morbi sed enim facilisis metus pretium
                    leo, mauris. In egestas cursus orci dignissim in lectus
                    nulla.{" "}
                  </>
                </Text>
                <div className="flex flex-row gap-5 items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[147px] rounded-[22px] text-base text-center"
                    color="green_A700"
                    size="md"
                    variant="outline"
                  >
                    Выбрать{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[165px] rounded-[22px] text-base text-center"
                    color="deep_purple_200"
                    size="md"
                    variant="outline"
                  >
                    Отклонить
                  </Button>
                </div>
              </div>
            </List>
          </div>
          <Footer className="bg-gray-100 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default orderFrilanserPage;