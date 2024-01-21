import React from "react";

import { Button, Img, Radio, RadioGroup, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const historyOrderPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-end mx-auto pt-[30px] w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start max-w-[1320px] mx-auto md:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
            <Text
              className="mt-16 text-4xl sm:text-[32px] md:text-[34px] text-gray-900_01"
              size="txtMontserratSemiBold36Gray90001"
            >
              <span className="text-gray-900_01 font-montserrat text-left font-semibold">
                История{" "}
              </span>
              <span className="text-orange-300 font-montserrat text-left font-semibold">
                покупок
              </span>
            </Text>
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mt-[55px] w-full">
              <Text
                className="mb-1 md:mt-0 mt-[7px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[0.48px]"
                size="txtMontserratSemiBold24"
              >
                Всего 65 сделок
              </Text>
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-[15px] items-center justify-center md:ml-[0] ml-[198px] md:mt-0 my-2 w-auto sm:w-full">
                <Text
                  className="text-black-900 text-lg w-auto"
                  size="txtMontserratSemiBold18Black900"
                >
                  Показать только:
                </Text>
                <RadioGroup className="flex w-[64%]" name="radiogrouplabel">
                  <Radio
                    value=""
                    className="font-medium leading-[normal] text-black-900 text-left text-lg"
                    inputClassName="border-2 border-deep_purple-200 border-solid h-6 mr-[5px] w-6"
                    checked={false}
                    name="radiogrouplabel"
                    label=""
                  ></Radio>
                  <Radio
                    value="undefined1"
                    className="font-medium leading-[normal] ml-[15px] text-black-900 text-left text-lg"
                    inputClassName="border-2 border-deep_purple-200 border-solid h-6 mr-[5px] w-6"
                    checked={false}
                    name="radiogrouplabel"
                    label="undefined1"
                    id="undefined1"
                  ></Radio>
                </RadioGroup>
              </div>
              <SelectBox
                className="md:flex-1 font-semibold leading-[normal] ml-32 md:ml-[0] rounded-[21px] text-left text-lg w-[22%] md:w-full"
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
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[238px] mt-[2313px] rounded-[27px] text-center text-lg"
              color="green_A700"
              size="lg"
              variant="outline"
            >
              Загрузить еще
            </Button>
          </div>
          <Footer className="bg-gray-100 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default historyOrderPage;
