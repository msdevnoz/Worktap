import React from "react";
import { Img, Text } from "components";
import { Link } from "react-router-dom";
const Header = (props) => {
  

 
  return (
    <>
      <header className={props.className}>
      <Img
          className="h-10 md:h-auto md:mt-0 my-5 object-cover"
          src="images/img_worktap1.png"
          alt="worktapOne"
        />
        <ul className="flex sm:flex-col flex-row gap-10 sm:hidden items-start justify-start md:ml-[0] ml-[60px] md:mt-0 my-[29px] w-auto sm:w-full common-row-list">
        <li>
          <Link to="/">
        <Text
              className="text-base text-black-900 hover:text-gray-900_01"
              size="txtMontserratMedium16Black900"
            >
              Главная
            </Text>
        </Link>
          </li>
          <li>
          <Link to="/exchangePage1">
              <Text
                className="text-base text-black-900"
                size="txtMontserratMedium16Black900"
              >
                Биржа
              </Text>
            </Link>
          </li>

          <li>
            <Link to="/WorkPage">
              <Text
                className="text-base text-black-900"
                size="txtMontserratMedium16Black900"
              >
                Ворки
              </Text>
            </Link>
          </li>
          <li>
            <Text className="text-base text-black-900" size="txtMontserratMedium16Black900">Конкурсы
            </Text>
          </li>
          <li>
          <Link to="/orderCreatorPage">
          <Text
              className="text-base text-black-900"size="txtMontserratMedium16Black900"> Создать заказ
            </Text>
          </Link>
          </li>
        </ul>
       <Link to="/featuredWorksPage1">
       <Img
          className="h-6 ml-40 md:ml-[0] md:mt-0 my-7 w-6" src="images/img_favoritemajor1.svg" alt="favoritemajorOne"/>
       </Link>
        <Img
          className="h-6 ml-8 md:ml-[0] md:mt-0 my-7 w-6"src="images/img_notificationmajor.svg" alt="notificationmaj"/>
        <Img
          className="h-6 ml-8 md:ml-[0] md:mt-0 my-7 w-6"src="images/img_user_deep_purple_200.svg" alt="user"/>
        <div
          className="common-pointer flex flex-row gap-4 items-center justify-between md:ml-[0] ml-[46px] w-[23%] md:w-full"
        >
         <Link to="/profilePage1">
         <Text className="text-base text-gray-900_01"size="txtMontserratSemiBold16Gray90001">
          Ернар Ибрагимов
          </Text>
         </Link>
        
         <Img
            className="h-20 md:h-auto rounded-[50%] w-20"
            src="images/img_ellipse59.png"
            alt="ellipseFiftyNine"
          />
          <Img
            className="h-6 w-6"
            src="images/img_arrowdown_gray_900_01.svg"
            alt="arrowdown"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
