import React from "react";
import s from "./AboutCompany.module.css";
import {Container, Row} from "react-bootstrap";
import BreadCrumbs from "../CommonComponents/BreadCrumbs";
import AboutCompanyContent from "./AboutCompanyContent";

import picture_1 from "../../common/images/about_pic1.png";
import picture_2 from "../../common/images/about_pic2.png";
import picture_3 from "../../common/images/about_pic3.png";
import picture_4 from "../../common/images/about_pic4.png";
import picture_5 from "../../common/images/about_pic5.png";


class AboutCompany extends React.Component {
  render() {
    return (
      <div className={s.aboutCompany}>
        <Container>
          <BreadCrumbs
            title={"O компании"}
            links={[{path: "/", text: "Главная"}]}
          />
          <h1 className={s.aboutCompany_title}>О нас</h1>
          <section className={s.main}>

            <div className={s.aboutCompany_section}>

              <AboutCompanyContent
                title={"ПРОИЗВОДИТЕЛЬ МЯСА ПТИЦЫ № 1 В КАЗАХСТАНЕ."}
                items={["Сегодня АО “Алель Агро” является  крупнейшим производителем мяса птицы  в Казахстане . " +
                "Объем производства в 2020 году составил 51 000 тонн мяса, что составило 23% рынка. В 2021 году  " +
                "планируется увеличение объемов до 59 000 тонн.", "Высокое качество продукции,  грамотная ценовая " +
                "политика позволяет  держать лидирующие позиции среди  птицефабрик Казахстана."]}
              />

              <AboutCompanyContent
                image={picture_1}
              />

            </div>

            <div className={s.aboutCompany_section}>

              <AboutCompanyContent
                title={"МИССИЯ КОМПАНИИ."}
                items={["Создание современного высокотехнологичного производства по выпуску экологически чистых и " +
                "полезных продуктов из мяса птицы бройлера, с заботой о благополучии и здоровье потребителей."]}
              />

              <AboutCompanyContent
                title={"ВИДЕНИЕ."}
                items={["Удовлетворение современных требований рынка в продукции  птицеводства и формирование высокого " +
                "доверия потребителей."]}
              />

            </div>

            <div className={s.aboutCompany_section}>
              <img src={picture_2} alt="image"/>
            </div>

            <div className={s.aboutCompany_section}>

              <AboutCompanyContent
                image={picture_3}
              />

              <AboutCompanyContent
                title={"НАШИ ЦЕННОСТИ."}
                items={["Люди – это главная ценность и движущая сила компании. ", "Качество –высокое качества мяса птицы – " +
                "сбалансированный корм растительного происхождения, отличные условия содержания птицы, высокая степень " +
                "биологической безопасности. ", "Стремление к совершенству –  поиск, изучение, применение самых передовых " +
                "в мире технологий кормления,  выращивания птицы, технологии переработки мяса птицы."]}
              />

            </div>

            <div className={s.aboutCompany_section} style={{display: "block"}}>
              <h2 className={s.aboutCompany_section_title}>ДОСТИЖЕНИЯ КОМПАНИИ.</h2>
            </div>

            <div className={s.aboutCompany_section}>

              <div className={s.aboutCompany_section_direction}>

                <AboutCompanyContent
                  title={"ВЫСОКОЕ ДОВЕРИЕ"}
                  items={["Наше достоинство- Сертификат «ХАЛАЛ» присвоенный  Духовным управлением Мусульман Казахстана." +
                  "В 2015 году наша  компания получила награду в Конкурсе потребительского  признания «Халык маркасы 2015»"]}
                />

                <AboutCompanyContent
                  title={"ВЫСОКИЙ ЕВРОПЕЙСКИЙ ПОКАЗАТЕЛЬ ЭФФЕКТИВНОСТИ ВЫРАЩИВАНИЯ ПТИЦЫ БРОЙЛЕР (EPEF) "}
                  items={["Наша гордость-  членство в клубе “400 ARBOR ACRES”  производителей мяса птицы бройлер, " +
                  "достигших высоких показателей- EPEF свыше 400."]}
                />

              </div>

              <div className={s.aboutCompany_section_direction}>

                <AboutCompanyContent
                  title={"БЕЗОПАСНОСТЬ"}
                  items={["Вся продукция соответствует требованиям действующих ГОСТов,  нормам СанПиН, Техническим " +
                  "регламентам Таможенного Союза и  нормативным документам предприятия. При производстве  используется " +
                  "экологически чистое сырье в виде натуральных кормов и  добавок; производится постоянный " +
                  "физико-химический и  микробиологический контроль"]}
                />

                <AboutCompanyContent
                  title={"ТЕХНОЛОГИЧНОСТЬ"}
                  items={["Все технологические процессы строго стандартизированы;  Продукция сертифицирована органами " +
                  "по сертификации РК;"]}
                />

              </div>

            </div>

            <div className={s.aboutCompany_section}>

              <AboutCompanyContent
                image={picture_4}
              />

              <AboutCompanyContent
                image={picture_5}
              />

            </div>

          </section>
        </Container>
      </div>
    );
  }
}

export default AboutCompany;