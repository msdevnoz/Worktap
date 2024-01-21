import React from "react";
import { Link } from "react-router-dom";
import { Button, Img, Text } from "components";

const search = () => {
  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-montserrat items-start justify-start mx-auto p-[30px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1462px] mb-[264px] mx-auto md:px-5 w-full">
          <div className="bg-orange-50 h-[191px] mb-[284px] md:mt-0 mt-[281px] rounded-[95px] w-[191px]"></div>
          <div className="flex flex-col items-center justify-start">
            <div className="bg-orange-50 h-[75px] rounded-[37px] w-[75px]"></div>
            <div className="flex flex-row gap-2.5 items-center justify-start mt-[60px] w-auto">
              <Img
                className="h-5 w-5"
                src="images/img_mobilecancelmajor_gray_900_01.svg"
                alt="mobilecancelmaj"
              />
           <Link to="/profilePage1">
           <Text
                className="text-gray-900_01 text-lg w-auto"
                size="txtMontserratMedium18Gray90001"
              >
                Закрыть быстрый поиск
              </Text>
           </Link>
            </div>
            <div className="bg-teal-50 h-[103px] mt-[3px] rounded-[51px] w-[103px]"></div>
            <Text
              className="mt-3.5 text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900_01 w-[93%] sm:w-full"
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
            <div className="bg-gray-100 flex flex-row sm:gap-10 items-center justify-between mt-[60px] pl-5 rounded-[30px] w-[57%] md:w-full">
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
            <div className="flex md:flex-col flex-row gap-5 items-start justify-start mt-10 w-auto md:w-full">
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
            <div className="flex md:flex-col flex-row gap-5 items-start justify-start mt-5 w-auto md:w-full">
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
            <div className="flex flex-row md:gap-10 items-center justify-between mt-20 w-[91%] md:w-full">
              <div className="bg-teal-50 h-[57px] rounded-[28px] w-[57px]"></div>
              <div className="bg-orange-50 h-[57px] rounded-[28px] w-[57px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default search;
