import React from "react";
import { Img, List, SelectBox, Text } from "components";
import Column4 from "components/Column4";
import Column5 from "components/Column5";
import Footer from "components/Footer";
import Header from "components/Header";

const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const myOrderPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-end mx-auto pt-[30px] w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start max-w-[1320px] mx-auto md:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
            <Text
              className="mt-[60px] text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900_01"
              size="txtMontserratSemiBold36Gray90001"
            >
              <span className="text-gray-900_01 font-montserrat font-semibold">
                Мои{" "}
              </span>
              <span className="text-orange-300 font-montserrat font-semibold">
                заказы
              </span>
            </Text>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[59px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[0.48px]"
                size="txtMontserratSemiBold24"
              >
                Всего 10 заявок
              </Text>
              <SelectBox
                className="sm:flex-1 font-semibold leading-[normal] rounded-[21px] text-left text-lg w-[22%] sm:w-full"
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
              className="flex flex-col gap-[30px] items-center mt-[53px] w-full"
              orientation="vertical"
            >
              <Column4 className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-end p-[18px] rounded-[20px] w-full" />
              <Column5 className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-end p-[18px] rounded-[20px] w-full" />
              <Column5
                className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-end p-[18px] rounded-[20px] w-full"
                statustext="Закрыт"
              />
              <Column5 className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-end p-[18px] rounded-[20px] w-full" />
              <Column4
                className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-end p-[18px] rounded-[20px] w-full"
                bettext="Завершено"
              />
              <Column5 className="bg-gray-50 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-end p-[18px] rounded-[20px] w-full" />
            </List>
          </div>
          <Footer className="bg-gray-100 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default myOrderPage;