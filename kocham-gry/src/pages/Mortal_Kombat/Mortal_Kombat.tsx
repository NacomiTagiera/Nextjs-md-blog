import { useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

import MainContent from "../../components/MainContent/MainContent";
import Picture from "../../components/Picture/Picture";
import Sidebar from "../../components/Sidebar/Sidebar";
import { CarouselItem } from "../../types/main";

import articleImg from "./assets/articleImg.jpg";
import sidebarImg from "./assets/sidebarImg.jpg";
import baraka from "./assets/baraka.jpg";
import geras from "./assets/geras.jpg";
import kabal from "./assets/kabal.jpg";
import raiden from "./assets/raiden.jpg";
import scorpion from "./assets/scorpion.jpg";

const carouselItems: CarouselItem[] = [
  {
    alt: "Geras",
    caption: "Geras",
    src: geras,
  },
  {
    alt: "Kabal",
    caption: "Kabal",
    src: kabal,
  },
  {
    alt: "Raiden",
    caption: "Raiden",
    src: raiden,
  },
  {
    alt: "Scorpion",
    caption: "Scorpion",
    src: scorpion,
  },
  {
    alt: "Baraka",
    caption: "Baraka",
    src: baraka,
  },
];

export default function Mortal_Kombat() {
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
              <h2>Mortal Kombat</h2>

              <p className="lead">
                Mortal Kombat to seria arcade'owych bijatyk, uznawana za klasykę
                tego gatunku. Za rozwój marki odpowiada amerykańskie studio
                NetherRealm (znane wcześniej pod nazwą Midway Games Chicago).
              </p>
            </section>

            <section>
              <h2>Historia</h2>

              <p>
                Twórcami cyklu Mortal Kombat są Ed Boon and John Tobias.
                Pierwszy tytuł z serii pojawił się w salonach do gier w 1992
                roku (wersja na automaty Midway Y) i stanowił odpowiedź na
                bijącą rekordy popularności bijatykę Street Fighter II.
                Potencjał dzieła studia Midway Games dostrzegła firma Acclaim,
                co zaowocowało konwersją na popularne konsole i komputery
                osobiste (m.in. Amiga 500, Sega Mega Drive, SNES i inne). Na
                przestrzeni 15 lat seria doczekała się kilkunastu odsłon
                adresowanych na różne platformy sprzętowe. W wyniku problemów
                finansowych firmy Midway prawa do marki oraz studio
                deweloperskie Midway Games w 2009 przeszły w ręce koncernu
                Warner Bros. Efektem tego był reboot serii wydany w 2011 roku.
              </p>

              <p>
                W 2015 roku na rynek trafiła jego kontynuacja – Mortal Kombat X.
                Ponieważ akcja gry została osadzona w znacznej mierze 25 lat po
                wydarzeniach ukazanych w poprzedniej części, zdecydowano się na
                zastąpienie części bohaterów młodszym pokoleniem wojowników.
                Oprócz postaci powiązanych bezpośrednio z klasycznymi
                przedstawicielami serii (jak Cassie Cage, będąca córką Johny’ego
                Cage'a i Soni Blade), pojawili się także zupełnie nowi
                protagoniści – między innymi wzorowany na azteckich bogach Kotal
                Kahn. Tytuł został wydany m.in. na konsolach ósmej generacji, co
                pozwoliło na znaczące ulepszenia w zakresie oprawy graficznej.
              </p>

              <p>
                Premiera została poprzedzona służącą jako prequel serią
                komiksów, przybliżającą historie poszczególnych bohaterów –
                zarówno nowych, jak i starych. Cykl składał się z 36 zeszytów i
                został wydany przez DC Comics (znane m.in. z komiksów o Batmanie
                czy Supermanie) we współpracy z NetherRealm Studios. W 2016 na
                konsolach Xbox One i PlayStation 4 ukazała się gra Mortal Kombat
                XL, będąca rozszerzoną edycją odsłony z 2015 roku. Wśród szeregu
                nowych postaci znaleźli się tu bohaterowie ikonicznych filmów,
                np. Predator, Ksenomorf, Jason Vorhees czy Leatherface.
              </p>
            </section>

            <Picture
              source={articleImg}
              alt="Mortal Kombat"
              classes="float-lg-start me-lg-3 responsive"
            />

            <section>
              <h2>Rozgrywka</h2>
              <p>
                Akcja cyklu Mortal Kombat toczy się w fantastycznym uniwersum
                złożonym z siedmiu równoległych światów. Fabuła poszczególnych
                gier bywa mocno pogmatwana, jednak w większości przypadków gracz
                kieruje poczynaniami herosa, który przy użyciu swoich
                nietuzinkowych umiejętności walki musi stawić czoła siłom zła.{" "}
                <br />
                Podstawowym elementem zabawy są widowiskowe pojedynki rozgrywane
                z udziałem bohaterów o zróżnicowanych umiejętnościach. Zadaniem
                gracza jest pokonanie przeciwnika przy pomocy całej gamy ataków,
                zasłon i specjalnych ciosów. Starcia podzielone są na rundy, a
                walka kończy się możliwością wyprowadzenia wyjątkowo brutalnego
                ataku – tzw. fatality. Seria zasłynęła zresztą kontrowersyjną
                dawką przemocy. Co ciekawe, stało się to jedną z przyczyn
                powstania amerykańskiej organizacji zajmującej się przyznawaniem
                klasyfikacji wiekowej w grach – ESRB.
              </p>

              <p>
                Seria Mortal Kombat na stałe wpisała się nie tylko w historię
                gier wideo, ale szeroko pojętej kultury masowej. Marka doczekała
                się m.in. dwóch ekranizacji kinowych i seriali telewizyjnych,
                filmu animowanego oraz serii komiksów.
              </p>
            </section>
          </MainContent>
        </Col>

        <Col className="d-none d-lg-block">
          <Sidebar>
            <Picture
              source={sidebarImg}
              alt="Scorpion"
              classes="img-fluid shadow-lg large"
            />
          </Sidebar>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <section>
            <h2 className="py-2 text-center text-white">
              Najpopularniejsze postacie z serii gier Mortal Kombat
            </h2>

            <Carousel activeIndex={index} onSelect={handleSelect} fade>
              {carouselItems.map((item) => (
                <Carousel.Item key={item.caption} interval={interval}>
                  <Picture source={item.src} alt={item.alt} classes="large" />
                  <Carousel.Caption
                    className="fw-bold pb-5 text-danger"
                    style={{ fontSize: "2rem" }}
                  >
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
