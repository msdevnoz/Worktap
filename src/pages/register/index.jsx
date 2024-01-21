import React from "react";
import { Link } from "react-router-dom";

import { Button, Img, Input, Line,Text } from "components";

const register = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[300px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1620px] mx-auto w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start md:mt-0 mt-5 w-[32%] md:w-full">
            <Img
               className="h-10 md:h-auto md:mt-0 my-5 object-cover"
               src="images/img_worktap1.png"
               alt="worktapOne"
            />
            <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <Text
                  className="text-base text-gray-800 w-auto"
                  size="txtMontserratRegular16Bluegray90001"
                >
                  Давайте создадим Вам аккаунт
                </Text>
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-auto"
                  size="txtMontserratBold30"
                >
                  Заполните все поля
                </Text>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Text
                  className="text-gray-900_01 text-lg"
                  size="txtMontserratMedium18Gray90001"
                >
                  Ваше имя
                </Text>
                <div className="flex flex-col gap-2 justify-start w-full">
                  <Text
                    className="ml-5 md:ml-[0] text-base text-deep_purple-200"
                    size="txtMontserratMedium16Deeppurple200"
                  >
                         <Input
                  name="groupSeventySix"
                  placeholder="Имя"
                  className="font-medium leading-[normal] p-0 placeholder:text-deep_purple-200 sm:pr-5 text-base text-left w-full"
                  wrapClassName="pl-5 pr-[35px] w-full"
                  color="gray_100"
                  size="sm"
                  variant="underline"
                ></Input>
                  
                  </Text>
                  <Line className="bg-gray-100 h-px rounded-[1px] w-full" />
                </div>
              </div>
              <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                <Text
                  className="text-gray-900_01 text-lg"
                  size="txtMontserratMedium18Gray90001"
                >
                  Ваше фамилия
                </Text>
                <Input
                  name="groupSeventySix"
                  placeholder="Фамилия"
                  className="font-medium leading-[normal] p-0 placeholder:text-deep_purple-200 sm:pr-5 text-base text-left w-full"
                  wrapClassName="pl-5 pr-[35px] w-full"
                  color="gray_100"
                  size="sm"
                  variant="underline"
                ></Input>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Text
                  className="text-gray-900_01 text-lg"
                  size="txtMontserratMedium18Gray90001"
                >
                  E-mail
                </Text>
                <Input
                  name="groupSeventySix_One"
                  placeholder="E-mail"
                  className="font-medium leading-[normal] p-0 placeholder:text-deep_purple-200 sm:pr-5 text-base text-left w-full"
                  wrapClassName="pl-5 pr-[35px] w-full"
                  type="email"
                  color="gray_100"
                  size="sm"
                  variant="underline"
                ></Input>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Text
                  className="text-gray-900_01 text-lg"
                  size="txtMontserratMedium18Gray90001"
                >
                  Телефон номер
                </Text>
                <Input
                  name="groupSeventySix_Two"
                  placeholder="Телефон"
                  className="font-medium leading-[normal] p-0 placeholder:text-deep_purple-200 sm:pr-5 text-base text-left w-full"
                  wrapClassName="pl-5 pr-[35px] w-full"
                  color="gray_100"
                  size="sm"
                  variant="underline"
                ></Input>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Text
                  className="text-gray-900_01 text-lg"
                  size="txtMontserratMedium18Gray90001"
                >
                  Пароль
                </Text>
                <Input
                  name="groupSeventySix_Three"
                  placeholder="Пароль"
                  className="font-medium leading-[normal] p-0 placeholder:text-deep_purple-200 sm:pr-5 text-base text-left w-full"
                  wrapClassName="pl-5 pr-[35px] w-full"
                  color="gray_100"
                  size="sm"
                  variant="underline"
                ></Input>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Text
                  className="text-gray-900_01 text-lg"
                  size="txtMontserratMedium18Gray90001"
                >
                  Повтарите пароль
                </Text>
                <Input
                  name="groupSeventySix_Four"
                  placeholder="Пароль"
                  className="font-medium leading-[normal] p-0 placeholder:text-deep_purple-200 sm:pr-5 text-base text-left w-full"
                  wrapClassName="pl-5 pr-[35px] w-full"
                  color="gray_100"
                  size="sm"
                  variant="underline"
                ></Input>
              </div>
         
              <div className="flex flex-col gap-5 items-center justify-center w-auto sm:w-full">
            <Link to="/loginPage1">
            <Button
                  className="cursor-pointer font-bold font-montserrat leading-[normal] min-w-[509px] sm:min-w-full rounded-[25px] text-center text-lg"
                  color="green_A700_01"
                  size="md"
                  variant="fill"
                >
                  Зарегестрироваться
                </Button>
            </Link>
                <Text
                  className="text-base text-black-900 text-center w-auto"
                  size="txtRobotoRegular16"
                >
                  <span className="text-gray-700_01 font-montserrat font-medium">
                    У Вас есть аккаунт?
                  </span>
                  <span className="text-black-900 font-montserrat font-medium">
                    {" "}
                  </span>
               <Link to="/loginPage1">
               <span className="text-orange-300 font-montserrat font-medium">
                    Войдите
                  </span>
               </Link>
                </Text>
              </div>
            </div>
          </div>
          <div className="h-[1080px] relative w-3/5 md:w-full">
            <div className="bg-gray-400 flex flex-col h-full items-center justify-end m-auto p-[60px] md:px-10 sm:px-5 w-full">
              <Img
                className="h-8 mt-[928px] object-cover w-full"
                src="images/img_group102.svg"
                alt="group102"
              />
            </div>
            <div className="absolute bg-gray-400 flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
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
      </div>
    </>
  );
};

export default register;
