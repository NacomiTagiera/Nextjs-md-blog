import { Col, Container, Row } from "react-bootstrap";

import MainContent from "../../components/MainContent/MainContent";
import Picture from "../../components/Picture/Picture";
import Sidebar from "../../components/Sidebar/Sidebar";

import articleImg from "./assets/articleImg.png";
import sidebarImg from "./assets/sidebarImg.jpg";
import cache from "./assets/cache.jpg";
import inferno from "./assets/inferno.jpg";
import mirage from "./assets/mirage.jpg";
import nuke from "./assets/nuke.jpg";

interface Map {
  imgSrc: string;
  name: string;
}

const maps: Map[] = [
  {
    imgSrc: mirage,
    name: "Mirage",
  },
  {
    imgSrc: cache,
    name: "Cache",
  },
  {
    imgSrc: inferno,
    name: "Inferno",
  },
  {
    imgSrc: nuke,
    name: "Nuke",
  },
];

export default function Csgo() {
  return (
    <Container fluid="md">
      <Row>
        <Col xs={12} lg={8}>
          <MainContent>
            <section>
              <h2>CS:GO</h2>

              <p className="lead">
                Counter-Strike: Global Offensive to wieloosobowa strzelanka
                pierwszoosobowa, stworzona oraz wydana przez Valve Corporation i
                Hidden Path Entertainment, które już wcześniej pracowały nad
                Counter-Strike: Source. Jest to czwarta gra z serii
                Counter-Strike, wydana na platformy Microsoft Windows, macOS,
                Xbox 360 i PlayStation 3 21 sierpnia 2012 i na Linuxa 23
                września 2014.
              </p>
            </section>

            <section>
              <h2>Rozgrywka</h2>

              <p>
                W grze do walki stają dwie drużyny: terroryści i antyterroryści.
                Zadaniem każdej z nich jest eliminacja drużyny przeciwnej lub
                wykonanie określonego zadania. W przypadku terrorystów jest to
                podłożenie bomby lub przetrzymywanie zakładników, zaś w
                przypadku antyterrorystów ochrona strefy detonacji przed
                podłożeniem bomby lub uratowanie zakładników. W grze występuje
                wiele różnych trybów, z których każdy ma odrębne cechy
                charakterystyczne. CS:GO oprócz wbudowanego systemu
                matchmakingu, pozwalającego graczom na rozgrywkę na dedykowanych
                serwerach Valve, ma również możliwość tworzenia i rozgrywki na
                serwerach społeczności z niestandardowymi mapami i trybami gry.
                Od momentu wydania, CS:GO jest jedną z najpopularniejszych
                strzelanek pierwszoosobowych rozgrywanych w ramach sportu
                elektronicznego. Najważniejszymi turniejami są tzw. „majory”,
                zawody sponsorowane przez wydawcę gry, Valve.
              </p>

              <p>
                W grze, oprócz samouczka („Kurs szkoleniowy”), występuje osiem
                głównych trybów gry: „Turniejowy”, „Uproszczony”, „Deathmatch”,
                „Wyścig zbrojeń”, „Demolka”, „Latający skaut”, „Skrzydłowy”,
                „Odbijanie" oraz „Strefa zagrożenia”. Możliwa jest także
                rozgrywka offline z botami oraz po sieci lokalnej. W każdym z
                trybów online możliwe jest rozpoczęcie gry wspólnie ze znajomymi
                z poziomu tzw. poczekalni.
              </p>
            </section>

            <Picture
              source={articleImg}
              alt="Terrorysta i antyterrorysta"
              classes="float-lg-start  me-lg-3 my-3 my-lg-0 responsive"
            />

            <section>
              <h2>Wyposażenie</h2>

              <p>
                W grze występuje sześć kategorii wyposażenia: pistolety, broń
                ciężka, pistolety maszynowe, karabiny, granaty oraz dodatkowy
                sprzęt. Każda broń w grze posiada unikalne właściwości, takie
                jak ilość amunicji w magazynku, szybkostrzelność, zadawane
                obrażenia czy rozrzut kul w ogniu ciągłym. Gracz może posiadać
                ograniczoną ilość wyposażenia, zakupioną przed początkiem rundy:
                jedną broń podstawową (pistolet maszynowy, karabin lub broń
                ciężką), jedną broń dodatkową (pistolet), cztery granaty (lub
                trzy w zależności od trybu gry), paralizator oraz nóż.
                Podstawowym wyposażeniem, przyznawanym graczom automatycznie na
                początku rundy jest pistolet (USP-S lub P2000 w drużynie
                antyterrorystów oraz Glock-18 w drużynie terrorystów) oraz nóż.
                Pozwala to na rozgrywanie rund bez zakupu broni, celem
                zaoszczędzenia środków na kolejne rundy (ang. eco, force-buy i
                full-buy). Z wyjątkiem noży, gracze mogą wyrzucać swoją broń i
                podnosić ją od innych graczy, także po śmierci przeciwników.
                Przetrwanie do końca rundy pomimo przegranej pozwala zachować
                zdobytą broń na kolejną rundę.
              </p>

              <p>
                W grze występuje kilka rodzajów granatów ręcznych: granat dymny,
                granat błyskowo-hukowy, granat zaczepny, wabik oraz granat
                zapalający. Obie drużyny mają dodatkowo możliwość zakupienia
                przed rundą kamizelki kuloodpornej i hełmu, zwiększającą
                odporność na obrażenia. Dodatkowo, gracze antyterrorystów mają
                możliwość zakupienia - w zależności od trybu gry - zestawu do
                rozbrajania (zmniejszającego czas rozbrajania bomby) lub zestawu
                ratunkowego (skracającego czas ratowania zakładnika).
              </p>
            </section>
          </MainContent>
        </Col>

        <Col className="d-none d-lg-block">
          <Sidebar>
            <Picture
              source={sidebarImg}
              alt="Karabin M4A4 Ryk"
              classes="img-fluid shadow-lg large"
            />
          </Sidebar>
        </Col>
      </Row>
    </Container>
  );
}
