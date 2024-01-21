import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import { Link } from "react-router-dom";

const howItWorksPage = () => {
  const sideBarMenu = [
    {
      label: (
      <Link to='/'>
        <Img
          className="h-[13px] w-3.5"
          src="images/img_user_blue_gray_900.svg"
          alt="user"
        />
      </Link>
      ),
    },
    {
      label: (
        <Img className="h-[51px]" src="images/img_close.svg" alt="close" />
      ),
    },
    {
      label: (
        <Img className="h-[22px]" src="images/img_offer.svg" alt="offer" />
      ),
    },
    {
      label: (
        <Img
          className="h-[9px]"
          src="images/img_user_blue_gray_900_9x7.svg"
          alt="user_One"
        />
      ),
    },
  ];
  const sideBarMenu1 = [
    {
      label: (
        <Img
          className="h-[60px]"
          src="images/img_airplane.svg"
          alt="airplane"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-[51px]"
          src="images/img_vector_blue_gray_900.svg"
          alt="vector_Twelve"
        />
      ),
    },
    {
      label: (
        <Img className="h-2.5" src="images/img_contrast.svg" alt="contrast" />
      ),
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto p-5 w-full">
        <div className="flex flex-col justify-start mb-5 mx-auto md:px-5 w-full">
          <Img
            className="h-5 md:ml-[0] ml-[1204px] w-5"
            src="images/img_mobilecancelmajor.svg"
            alt="mobilecancelmaj"
          />
          <Text
            className="md:ml-[0] ml-[493px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[0.48px]"
            size="txtMontserratSemiBold24Black900"
          >
            Как это работает
          </Text>
          <div className="flex md:flex-col flex-row gap-5 items-start justify-between mr-4 mt-[121px] w-[99%] md:w-full">
            <Sidebar
              className="!sticky !w-[280px] bg-cover bg-no-repeat flex h-screen md:hidden justify-start overflow-auto top-[0]"
              style={{ backgroundImage: "url('images/img_frame118.svg')" }}
            >
              <div className="h-[117px] md:h-[87px] mr-[157px] relative w-[44%]">
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[2%] flex flex-col h-[103px] inset-x-[0] items-end justify-end mx-auto pt-1.5 px-1.5 w-[103px]"
                  style={{ backgroundImage: "url('images/img_frame118.svg')" }}
                >
                  <div className="bg-green-A700 h-[25px] md:h-[81px] mt-[71px] p-[7px] relative rounded-[12px] w-[25px]">
                    <Img
                      className="h-px ml-auto mr-[3px] mt-[3px] w-px"
                      src="images/img_vector_white_a700.svg"
                      alt="vector"
                    />
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto pr-[7px] pt-[7px] w-[11px]"
                      style={{
                        backgroundImage: "url('images/img_group16.svg')",
                      }}
                    >
                      <Img
                        className="h-[3px] w-[3px]"
                        src="images/img_vector_white_a700_3x3.svg"
                        alt="vector_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-green-A700 flex flex-col h-[25px] inset-x-[0] items-center justify-start mx-auto p-[5px] rounded-[12px] top-[0] w-[25px]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-3.5 items-end justify-start pb-1.5 pl-1.5 w-[74%] md:w-full"
                    style={{ backgroundImage: "url('images/img_group17.svg')" }}
                  >
                    <Img
                      className="h-1 mb-[3px] w-1"
                      src="images/img_vector_white_a700_4x4.svg"
                      alt="vector_Two"
                    />
                  </div>
                </div>
                <div className="absolute flex flex-row inset-x-[0] items-center justify-between mx-auto top-[30%] w-full">
                  <div className="bg-green-A700 md:h-2 h-[25px] p-1.5 relative rounded-[12px] w-[25px]">
                    <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[24%] my-auto w-2.5">
                      <div className="md:h-1 h-[5px] relative w-full">
                        <Img
                          className="absolute h-1 right-[0] top-[0]"
                          src="images/img_vector_white_a700_4x2.svg"
                          alt="vector_Three"
                        />
                        <Img
                          className="absolute bottom-[0] h-1 left-[0]"
                          src="images/img_vector_white_a700_4x10.svg"
                          alt="vector_Four"
                        />
                      </div>
                      <Img
                        className="h-1 ml-0.5 md:ml-[0]"
                        src="images/img_vector_4x2.svg"
                        alt="vector_Five"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[36%] h-1 right-[24%]"
                      src="images/img_vector_4x10.svg"
                      alt="vector_Six"
                    />
                  </div>
                  <div className="bg-green-A700 h-[25px] md:h-[7px] p-1.5 relative rounded-[12px] w-[25px]">
                    <Img
                      className="absolute bottom-[24%] h-[7px] left-[24%] w-[7px]"
                      src="images/img_edit.svg"
                      alt="edit"
                    />
                    <Img
                      className="absolute h-1.5 right-[24%] top-[24%]"
                      src="images/img_maximize_white_a700.svg"
                      alt="maximize"
                    />
                  </div>
                </div>
                <div className="absolute bg-green-A700 bottom-[0] flex flex-row h-[25px] items-start justify-center left-[15%] p-[5px] rounded-[12px] w-[25px]">
                  <Img
                    className="h-[5px] mt-2"
                    src="images/img_vector_white_a700_5x2.svg"
                    alt="vector_Seven"
                  />
                  <Img
                    className="h-3.5"
                    src="images/img_vector_white_a700_14x2.svg"
                    alt="vector_Eight"
                  />
                  <Img
                    className="h-2 mt-[5px]"
                    src="images/img_vector_white_a700_5x2.svg"
                    alt="vector_Nine"
                  />
                  <Img
                    className="h-[11px] mt-0.5"
                    src="images/img_vector_white_a700_5x2.svg"
                    alt="vector_Ten"
                  />
                </div>
              </div>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    flexDirection: "column",
                    paddingLeft: "42px",
                    paddingRight: "42px",
                    [`&:hover, &.ps-active`]: { color: "#e2abab" },
                  },
                }}
                className="flex flex-col items-center justify-start pb-2.5 sm:pr-5 pr-9 w-full"
              >
                <div className="flex flex-col gap-[-7.26px] items-center justify-start w-full">
                  {sideBarMenu?.map((menu, i) => (
                    <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </div>
                <div className="flex flex-col md:gap-10 gap-[81px] items-center justify-start w-full">
                  <MenuItem>
                    <div className="flex items-end justify-start md:px-10 sm:px-5">
                      <Img
                        className="h-[15px] text-deep_orange-100_01"
                        src="images/img_user_red_200.svg"
                        alt="user_Two"
                      />
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="flex items-end justify-start md:px-10 sm:px-5">
                      <Img
                        className="h-2"
                        src="images/img_television.svg"
                        alt="television"
                      />
                    </div>
                  </MenuItem>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <MenuItem>
                    <div className="flex items-end justify-start md:px-10 sm:px-5">
                      <Img
                        className="h-[7px] w-1.5"
                        src="images/img_vector.svg"
                        alt="vector_Eleven"
                      />
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="flex items-end justify-start md:px-10 sm:px-5">
                      <Img
                        className="h-[42px]"
                        src="images/img_user_blue_gray_900_42x9.svg"
                        alt="user_Three"
                      />
                    </div>
                  </MenuItem>
                </div>
                <div className="flex flex-col gap-[3.37px] items-center justify-start w-full">
                  {sideBarMenu1?.map((menu, i) => (
                    <MenuItem key={`sideBarMenu1Item${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </div>
                <Img
                  className="h-px"
                  src="images/img_signal.svg"
                  alt="signal"
                />
                <Img
                  className="h-px"
                  src="images/img_vector_deep_purple_100.svg"
                  alt="vector_Thirteen"
                />
                <div className="bg-deep_orange-100_01 h-px rounded-md w-full"></div>
                <Img
                  className="h-px"
                  src="images/img_vector_deep_orange_100_01.svg"
                  alt="vector_Fifteen"
                />
              </Menu>
              <Text
                className="mt-[21px] text-black-900 text-lg w-full"
                size="txtMontserratSemiBold18Black900"
              >
                <> Укажите вид работы и категорию</>
              </Text>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-[21.82px] items-start justify-start w-full">
              <Img
                className="h-[168px] w-[225px]"
                src="images/img_money_1_1.svg"
                alt="undrawupdatedre"
              />
              <Text
                className="text-black-900 text-lg w-auto"
                size="txtMontserratSemiBold18Black900"
              >
                <>Выберите специалиста</>
              </Text>
              <Text
                className="max-w-[279px] md:max-w-full text-base text-black-900"
                size="txtMontserratRegular16Black900"
              >
                <>
                  Каждый специалист перед началом работы проходит тщательную
                  проверку, имеет рейтинг иотзывы предыдущих заказчиков.
                </>
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-[21.82px] items-start justify-start w-full">
              <Img
                className="h-[168px] w-[280px]"
                src="images/img_money_1_1.svg"
                alt="undrawpayonline"
              />
              <Text
                className="text-black-900 text-lg w-40"
                size="txtMontserratSemiBold18Black900"
              >
                <>Оплатите услугу</>
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-[21.82px] items-start justify-start w-full">
              <Img
                className="h-[168px] w-[307px]"
                src="images/img_money_1_1.svg"
                alt="undrawteacherThirtyFive"
              />
              <Text
                className="max-w-[278px] md:max-w-full text-black-900 text-lg"
                size="txtMontserratSemiBold18Black900"
              >
                <>Cпециалист выполняет работу</>
              </Text>
              <Text
                className="max-w-[308px] md:max-w-full text-base text-black-900"
                size="txtMontserratRegular16Black900"
              >
                <>
                  После выполнения заказа у вас будет возможность поставить
                  специалисту оценку и написатьотзыв.
                </>
              </Text>
            </div>
          </div>
       <Link to='/'>
       <Button
            className="border border-green-A700 border-solid cursor-pointer font-medium leading-[normal] min-w-[380px] sm:min-w-full md:ml-[0] ml-[414px] mr-[430px] mt-[111px] rounded-[20px] text-center text-sm"
            shape="round"
            color="green_A700"
            size="sm"
            variant="fill"
          >
            Понятно
          </Button>
       </Link>
        </div>
      </div>
    </>
  );
};

export default howItWorksPage;
