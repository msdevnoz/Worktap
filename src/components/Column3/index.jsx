import React from "react";

import { Img, Text } from "components";

const Column3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
          <Img
            className="h-[70px] w-[70px]"
            src="images/img_circleplusmajor_green_a700.svg"
            alt="circleplusmajor"
          />
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-green-A700"
            size="txtMontserratSemiBold30"
          >
            {props?.fivehundredtext}
          </Text>
        </div>
      </div>
    </>
  );
};

Column3.defaultProps = { fivehundredtext: "Создать ворк" };

export default Column3;
