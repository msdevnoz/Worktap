import React from "react";
import { Link } from "react-router-dom";
import { Button, Img, Input, Line, Text } from "components";

const loginPage1 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[300px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1620px] mx-auto w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[184px] items-start justify-start md:mt-0 mt-5 w-[32%] md:w-full">
            <Img
                 className="h-10 md:h-auto md:mt-0 my-5 object-cover"
                 src="images/img_worktap1.png"
                 alt="worktapOne"
            />
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-base text-gray-800"
                  size="txtMontserratRegular16Bluegray90001"
                >
                  Добро пожаловать!
                </Text>
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtMontserratBold30"
                >
                  Войдите в свой аккаунт
                </Text>
                <div className="flex flex-col font-montserrat gap-[18px] items-start justify-start mt-[54px] w-full">
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtMontserratMedium18Gray90001"
                  >
                    E-mail
                  </Text>
                  <div className="flex flex-col gap-[9px] justify-start w-full">
                    <Text
                      className="ml-5 md:ml-[0] text-base text-deep_purple-200"
                      size="txtMontserratMedium16Deeppurple200"
                    >
                    </Text>
                    <Input
                    name="groupSeventySix"
                    placeholder="Email"
                    className="font-medium leading-[normal] p-0 placeholder:text-deep_purple-200 sm:pr-5 text-base text-left w-full"
                    wrapClassName="pl-5 pr-[35px] w-full"
                    color="gray_100"
                    size="sm"
                    variant="underline"
                  ></Input>
                    <Line className="bg-gray-100 h-px rounded-[1px] w-full" />
                  </div>
                </div>
                <div className="flex flex-col font-montserrat gap-[18px] items-start justify-start mt-10 w-full">
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtMontserratMedium18Gray90001"
                  >
                    Пароль
                  </Text>
                  <Input
                    name="groupSeventySix"
                    placeholder="Пароль"
                    className="font-medium leading-[normal] p-0 placeholder:text-deep_purple-200 sm:pr-5 text-base text-left w-full"
                    wrapClassName="pl-5 pr-[35px] w-full"
                    color="gray_100"
                    size="sm"
                    variant="underline"
                  ></Input>
                </div>
           
           <Link to="/">
           <Button
                  className="cursor-pointer font-bold font-montserrat leading-[normal] min-w-[509px] sm:min-w-full mt-[47px] rounded-[25px] text-center text-lg"
                  color="green_A700_01"
                  size="md"
                  variant="fill"
                >
                  Войти
                </Button>
           </Link>
                <div className="bg-gray-800 flex flex-col font-montserrat items-center justify-end mt-5 p-[11px] rounded-[25px] w-full">
                  <div className="flex flex-row gap-3 items-center justify-center mt-1 w-auto">
                    <Img
                      className="h-[21px] md:h-auto object-cover w-[21px]"
                      src="images/img_iconfindergoogle1298745.png"
                      alt="iconfindergoogl"
                    />
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtMontserratSemiBold18WhiteA700"
                    >
                      Или войдите с помощю Google
                    </Text>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[5px] mt-[61px] text-base text-black-900 text-center"
                  size="txtRobotoRegular16"
                >
                  <span className="text-gray-700_01 font-montserrat font-medium">
                    У Вас все еще нет аккауна?
                  </span>
                  <span className="text-black-900 font-montserrat font-medium">
                    {" "}
                  </span>
                <Link to="/register">
                <span className="text-orange-300 font-montserrat font-medium">
                    Зарегистрируйтесь бесплатно!
                  </span>
                </Link>
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gray-400 flex md:flex-1 flex-col items-center justify-start w-3/5 md:w-full">
            <div className="bg-gray-400 flex flex-col items-center justify-start w-full">
              <div className="h-[1080px] relative w-full">
                <Img
                  className="h-[1080px] m-auto object-cover w-full"
                  src="images/img_wallingnmqqefhinkyunsplash.png"
                  alt="wallingnmqqefhi"
                />
                <div className="absolute h-[1080px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="h-[1080px] m-auto object-cover w-full"
                    src="images/img_mareklevakehl.png"
                    alt="mareklevakehl"
                  />
                  <div className="absolute bottom-[6%] flex flex-col gap-10 inset-x-[0] items-center justify-start mx-auto w-[88%]">
                    <div className="bg-white-A700 flex flex-col items-start justify-start p-5 rounded-[20px] shadow-bs4 w-auto md:w-full">
                      <Text
                        className="max-w-[800px] md:max-w-full text-black-900 text-xl"
                        size="txtMontserratRegular20"
                      >
                        Worktap — это маркетплейс фриланс услуг, где можно
                        купить услугу как товар в магазине или создать
                        индивидуальный заказ на бирже.{" "}
                      </Text>
                    </div>
                    <Img
                      className="h-8 w-[152px]"
                      src="images/img_frame145.svg"
                      alt="frame145"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default loginPage1;