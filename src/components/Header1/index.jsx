import React from "react";
import { Button, Img, Text } from "components";
import { Link } from "react-router-dom";

const Header1 = (props) => {

  return (
    <>
      <header className={props.className}>
     <Img
          className="h-10 md:h-auto md:mt-0 my-5 object-cover"
          src="images/img_worktap1.png"
          alt="worktapOne"
        />
        <ul
          className="common-pointer flex sm:flex-col flex-row gap-10 sm:hidden items-start justify-start md:ml-[0] ml-[60px] md:mt-0 my-[29px] w-auto sm:w-full common-row-list"
     
        >
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
        <Link to="/ExchangePage1">
        <Text
              className="text-base text-black-900 hover:text-gray-900_01"
              size="txtMontserratMedium16Black900"
            >
              Биржа
            </Text>
        </Link>
          </li>
    
          <li>
       <Link to="/WorkPage">
       <Text
              className="text-base text-gray-900_01"
              size="txtMontserratMedium16Gray90001"
            >
              Ворки
            </Text>
       </Link>
          </li>
          <li>
            <Text
              className="text-base text-black-900 hover:text-gray-900_01"
              size="txtMontserratMedium16Black900"
            >
              Конкурсы
            </Text>
          </li>
          <li>
    <Link to="/PostOrderPage">
    <Text
           className="text-base text-gray-900_01"
              size="txtMontserratMedium16Gray90001"
            >
              Создать ворк
            </Text>
    </Link>
          </li>
          <li>
       <Link to="/CreaturesOfWorkPage1">
       <Text
              className="text-base text-black-900 hover:text-gray-900_01"
              size="txtMontserratMedium16Black900"
            >
              Создать заказ
            </Text>
       </Link>
          </li>
        </ul>
    <Link to="/Register">
    <Button
          className="!text-green-A700 cursor-pointer font-montserrat font-semibold leading-[normal] min-w-[171px] md:ml-[0] ml-[166px] md:mt-0 my-5 rounded-[20px] text-base text-center"
          color="gray_100"
          size="sm"
          variant="fill"
        >
          Регистрация
        </Button>
    </Link>
     <Link to="/LoginPage1">
     <Button
         className="cursor-pointer font-montserrat font-semibold leading-[normal] min-w-[113px] md:ml-[0] ml-[30px] md:mt-0 my-5 rounded-[20px] text-base text-center"
          color="green_A700"
          size="sm"
          variant="fill"
        >
          Войти
        </Button>
     </Link>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
