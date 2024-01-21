import React from "react";
import { Link } from "react-router-dom";
import { Img, Text } from "components";

const weAbout = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto pt-5 w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[603px] md:px-5 w-[52%] md:w-full">
            <Text
              className="mt-[19px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.48px]"
              size="txtMontserratSemiBold24Black900"
            >
              О нас
            </Text>
          <Link to="/">
          <Img
              className="h-5 w-5"
              src="images/img_mobilecancelmajor.svg"
              alt="mobilecancelmaj"
            />
          </Link>
          </div>
          <Text
            className="md:ml-[0] ml-[60px] mt-[19px] text-black-900 text-sm w-[91%] sm:w-full"
            size="txtMontserratRegular14Black900"
          >
            WorkTap - онлайн сервис поиска частных специалистов для решения
            бизнес задач в кратчайшие сроки. Наша платформа объединяет
            заказчиков услуг, которым необходимо выполнить какую-либо работу, и
            компетентных специалистов, ищущих подработку или дополнительный
            заработок.
          </Text>
          <Img
            className="h-[537px] sm:h-auto mt-[59px] object-cover w-full"
            src="images/img_rectangle44.png"
            alt="rectangleFortyFour"
          />
        </div>
      </div>
    </>
  );
};

export default weAbout;
