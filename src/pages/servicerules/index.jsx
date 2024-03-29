import React from "react";
import { Link } from "react-router-dom";
import { Button, Img, Line, Text } from "components";

const serviceRules = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto p-5 w-full">
        <div className="flex flex-col justify-start max-w-[1220px] mb-5 mx-auto md:px-5 w-full">
          <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[467px] w-[62%] md:w-full">
            <Text
              className="mt-[19px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[0.48px]"
              size="txtMontserratSemiBold24Black900"
            >
              ПРАВИЛА СЕРВИСА
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_mobilecancelmajor.svg"
              alt="mobilecancelmaj"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mr-4 mt-[19px] w-[99%] md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-black-900 text-sm"
                size="txtMontserratRegular14Black900"
              >
                <>
                  Правила сайта
                  <br />
                  <br />
                  1. Пользоваться сервисом worktap.kz может любой человек,
                  достигший совершеннолетия. Для создания или заказа ворка
                  необходима регистрация с помощью email.
                  <br />
                  <br />
                  2. У одного человека может быть только один аккаунт.
                  Администрация оставляет за собой право удалить дублирующие
                  аккаунты.
                  <br />
                  <br />
                  3. При регистрации пользователь самостоятельно выбирает логин,
                  который будет виден всем пользователям сайта. Логин может
                  содержать цифры, буквы латинского алфавита и знаки - и _.
                  Нельзя использовать в качестве логинов номера телефонов,
                  ненормативную лексику, слова, перевод или звучание которых
                  может негативно восприниматься другими пользователями, а также
                  системные и зарезервированные слова. Администрация вправе
                  изменять такие логины пользователей.
                  <br />
                  <br />
                  4. Ответственность за всю размещенную пользователем информацию
                  (тексты, иллюстрации, видео и т.д.) несет сам пользователь.
                  Регистрируясь на сайте, пользователь подтверждает, что
                  понимает свою ответственность и гарантирует возмещение
                  расходов, понесенных сервисом, в случае предъявления претензий
                  правообладателей к сайту worktap.kz.
                  <br />
                  <br />
                  5. На сайте запрещена ненормативная лексика, грубое общение,
                  несанкционированная реклама, размещение информации и
                  материалов, негативно влияющих на имидж сайта. Запрещено
                  размещение материалов, содержащих угрозы и оскорбления,
                  дискредитирующих других лиц, нарушающих права граждан на
                  частную жизнь или публичный порядок, носящих характер
                  непристойности; нарушающие в той или иной степени честь и
                  достоинство, права и охраняемые законом интересы других лиц;
                  способствующие или содержащие призывы к разжиганию
                  религиозной, расовой или межнациональной розни, содержащие
                  попытки разжигания вражды или призывы к насилию, а также любых
                  материалов, нарушающих законодательство и авторское право. Всю
                  ответственность в случае нарушений несет на себе пользователь.
                  Нарушающая правила или закон информация будет удалена.
                  <br />
                  <br />
                  6. Администрация ресурса оставляет за собой право удалить
                  любые материалы (проекты, ворки, отзывы, комментарии), а также
                  заблокировать или удалить пользователя без объяснения причин.
                  При подозрении на несанкционированный доступ к аккаунту,
                  рассылке спама или иной подозрительной активности
                  администрация сайта вправе заблокировать аккаунт и вывод
                  средств до выяснения обстоятельств.
                  <br />
                  <br />
                  7. Спорные ситуации, в том числе с финансами, разрешаются с
                  помощью переписки, при обращении пользователя в службу
                  поддержки сайта. Если какой-либо вопрос не регулируется
                  правилами, администрация системы принимает решение о том, как
                  необходимо поступить в той или иной ситуации.
                  <br />
                  <br />
                  8. Пользователь берет на себя обязательство не разглашать
                  информацию, полученную в процессе работы в системе, которая
                  доступна только при входе в свой аккаунт. Эта информация
                  включает в себя, но не ограничивается параметрами и условиями
                  заказов, личной перепиской с другими пользователями и
                  администрацией Worktap. В качестве исключения пользователь
                  имеет право публиковать данные о своем заработке в системе,
                  собственных ворках, и других параметрах своего аккаунта, если
                  это не затрагивает информацию, связанную с другими
                  пользователями (данные их заказов, личная переписка).
                  <br />
                  <br />
                  9. Если продавец ведет постоянную деятельность и получает
                  стабильный доход посредством размещения услуг и выполнения
                  заказов на сайте worktap.kz, он самостоятельно должен
                  регулировать свои взаимоотношения с государственными органами:
                  самостоятельно оформить ИП/патент/юр. лицо и вовремя
                  оплачивать налоги/сборы.
                  <br />
                  <br />
                  10. Пользователь сайта не имеет права использовать для
                  продвижения партнерской ссылки некачественные методы рекламы,
                  копировать сайт полностью или частично, использовать дизайн
                  или бренд сайта WorkTap с целью введения пользователей в
                  заблуждение. Подробнее: Правила партнерской программы.
                  <br />
                  <br />
                  11. Использование персональных данных сайтом WorkTap.
                  Пользователь дает добровольное согласие на предоставление,
                  хранение и обработку своих данных, и на получение информации,
                  в том числе email рассылок, от WorkTap, регистрируясь на
                  сайте. WorkTap может собирать, хранить и обрабатывать
                  пользовательскую информацию (куки, данные, идентификаторы),
                  если это необходимо в целях обеспечения работы сайта,
                  корректной работы партнерской программы, а также для рекламных
                  целей. На сайте происходит сбор данных о посетителях с помощью
                  сервисов Гугл Аналитика и Яндекс Метрика. Все данные
                  пользователя хранятся на защищенных серверах и не передаются
                  третьим лицам, исключая необходимость такой передачи в целях
                  обеспечения работы сервиса или маркетинговых целях, а также
                  следуя требованиям законодательства. В любое время вы можете
                  отключить передачу cookie в настройках браузера. При этом
                  следует учесть, что в этом случае некоторые функции сервиса
                  могут перестать работать.
                  <br />
                  <br />
                  12. Пользователи не имеют права продавать, покупать, дарить
                  аккаунты WorkTap и передавать учётные данные аккаунта третьим
                  лицам.
                </>
              </Text>
            </div>
            <Line className="bg-blue_gray-600 md:h-1 h-[71px] mb-[448px] rounded-sm w-1 md:w-full" />
          </div>
      <Link to="/">
      <Button
            className="border border-green-A700 border-solid cursor-pointer font-medium leading-[normal] min-w-[380px] sm:min-w-full md:ml-[0] ml-[410px] mr-[430px] mt-[31px] rounded-[20px] text-center text-sm"
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

export default serviceRules;
