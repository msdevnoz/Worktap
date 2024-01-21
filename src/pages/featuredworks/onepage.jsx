import React from "react";

import { Button, Img, RatingBar, Text } from "components";
import ColumnFive from "components/ColumnFive";
import ColumnOne1 from "components/ColumnOne1";
import ColumnTwo from "components/ColumnTwo";
import Columnrectanglenineteen from "components/Columnrectanglenineteen";
import Footer from "components/Footer";
import Header from "components/Header";

const featuredWorksPage1 = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-end mx-auto pt-[30px] w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start max-w-[1322px] mx-auto md:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
            <Text
              className="mt-[62px] text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900_01"
              size="txtMontserratSemiBold36Gray90001"
            >
              Избранные ворки
            </Text>
            <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[57px] w-full">
              <Columnrectanglenineteen className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnTwo className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnFive className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs shadow-bs hover:w-full w-full" />
              <ColumnFive className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs shadow-bs hover:w-full w-full" />
              <Columnrectanglenineteen className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnOne1 className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs shadow-bs hover:w-full w-full" />
              <ColumnTwo className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnTwo className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <Columnrectanglenineteen className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnTwo className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <Columnrectanglenineteen className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <Columnrectanglenineteen className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <Columnrectanglenineteen className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnTwo className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnOne1 className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs shadow-bs hover:w-full w-full" />
              <ColumnOne1 className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs shadow-bs hover:w-full w-full" />
              <Columnrectanglenineteen className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <Columnrectanglenineteen className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnTwo className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
              <ColumnTwo className="bg-gray-50 border border-gray-100 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-start pb-5 rounded-[10px] hover:shadow-bs hover:w-full w-full" />
            </div>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[238px] mt-[60px] rounded-[27px] text-center text-lg"
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

export default featuredWorksPage1;
