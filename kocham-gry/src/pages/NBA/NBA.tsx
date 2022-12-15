import { Col, Container, Row } from "react-bootstrap";

import MainContent from "../../components/MainContent/MainContent";
import Picture from "../../components/Picture/Picture";
import Sidebar from "../../components/Sidebar/Sidebar";

import "../../scss/_index.scss";

import articleImg from "./assets/articleImg.jpg";
import sidebarImg from "./assets/sidebarImg.jpg";

export default function NBA() {
  return (
    <Container fluid="md">
      <Row>
        <Col xs={12} lg={8}>
          <MainContent>
            <section>
              <header>
                <h2>Seria gier NBA 2K</h2>
              </header>

              <p>
                Seria gier sportowych na licencji amerykańskiej ligi
                koszykarskiej (National Basketball League). Cykl rozwijany jest
                przez studio Visual Concepts i należy do najważniejszych marek w
                portfolio wydawniczym firmy 2K Sports.
              </p>
            </section>

            <section>
              <header>
                <h2>Historia</h2>
              </header>

              <p>
                Korzenie serii sięgają końca lat 90. ubiegłego wieku i wydanej w
                1999 roku na konsoli Dreamcast gry NBA 2K. Początkowo cykl
                ukazał się pod szyldem firmy Sega, jednak w 2005 roku prawa do
                marki wykupił koncern Take-Two Interactive. Od tego czasu
                kolejne odsłony serii wydawane są w jednorocznych odstępach
                czasu przez 2K Sports. Warto przy tym odnotować, że na
                przestrzeni kilkunastu lat cykl zagościł na wszystkich
                popularnych platformach sprzętowych, wliczając w to konsole 6 i
                7 generacji, komputery PC oraz urządzenia mobilne (smartfony i
                tablety).
              </p>
            </section>

            <section>
              <header>
                <h2>Rozgrywka</h2>
              </header>

              <p>
                Zgodnie z gatunkowym kanonem, gry z serii <i>NBA 2K</i>{" "}
                pozwalają graczom pokierować zawodnikami ulubionych drużyn
                koszykarskich. Dzięki wykorzystaniu oficjalnej licencji ligi
                NBA, nazwy zespołów, nazwiska koszykarzy, składy i logotypy są
                zgodne z autentycznymi odpowiednikami.
              </p>

              <Picture
                alt="Stephen Curry"
                classes="float-lg-start me-lg-3 my-3 my-lg-0 responsive"
                source={articleImg}
              />

              <p>
                Rozgrywka łączy elementy sportowej symulacji, gry
                zręcznościowej, a nawet strategii. Gracz nie tylko kontroluje
                poczynania zawodników na wirtualnych boiskach do koszykówki, ale
                także odpowiada za ustalenie taktyki meczowej, wprowadzanie
                zmian w składzie czy rozwój kariery i transferowanie zawodników.
                Ważnym elementem zabawy jest możliwość rywalizacji z żywym
                przeciwnikiem, przy czym w nowszych odsłonach serii tryb
                multiplayer pozwala także na pojedynki toczone poprzez sieć
                Internet.
              </p>
              <p>
                Na tle konkurencyjnych produkcji, seria NBA 2K wyróżnia się
                przede wszystkim obsługą innowacyjnych rozwiązań technicznych. W
                przypadku najnowszych, konsolowych gier z cyklu istnieje np.
                możliwość wykorzystania kontrolerów ruchowych – PlayStation Move
                oraz Kinect, a także wyświetlania grafiki w trójwymiarze (wymaga
                zastosowania odpowiedniego monitora i okularów).
              </p>
            </section>
          </MainContent>
        </Col>

        <Col lg={4}>
          <Sidebar isSticky={false}>
            <Picture
              source={sidebarImg}
              alt="Mickey Ardell"
              classes="d-none d-lg-block img-fluid shadow-lg large"
            />
          </Sidebar>
        </Col>
      </Row>
    </Container>
  );
}
