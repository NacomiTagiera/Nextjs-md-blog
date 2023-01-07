import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from "react-bootstrap-icons";

import MainContent from "../../components/MainContent/MainContent";
import Picture from "../../components/Picture/Picture";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Tekken.scss";

import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import slide4 from "./assets/slide4.jpg";
import slide5 from "./assets/slide5.png";
import slide6 from "./assets/slide6.jpg";
import slide7 from "./assets/slide7.jpg";
import slide8 from "./assets/slide8.jpg";
import sidebarImg from "./assets/sidebarImg.jpg";

export default function Tekken() {
  const [degrees, setDegrees] = React.useState<number>(0);
  const slides = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
  ];

  const nextSlide = () => {
    setDegrees((prevState) => prevState - 45);
  };

  const prevSlide = () => {
    setDegrees((prevState) => prevState + 45);
  };

  return (
    <Container fluid="md">
      <Row>
        <Col xs={12} lg={8}>
          <MainContent>
            <section>
              <h2>Tekken</h2>

              <p className="lead">
                Tekken jest bijatyką 3D stworzoną i wydaną przez japońską firmę
                Namco pod koniec 1995 roku na konsolę PlayStation. Jest to
                pierwsza odsłona popularnej serii Tekken, jaka pojawiła się na
                platformie Sony. Produkcja Namco na automatach w Japonii
                zadebiutowała już w grudniu 1994 roku. Gra dodawana jest jako
                bonus w Tekken 5 na PlayStation 2.
              </p>
            </section>

            <section>
              <h2>Historia</h2>

              <p>
                Wprawdzie Tekken nie był pierwszą trójwymiarową bijatyką, gdyż
                miano to przypisuje się Virtua Fighter (choć gry traktujące o
                walce i oparte o grafikę wektorową istniały już wcześniej),
                jednak to właśnie tytuł Namco ukazał piękno i potencjał grafiki
                3D - nie tylko z animacją wyświetlaną w 50/60 klatkach na
                sekundę (system PAL i NTSC), ale zwłaszcza z efektownymi
                ujęciami kamer w trakcie wykonywania rzutów. Lista ciosów, jakże
                uboga z dzisiejszego punktu widzenia, po prostu deklasowała
                wszelką konkurencję licznymi, przeprogramowanymi combosami. W
                tym także, stanowiącymi ukłon w stronę Killer Instinct, słynnymi
                „dziesiątkami”, czyli sekwencjami przeprogramowanych dziesięciu
                uderzeń. Już wtedy pojawiły się również tzw. multipart throws u
                dwóch zawodniczek - Niny i Anny. Przy odpowiednim chwyceniu
                przeciwnika, można było szybko wklepać odpowiednią kombinację,
                by postać wykonała z chwytu np. łamanie ręki.
              </p>
            </section>

            <Picture
              source={slide1}
              alt="Kazuya"
              classes="float-lg-start me-lg-3 my-3 my-lg-0 responsive"
            />

            <section>
              <h2>Rozgrywka</h2>

              <p>
                Każdy z dostępnych wojowników miał swoje własne nemezis, które
                można było odblokować jako grywalną postać. Na tamte czasy był
                to istny fenomen. Co ciekawe, na początku kariery PlayStation
                nieco blasku pierwszemu Tekkenowi skradło Battle Arena
                Toshinden, prezentujące uzbrojone postacie, które w dodatku
                szastały efektownymi ciosami specjalnymi i walczyły na w pełni
                trójwymiarowych arenach. Programiści z Namco w tym temacie
                postawili na nieograniczone, płaskie plansze. W pierwszym
                Tekkenie dostępnych było łącznie osiemnaście postaci. Byli to:
                Anna Williams, Armor King, Devil Kazuya, Ganryu, Heihachi
                Mishima, Jack, Kazuya Mishima, King, Kuma, Kunimitsu, Lee
                Chaolan, Marshall Law, Michelle Chang, Nina Williams, Prototype
                Jack, Paul Phoenix, Wang Jinrei oraz Yoshimitsu. Bijatyka spod
                dłuta Namco trafiła do Księgi Rekordów Guinnesa jako pierwszy
                tytuł na PlayStation, który rozszedł się w liczbie
                przekraczającej milion sztuk.
              </p>

              <p>
                Grafika 3D starzeje się niezwykle szybko, a Tekken to jedna z
                pierwszych gier tego typu, nic więc dziwnego, że dziś jest
                praktycznie nie do zaakceptowania. Zasadnicza nuta niektórych
                utworów towarzyszy nam do dziś, ale odgłosy postaci brzmią
                bardzo sztucznie.
              </p>
            </section>
          </MainContent>
        </Col>

        <Col className="d-none d-lg-block">
          <Sidebar>
            <Picture
              source={sidebarImg}
              alt="Tekken 7"
              classes="img-fluid shadow-lg large"
            />
          </Sidebar>
        </Col>
      </Row>

      <Row>
        <section
          className="slides-container"
          style={{ transform: `perspective(100rem) rotateY(${degrees}deg)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`slide ${index + 1}`}
              loading="lazy"
              className="slide"
              style={{ "--i": index + 1 } as React.CSSProperties}
            />
          ))}
        </section>
        <div className="my-5 mx-auto d-flex justify-content-around">
          <ArrowLeftCircleFill
            className="cursor-pointer text-white btn prev"
            onClick={prevSlide}
          />
          <ArrowRightCircleFill
            className="cursor-pointer text-white btn next"
            onClick={nextSlide}
          />
        </div>
      </Row>
    </Container>
  );
}
