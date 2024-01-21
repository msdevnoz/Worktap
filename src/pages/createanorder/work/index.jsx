import React from "react";

import {
  Button,
  Img,
  Line,
  List,
  RatingBar,
  SelectBox,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionsList3 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionsList4 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionsList5 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const workPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-end mx-auto pt-[30px] w-full">
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1320px] mx-auto md:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
            <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[58%] md:w-full">
                <div className="border border-gray-100 border-solid flex flex-col gap-[19px] items-start justify-end py-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-[18px] items-start justify-start ml-5 md:ml-[0] w-1/2 md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtMontserratSemiBold24Black900"
                    >
                      Дизайн сайта{" "}
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
                  <div className="h-[426px] relative w-full">
                    <Img
                      className="h-[426px] m-auto object-cover w-full"
                      src="images/img_rectangle37.png"
                      alt="rectangleThirtySeven"
                    />
                    <div className="absolute flex flex-row sm:gap-10 h-max inset-[0] items-center justify-between m-auto w-[95%]">
                      <Button
                        className="flex h-[43px] items-center justify-center rounded-[21px] w-[43px]"
                        color="gray_50"
                        size="md"
                        variant="fill"
                      >
                        <Img src="images/img_arrowleft.svg" alt="arrowleft" />
                      </Button>
                      <Button
                        className="flex h-[43px] items-center justify-center rounded-[21px] w-[43px]"
                        color="gray_50"
                        size="md"
                        variant="fill"
                      >
                        <Img src="images/img_arrowright.svg" alt="arrowright" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] w-[98%] md:w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-auto md:w-full">
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-[10px] w-40 sm:w-full"
                        src="images/img_rectangle38.png"
                        alt="rectangleThirtyEight"
                      />
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-[10px] w-40 sm:w-full"
                        src="images/img_rectangle39.png"
                        alt="rectangleThirtyNine"
                      />
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-[10px] w-40 sm:w-full"
                        src="images/img_rectangle40.png"
                        alt="rectangleForty"
                      />
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-[10px] w-40 sm:w-full"
                        src="images/img_rectangle41.png"
                        alt="rectangleFortyOne"
                      />
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-[9px] w-[18px] sm:w-full"
                        src="images/img_rectangle42.png"
                        alt="rectangleFortyTwo"
                      />
                    </div>
                    <Text
                      className="mt-10 text-base text-black-900 w-[98%] sm:w-full"
                      size="txtMontserratRegular16Black900"
                    >
                      Привет! Раз уж ты открыл этот work, то тебе нужен классный
                      дизайн для твоего сайта. И да, поздравляю, ты по адресу! В
                      UX/UI дизайне я уже 2 года и за это время успел поработать
                      с очень крупными компаниями(КазМунайГаз, КБТУ, Hickmet
                      travel, YLP delivery) и знаменитыми личностями (Ахметбек
                      Нурсила, Артур Кривов). Создал для них очень крутые
                      дизайны сайтов и не только. Хочешь и тебе сделаю? Выбери
                      интересующий пакет и поехали!
                    </Text>
                    <Text
                      className="mt-[41px] text-black-900 text-xl"
                      size="txtMontserratSemiBold20Black900"
                    >
                      Часто задаваемые вопросы
                    </Text>
                    <div className="flex flex-col gap-3 items-start justify-start mt-[17px] w-auto md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-between max-w-[718px] px-2 w-full">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtMontserratMedium18"
                        >
                          Исходники будут?
                        </Text>
                        <Img
                          className="h-2 w-4"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown_One"
                        />
                      </div>
                      <Line className="bg-deep_purple-200 h-px rotate-[-180deg] w-full" />
                      <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between max-w-[718px] px-2 w-full">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtMontserratMedium18"
                        >
                          А в каком формате я получу исходники?
                        </Text>
                        <Img
                          className="h-2 w-4"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown_Two"
                        />
                      </div>
                      <Line className="bg-deep_purple-200 h-px rotate-[-180deg] w-full" />
                      <div className="flex flex-col gap-3 items-start justify-start px-2 w-auto md:w-full">
                        <SelectBox
                          className="font-medium leading-[normal] text-black-900 text-left text-lg w-full"
                          placeholderClassName="text-black-900"
                          indicator={
                            <Img
                              className="h-2 outline-gray-900_01 outline-[1px] outline w-4"
                              src="images/img_arrowdown_gray_900_01_8x16.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame110"
                          options={optionsList}
                          isSearchable={false}
                          placeholder="А что если мне не понравиться дизайн?"
                          size="xs"
                        />
                        <Text
                          className="max-w-[702px] md:max-w-full text-base text-black-900"
                          size="txtMontserratRegular16Black900"
                        >
                          Мы создаем продукт, а не баннер для рекламы. При
                          созданий продукта которыми будут пользоваться люди в
                          первую очередь нужно обратить внимание на удобство.
                          Это не значит что дизайн будет уродским, нет он будет
                          приятен глазу и будет подходит тематике сайта.
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="mt-10 text-black-900 text-xl"
                      size="txtMontserratSemiBold20Black900"
                    >
                      Требоввания к заказчику
                    </Text>
                    <Text
                      className="mt-[18px] text-base text-black-900"
                      size="txtMontserratRegular16Black900"
                    >
                      <>
                        Предоставить Техническое задание где есть текста для
                        сайта и все необходимые медиа(фото, видео и т.п.)
                        <br />
                        Требование 2
                      </>
                    </Text>
                  </div>
                </div>
                <Text
                  className="mt-[39px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.48px]"
                  size="txtMontserratSemiBold24Black900"
                >
                  Отзывы
                </Text>
                <div className="flex sm:flex-col flex-row gap-10 items-start justify-start mt-[19px] w-auto sm:w-full">
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
                <div className="flex flex-col gap-5 items-center justify-center mt-10 w-auto md:w-full">
                  <List
                    className="flex flex-col gap-5 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="bg-gray-50 border border-gray-100 border-solid flex md:flex-1 flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-auto md:w-full">
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
                        className="max-w-[718px] md:max-w-full text-black-900 text-sm"
                        size="txtMontserratRegular14Black900"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Tellus tincidunt eget eu, eget commodo condimentum non,
                        fringilla fermentum. Morbi sed enim facilisis metus
                        pretium leo, mauris. In egestas cursus orci dignissim in
                        lectus nulla.{" "}
                      </Text>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 border-solid flex md:flex-1 flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-auto md:w-full">
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
                        className="max-w-[718px] md:max-w-full text-black-900 text-sm"
                        size="txtMontserratRegular14Black900"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Tellus tincidunt eget eu, eget commodo condimentum non,
                        fringilla fermentum. Morbi sed enim facilisis metus
                        pretium leo, mauris. In egestas cursus orci dignissim in
                        lectus nulla.{" "}
                      </Text>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 border-solid flex md:flex-1 flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-auto md:w-full">
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
                        className="max-w-[718px] md:max-w-full text-black-900 text-sm"
                        size="txtMontserratRegular14Black900"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Tellus tincidunt eget eu, eget commodo condimentum non,
                        fringilla fermentum. Morbi sed enim facilisis metus
                        pretium leo, mauris. In egestas cursus orci dignissim in
                        lectus nulla.{" "}
                      </Text>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 border-solid flex md:flex-1 flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-auto md:w-full">
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
                        className="max-w-[718px] md:max-w-full text-black-900 text-sm"
                        size="txtMontserratRegular14Black900"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Tellus tincidunt eget eu, eget commodo condimentum non,
                        fringilla fermentum. Morbi sed enim facilisis metus
                        pretium leo, mauris. In egestas cursus orci dignissim in
                        lectus nulla.{" "}
                      </Text>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 border-solid flex md:flex-1 flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-auto md:w-full">
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
                        className="max-w-[718px] md:max-w-full text-black-900 text-sm"
                        size="txtMontserratRegular14Black900"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Tellus tincidunt eget eu, eget commodo condimentum non,
                        fringilla fermentum. Morbi sed enim facilisis metus
                        pretium leo, mauris. In egestas cursus orci dignissim in
                        lectus nulla.{" "}
                      </Text>
                    </div>
                  </List>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[238px] rounded-[27px] text-center text-lg"
                    color="green_A700"
                    size="lg"
                    variant="outline"
                  >
                    Загрузить еще
                  </Button>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-5 items-start justify-start md:mt-0 mt-[106px] w-auto sm:w-full">
                <div className="bg-gray-100 border border-gray-100 border-solid flex flex-col gap-5 items-start justify-start p-5 rounded-[20px] w-auto sm:w-full">
                  <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                    <SelectBox
                      className="font-semibold leading-[normal] text-black-900 text-left text-xl w-full"
                      placeholderClassName="text-black-900"
                      indicator={
                        <Img
                          className="h-2 outline-gray-900_01 outline-[1px] outline w-4"
                          src="images/img_arrowdown_gray_900_01_8x16.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="language_One"
                      options={languageOneOptionsList}
                      isSearchable={false}
                      placeholder="Эконом пакет "
                    />
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900 w-full"
                          size="txtMontserratRegular16Black900"
                        >
                          Дизайн лэндинга с мобильной и компьютерной версией
                          дизайна.
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-[19px] w-[492px] sm:w-full">
                          <Text
                            className="text-green-A700 text-xl w-auto"
                            size="txtMontserratSemiBold20GreenA700"
                          >
                            50 000 ТГ
                          </Text>
                          <Text
                            className="text-blue_gray-600 text-lg w-auto"
                            size="txtMontserratMedium18Bluegray600"
                          >
                            Сделаю за 5 дней
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start mt-[19px] w-auto">
                          <Text
                            className="text-gray-900_01 text-lg w-auto"
                            size="txtMontserratMedium18Gray90001"
                          >
                            Количество доработок: 5
                          </Text>
                          <Text
                            className="text-gray-900_01 text-lg w-auto"
                            size="txtMontserratMedium18Gray90001"
                          >
                            Переменная 1: Значение 1
                          </Text>
                          <Text
                            className="text-gray-900_01 text-lg w-auto"
                            size="txtMontserratMedium18Gray90001"
                          >
                            Переменная 2: Значение 2
                          </Text>
                        </div>
                        <Text
                          className="mt-[50px] text-black-900 text-xl w-auto"
                          size="txtMontserratSemiBold20Black900"
                        >
                          Дополнительные опции
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-[492px] sm:w-full">
                    <SelectBox
                      className="font-medium leading-[normal] text-left text-lg w-full"
                      placeholderClassName="text-black-900"
                      indicator={
                        <Img
                          className="h-2 mr-[0] outline-gray-900_01 outline-[1px] outline w-4"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="group111"
                      options={optionsList1}
                      isSearchable={false}
                      placeholder="Планшетная версия"
                      color="deep_purple_200"
                      size="xs"
                      variant="underline"
                    />
                    <SelectBox
                      className="font-medium leading-[normal] text-left text-lg w-full"
                      placeholderClassName="text-black-900"
                      indicator={
                        <Img
                          className="h-2 mr-[0] outline-gray-900_01 outline-[1px] outline w-4"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="group112"
                      options={optionsList2}
                      isSearchable={false}
                      placeholder="Перенести в фотошоп"
                      color="deep_purple_200"
                      size="xs"
                      variant="underline"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-[492px] sm:w-full">
                      <SelectBox
                        className="font-medium leading-[normal] text-black-900 text-left text-lg w-full"
                        placeholderClassName="text-black-900"
                        indicator={
                          <Img
                            className="h-2 outline-gray-900_01 outline-[1px] outline w-4"
                            src="images/img_arrowdown_gray_900_01_8x16.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="frame110_One"
                        options={optionsList3}
                        isSearchable={false}
                        placeholder="Подготовка к верстке"
                        size="xs"
                      />
                      <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtMontserratRegular16Black900"
                          >
                            <span className="text-black-900 font-montserrat text-left font-normal">
                              <>
                                Настройка всех слоев и назвать так чтобы было
                                понятно верстальщику. Цена за 1 страницу
                                <br />
                                <br />
                              </>
                            </span>
                            <span className="text-black-900 font-montserrat text-left font-medium">
                              <>
                                Срок выполнения: 1 день
                                <br />
                                Цена: 5000 тенге
                              </>
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] rounded-[22px] text-base text-center w-[492px]"
                      color="green_A700"
                      size="md"
                      variant="outline"
                    >
                      Добавить к заказу
                    </Button>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] rounded-[22px] text-base text-center w-[492px]"
                    color="green_A700"
                    size="md"
                    variant="fill"
                  >
                    Купить за 50 000 тенге
                  </Button>
                </div>
                <SelectBox
                  className="!text-black-900 font-semibold leading-[normal] text-left text-xl w-full"
                  placeholderClassName="!text-black-900"
                  indicator={
                    <Img
                      className="h-2 outline-gray-900_01 outline-[1px] outline w-4"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame104"
                  options={optionsList4}
                  isSearchable={false}
                  placeholder="Стандартный пакет"
                  shape="round"
                  color="gray_100"
                  size="md"
                  variant="outline"
                />
                <SelectBox
                  className="!text-black-900 font-semibold leading-[normal] text-left text-xl w-full"
                  placeholderClassName="!text-black-900"
                  indicator={
                    <Img
                      className="h-2 outline-gray-900_01 outline-[1px] outline w-4"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame106"
                  options={optionsList5}
                  isSearchable={false}
                  placeholder="Премиум пакет"
                  shape="round"
                  color="gray_100"
                  size="md"
                  variant="outline"
                />
                <div className="border border-gray-100 border-solid flex flex-col items-start justify-start p-5 rounded-[20px] w-full">
                  <div className="flex flex-col items-center justify-start w-4/5 md:w-full">
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
                          Закрыто сделок: 25
                        </Text>
                        <div className="flex flex-row gap-[23px] items-center justify-between w-full">
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
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto sm:w-full">
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[140px] text-center text-sm"
                      shape="round"
                      color="gray_100"
                      size="sm"
                      variant="outline"
                    >
                      Дизайн сайта
                    </Button>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[126px] text-center text-sm"
                      shape="round"
                      color="gray_100"
                      size="sm"
                      variant="outline"
                    >
                      Веб дизайн
                    </Button>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[138px] text-center text-sm"
                      shape="round"
                      color="gray_100"
                      size="sm"
                      variant="outline"
                    >
                      UX/UI дизайн
                    </Button>
                  </div>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[130px] text-center text-sm"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    variant="outline"
                  >
                    Web дизайн{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-100 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default workPage;
