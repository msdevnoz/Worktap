import React from "react";
import { Link } from "react-router-dom";
import { Button, Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[98px] ml-[300px] mr-[317px] mt-[49px] w-[68%]">
          <ul className="flex flex-col items-center justify-center w-full common-column-list">
            <li>
              <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full common-column-list">
                <li>
                  <Text
                    className="md:mt-0 mt-0.5 text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[0.48px]"
                    size="txtMontserratBold24"
                  >
                    Топ категории
                  </Text>
                </li>
                <li>
                  <Text
                    className="md:ml-[0] ml-[143px] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[0.48px]"
                    size="txtMontserratBold24"
                  >
                    О Проекте
                  </Text>
                </li>
                <li>
                  <Text
                    className="md:ml-[0] ml-[195px] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[0.48px]"
                    size="txtMontserratBold24"
                  >
                    Поддержка
                  </Text>
                </li>
                <li>
                  <Text
                    className="mb-0.5 md:ml-[0] ml-[182px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[0.48px]"
                    size="txtMontserratBold24"
                  >
                    Follow
                  </Text>
                </li>
              </ul>
            </li>
            <li>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[27px]">
                <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-gray-900_01 text-sm"
                      size="txtMontserratRegular14"
                    >
                      Тексты и переводы
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="mt-2 text-gray-900_01 text-sm"
                      size="txtMontserratRegular14"
                    >
                      Разработка
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="mt-[9px] text-gray-900_01 text-sm"
                      size="txtMontserratRegular14"
                    >
                      Дизайн
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="mt-[9px] text-gray-900_01 text-sm"
                      size="txtMontserratRegular14"
                    >
                      Аудио, видео монтаж
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="mt-2 text-gray-900_01 text-sm"
                      size="txtMontserratRegular14"
                    >
                      Соцсети и реклама
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="mt-[7px] text-gray-900_01 text-sm"
                      size="txtMontserratRegular14"
                    >
                      Бизнес и жизнь
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="mt-[9px] text-gray-900_01 text-sm"
                      size="txtMontserratRegular14"
                    >
                      SEO и оптимизация
                    </Text>
                  </li>
                </ul>
                <ul className="flex flex-col items-start justify-start md:ml-[0] ml-[182px] md:w-full common-column-list">
                  <li>
                  <Link to="/weAbout">
                  <Text
                      className="text-gray-900_01 text-sm"
                      size="txtMontserratRegular14"
                    >
                      О Нас
                    </Text>
                  </Link>
                  </li>
                  <li>
                  <Link to="/howItWorksPage">
                  <Text
                      className="mt-2 text-gray-900_01 text-sm"
                      size="txtMontserratRegular14"
                    >
                      Как Это Работает
                    </Text>
                  </Link>
                  </li>
                  <li>
                  <Text
                      className="mt-2.5 text-gray-900_01 text-sm"
                      size="txtMontserratRegular14"
                    >
                      Политика Приватности
                    </Text>
                  </li>
                  <li>
                   <Link to='/serviceRules'>
                   <Text
                      className="mt-[9px] text-gray-900_01 text-sm"
                      size="txtMontserratRegular14"
                    >
                      Правила Пользования{" "}
                    </Text>
                   </Link>
                  </li>
                  <li>
                    <Text
                      className="mt-[9px] text-gray-900_01 text-sm"
                      size="txtMontserratRegular14"
                    >
                      Пресса о нас
                    </Text>
                  </li>
                </ul>
                <ul className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[166px] md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-gray-900_01 text-sm"
                      size="txtMontserratRegular14"
                    >
                      Контакты
                    </Text>
                  </li>
              <li>
                    <Text
                      className="text-gray-900_01 text-sm"
                      size="txtMontserratRegular14"
                    >
                      Политика Безопасности
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-gray-900_01 text-sm"
                      size="txtMontserratRegular14"
                    >
                      FAQ
                    </Text>
                  </li>
                </ul>
                <a href="https://www.twitter.com/" target="_blank">
                <Img
                  className="h-[50px] md:ml-[0] ml-[30px] w-[50px]"
                  src="images/img_trash_green_a700.svg"
                  alt="trash"
                /> </a>
                <Button
                  className="flex h-[50px] items-center justify-center mb-[130px] md:ml-[0] ml-[30px] rounded-[50%] w-[50px]"
                  shape="circle"
                  color="gray_900_01"
                  size="sm"
                  variant="fill"
                >
                     <a href="https://www.instagram.com/" target="_blank">
                  <Img
                    className="h-7"
                    src="images/img_akariconsinstagramfill_gray_50_01.svg"
                    alt="akariconsinstag"/></a>
                
                </Button>
                <a href="http://www.linkedin.com/" target="_blank">
                <Img
                  className="h-[50px] md:ml-[0] ml-[30px] w-[50px]"
                  src="images/img_user_gray_900_01_50x50.svg"
                  alt="user_One"
                />
                </a>
                <a href="http://www.facebook.com/" target="_blank">
                <Img
                  className="h-[50px] md:ml-[0] ml-[30px] w-[50px]"
                  src="images/img_facebook.svg"
                  alt="user_One"
                />
                </a>
              </div>
            </li>
            <li>
              <Text
                className="md:ml-[0] ml-[394px] mt-[49px] text-base text-gray-900_01 tracking-[0.32px]"
                size="txtMontserratMedium16Gray90001"
              >
                Copyright @ 2021 | WorkTap – Worktap.KZ. All Rights Reserved
              </Text>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
