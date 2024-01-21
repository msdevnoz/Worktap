import React from "react";

import { Line, Text } from "components";

const ThreeInput = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-gray-900_01 text-lg"
          size="txtMontserratMedium18Gray90001"
        >
          {props?.questiontext}
        </Text>
        <div className="flex flex-col gap-2 justify-start w-full">
          {!!props?.placeholdertext ? (
            <Text
              className="ml-5 md:ml-[0] text-base text-deep_purple-200"
              size="txtMontserratMedium16Deeppurple200"
            >
              {props?.placeholdertext}
            </Text>
          ) : null}
          {!!props?.rectangletwentynineOne ? (
            <Line className="bg-gray-100 h-px rounded-[1px] w-full" />
          ) : null}
        </div>
      </div>
    </>
  );
};

ThreeInput.defaultProps = { questiontext: "Вопрос" };

export default ThreeInput;
