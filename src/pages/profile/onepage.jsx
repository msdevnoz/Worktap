import React from "react";
import { Button, Img, RatingBar, SelectBox, Text } from "components";
import { Link } from "react-router-dom";
import Column2 from "components/Column2";
import ColumnOne from "components/ColumnOne";
import Footer from "components/Footer";
import Header from "components/Header";

const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const profilePage1 = () => {

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="bg-gray-50_01 flex flex-col items-start justify-start sm:pr-5 pr-[30px] py-[30px] w-full">
            <div className="flex flex-col gap-[37px] justify-start mb-[182px] md:px-5 w-[86%] md:w-full">
              <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[300px] w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mr-[41px] w-[98%] md:w-full">
                <Link to="/search">
                <Button
                  className="common-pointer cursor-pointer flex items-center justify-center mb-[209px] min-w-[233px] md:mt-0 mt-[252px] rounded-br-[50px] rounded-tr-[50px]"
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
                </Link>
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
                  <SelectBox
                    className="font-medium leading-[normal] mt-[60px] text-left text-lg w-full"
                    placeholderClassName="text-black-900"
                    indicator={
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_gray_900_01_16x16.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frameThirtyFour"
                    options={optionsList}
                    isSearchable={false}
                    placeholder="Показать подробную информацию"
                    shape="round"
                    color="gray_100"
                    size="md"
                    variant="fill"
                  />
                </div>
                <div className="md:h-[295px] h-[498px] mb-[43px] relative w-[38%] md:w-full">
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
                          alt="thumbsup"
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
      
          <div className="flex md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-center max-w-[1275px] mt-[37px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[22px] items-center justify-start md:mt-0 mt-[74px] w-[17%] md:w-full">
              <Img
                className="h-[70px] w-[70px]"
                src="images/img_plus.svg"
                alt="plus"
              />
            <Link to="/myOrderPage">
            <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-green-A700"
                size="txtMontserratSemiBold30"
              >
                Создать ворк
              </Text>
            </Link>
            </div>
            <div className="flex md:flex-1 flex-col gap-[18px] justify-start w-[78%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Img
                  className="h-[172px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px]"
                  src="images/img_rectangle20.png"
                  alt="rectangleTwenty"
                />
                <Img
                  className="h-[170px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px]"
                  src="images/img_rectangle20.png"
                  alt="rectangleNineteen"
                />
                <Img
                  className="h-[172px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px]"
                  src="images/img_rectangle20.png"
                  alt="rectangleTwentyOne"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-5 md:ml-[0] w-[83%] md:w-full">
                <Text
                  className="md:mt-0 mt-0.5 text-gray-900_01 text-lg"
                  size="txtMontserratSemiBold18"
                >
                  Дизайн сайта
                </Text>
                <Text
                  className="mb-0.5 md:ml-[0] ml-[207px] text-gray-900_01 text-lg"
                  size="txtMontserratSemiBold18"
                >
                  Дизайн сайта
                </Text>
                <Text
                  className="md:ml-[0] ml-[205px] md:mt-0 mt-0.5 text-gray-900_01 text-lg"
                  size="txtMontserratSemiBold18"
                >
                  Дизайн сайта
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[658px] mt-[17px] md:px-5 w-[42%] md:w-full">
            <Text
              className="md:mt-0 mt-0.5 text-green-A700 text-lg"
              size="txtMontserratSemiBold18GreenA700"
            >
              50 000 тенге
            </Text>
            <Text
              className="mb-0.5 md:ml-[0] ml-[217px] text-green-A700 text-lg"
              size="txtMontserratSemiBold18GreenA700"
            >
              50 000 тенге
            </Text>
            <Text
              className="md:ml-[0] ml-[215px] md:mt-0 mt-0.5 text-green-A700 text-lg"
              size="txtMontserratSemiBold18GreenA700"
            >
              50 000 тенге
            </Text>
          </div>
          <div className="md:gap-5 gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1322px] min-h-[auto] mt-[50px] mx-auto md:px-5 w-full">
            <ColumnOne className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[20px] hover:shadow-bs hover:w-full w-full" />
            <Column2 className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-[22px] rounded-[20px] hover:shadow-bs shadow-bs hover:w-full w-full" />
            <ColumnOne className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[20px] hover:shadow-bs hover:w-full w-full" />
            <ColumnOne className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[20px] hover:shadow-bs hover:w-full w-full" />
            <Column2 className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-[22px] rounded-[20px] hover:shadow-bs shadow-bs hover:w-full w-full" />
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

export default profilePage1;
