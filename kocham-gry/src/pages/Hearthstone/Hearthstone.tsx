import { Col, Container, Row } from "react-bootstrap";

import MainContent from "../../components/MainContent/MainContent";
import Picture from "../../components/Picture/Picture";
import Sidebar from "../../components/Sidebar/Sidebar";

import articleImg from "./assets/articleImg.jpg";
import sidebarImg from "./assets/sidebarImg.jpg";

export default function Hearthstone() {
  return (
    <Container fluid="md">
      <Row>
        <Col xs={12} lg={8}>
          <MainContent>
            <section>
              <h2>Hearthstone</h2>

              <p className="lead">
                Hearthstone (pierwotnie wydana jako Hearthstone: Heroes of
                Warcraft) - gra komputerowa stworzona przez studio Blizzard
                Entertainment, wydana 11 marca 2014 roku, początkowo na
                systemach Windows i Macintosh. 16 kwietnia 2014 roku miała
                miejsce premiera na iPadach, 6 sierpnia tego samego roku na
                urządzenia z ekranem dotykowym z systemem Windows 8, a 16
                grudnia - na tablety z Androidem. Prawie rok po premierze, to
                jest 14 kwietnia, wydano ją na systemy Android i iOS
              </p>
            </section>

            <section>
              <h2>Świat gry</h2>

              <Picture
                source={articleImg}
                alt="Hearthstone"
                classes="float-lg-start me-lg-3 responsive"
              />

              <p>
                Akcja gry dzieje się w świecie znanej gry{" "}
                <b>World of Warcraft</b>, lecz tworzy swego rodzaju spin-off
                serii. Miejscem akcji jest tajemnicza Karczma, stanowiąca
                neutralne miejsce, w którym zbierają się przedstawiciele
                wszystkich ras znajdujących się na Azeroth, lecz także i innych
                światów, jak chociażby tych z Rubieży. Przybysze opowiadają
                swoje historie, świętują rozmaite wydarzenia najczęściej
                związane z przebywaniem z najbliższymi oraz robią wiele innych
                rzeczy, przy tym jedząc i pijąc. Ponieważ Karczmarz rządzący tym
                miejscem, pomimo faktu że jest krasnoludem, nie należy do żadnej
                frakcji i jest całkowicie neutralny względem wszystkich potęg
                czy organizacji istniejących na Azeroth i dalej. Stąd obok
                siebie czas tutaj spędzają ludzie i orkowie, elfy Nocne i
                Krwawe, gnomy i gobliny oraz worgeni i nieumarli Porzuceni.
                Goście najczęściej grają w Hearthstone - grę nazwaną na cześć
                prastarego artefaktu zwanego <b>Kamieniem Powrotu</b>,
                umożliwiającego teleportację do karczmy, którą poszukiwacze
                przygód zowią domem.
              </p>

              <p>
                W ramach gry wybierają oni klasę i bohatera, po czym stają do
                walki dzięki swojej talii kart i mają maksymalnie 10 klejnotów
                many, z czego przez w pierwszej turze każdy ma po 1 klejnocie, a
                z każdą kolejną ich liczba wzrasta o 1. Klasy są takie same co w
                MMORPG, a każda z nich ma swoją moc specjalną, jak również
                strony mocne i słabe. W grze wygrywa się, gdy któryś z
                przeciwników podda się lub jego życie spadnie do zera.
              </p>
            </section>

            <section>
              <h2>Rozwój</h2>

              <p>
                Hearthstone stał się obiektem zainteresowania licznych
                deweloperów na rynku gier wideo, którzy rozpoczęli realizację
                własnych odpowiedników tej gry. Wśród nich znaleźli się między
                innymi autorzy serii The Elder Scrolls oraz Wiedźmin. Pierwszy
                twórca - ZeniMax Online Studios - zaprojektował grę o nazwie The
                Elder Scrolls: Legends i wydał ją 9 marca 2017 roku. Z kolei
                polski wydawca gier o Wiedźminie - CD Projekt RED - zawarł w
                trzeciej części trylogii pod nazwą Dziki Gon minigrę o nazwie
                <b>Gwint</b>, która 23 października 2016 roku doczekała się z
                kolei pełnoprawnej darmowej wersji pod nazwą GWINT: Wiedźmińska
                Gra Karciana.
              </p>
            </section>
          </MainContent>
        </Col>

        <Col className="d-none d-lg-block">
          <Sidebar>
            <Picture
              source={sidebarImg}
              alt="Hearthstone"
              classes="img-fluid shadow-lg large"
            />
          </Sidebar>
        </Col>
      </Row>
    </Container>
  );
}
