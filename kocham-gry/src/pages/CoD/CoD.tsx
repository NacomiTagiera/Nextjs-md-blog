import { useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

import MainContent from "../../components/MainContent/MainContent";
import Picture from "../../components/Picture/Picture";
import Sidebar from "../../components/Sidebar/Sidebar";

import blackOps from "./assets/blackOps.jpg";
import cod2 from "./assets/cod2.jpg";
import modernWarfare from "./assets/mw1.jpg";
import modernWarfare2 from "./assets/mw2.jpg";
import sidebarImg from "./assets/sidebarImg.jpg";
import worldAtWar from "./assets/worldAtWar.jpg";

interface CarouselItem {
  alt: string;
  caption: string;
  src: string;
}

const carouselItems: CarouselItem[] = [
  {
    alt: "Call of Duty: Modern Warfare",
    caption: "Modern Warfare",
    src: modernWarfare,
  },
  {
    alt: "Call of Duty: Modern Warfare 2",
    caption: "Modern Warfare 2",
    src: modernWarfare2,
  },
  {
    alt: "Call of Duty 2",
    caption: "Call of Duty 2",
    src: cod2,
  },
  {
    alt: "Call of Duty: Black Ops",
    caption: "Black Ops",
    src: blackOps,
  },
  {
    alt: "Call of Duty: World at War",
    caption: "World at War",
    src: worldAtWar,
  },
];

export default function CoD() {
  const interval = 2500;
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid="md">
      <Row>
        <Col xs={12} lg={8}>
          <MainContent>
            <section>
              <h2>Call of Duty</h2>

              <p>
                Call of Duty seria gier komputerowych z gatunku strzelanek
                pierwszoosobowych o tematyce wojennej, których głównym wydawcą
                jest amerykańskie przedsiębiorstwo Activision. Początkowo
                poszczególne gry z serii były skoncentrowane na tematyce II
                wojny światowej, natomiast od 2007 roku osadzone są w realiach
                współczesnych. Seria Call of Duty została doceniona przez
                krytyków i graczy, odnosząc sukces komercyjny, wynoszący do
                listopada 2011 roku ponad 100 milionów sprzedanych egzemplarzy;
                w styczniu 2012 roku 40 milionów graczy używało gier z serii do
                rozgrywki wieloosobowej. Powodzenie serii pociągnęło ze sobą
                między innymi wydanie komiksu oraz gry karcianej.
              </p>
            </section>

            <section>
              <h2>Historia</h2>

              <Picture
                source={modernWarfare2}
                alt="Call of Duty: Modern Warfare 2"
                classes="float-lg-start me-lg-3 responsive"
              />

              <p>
                Call of Duty wywodzi się z nowoczesnej w swoim czasie produkcji
                <i> Medal of Honor: Allied Assault</i>, stworzonej w 2002 roku
                przez amerykańskie studio 2015, Inc. Konflikt pracowników studia
                z wydającym Allied Assault przedsiębiorstwem{" "}
                <i>Electronic Arts </i>
                spowodował, że opuścili oni 2015, Inc. i założyli nowe studio
                pod nazwą Infinity Ward. W porozumieniu z Activision zdecydowali
                się na produkcję gry, która konkurowałaby z serią gier Medal of
                Honor, podejmujących tematykę II wojny światowej. Wiosną 2003
                roku ogłoszone zostały prace nad Call of Duty. Ukazała się ona w
                październiku 2003 roku, przedstawiając II wojnę światową z
                perspektywy trzech żołnierzy: amerykańskiego, brytyjskiego i
                radzieckiego. Dzięki dbałości o szczegółowe odwzorowanie realiów
                wojny oraz sugestywnemu ukazaniu jej koszmaru Call of Duty
                została pozytywnie przyjęta zarówno przez krytyków, jak i przez
                graczy, zdobywając pierwszą w historii nagrodę BAFTA dla gry
                roku. Activision od początku planowało stworzenie nośnej serii,
                stąd na fali sukcesu pierwowzoru w 2004 roku ukazały się dodatek
                Call of Duty: United Offensive (producent – Gray Matter
                Interactive) oraz przeznaczona na konsole gra Call of Duty:
                Finest Hour (producent – Spark Unlimited).
              </p>

              <p>
                W 2005 roku Infinity Ward ukończyło kontynuację Call of Duty.
                Powstała na bazie autorskiego silnika Call of Duty 2 stanowiła
                krok naprzód w stosunku do pierwowzoru dzięki nowocześniejszej
                oprawie graficznej oraz bardziej wiarygodnemu oddaniu klimatu II
                wojny światowej. Wprowadzenie systemu automatycznej regeneracji
                zdrowia, użytego wcześniej w grze Halo 2, spowodowało, że stał
                się on standardem obowiązującym nowoczesne gry z gatunku
                first-person shooter. Tymczasem Activision dokonało zmian
                produkcyjnych; pracujące przy United Offensive studio Gray
                Matter Interactive zostało przekształcone w Treyarch, mające
                produkować konsolowe części serii. Efektem tego było
                przeznaczone wyłącznie na konsole dzieło{" "}
                <i>Call of Duty 2: Big Red One</i>, przedstawiające wojnę z
                punktu widzenia żołnierzy amerykańskiej 1. Dywizji Piechoty.
                Mimo niskiej sprzedaży Big Red One, ze względu na przychylne
                recenzje krytyków, zapewniła studiu Treyarch stałą pracę przy
                serii. W 2006 roku jego pracownicy poszli za ciosem, tworząc
                kolejną część serii, Call of Duty 3, skoncentrowaną głównie na
                Operacji Overlord. Mimo przychylnych recenzji nie stanowiła ona
                jednak szczególnej nowości w ramach serii, a{" "}
                <b>Activision rozważało jej zamknięcie</b>, wydając jeszcze w
                2007 roku konsolową grę Call of Duty: Roads to Victory
                (producent – Amaze Entertainment), będącą specjalną edycją Call
                of Duty 3
              </p>
            </section>
          </MainContent>
        </Col>

        <Col>
          <Sidebar isSticky={false}>
            <Picture
              source={sidebarImg}
              alt="Call of Duty: Black Ops"
              classes="d-none d-lg-block img-fluid shadow-lg large"
            />
          </Sidebar>
        </Col>
      </Row>

      <Row>
        <Col
          xs={{ span: 12, offset: 0 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 8, offset: 2 }}
        >
          <section>
            <h2 className="py-2 text-center text-white">
              5 najlepszych odsłon serii Call of Duty
            </h2>

            <Carousel activeIndex={index} onSelect={handleSelect}>
              {carouselItems.map((item) => (
                <Carousel.Item key={item.caption} interval={interval}>
                  <Picture source={item.src} alt={item.alt} classes="large" />
                  <Carousel.Caption style={{ fontSize: "2rem" }}>
                    {item.caption}
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </section>
        </Col>
      </Row>
    </Container>
  );
}
