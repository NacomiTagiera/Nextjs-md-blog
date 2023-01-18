import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import MainContent from "../../components/MainContent/MainContent";
import Picture from "../../components/Picture/Picture";
import Sidebar from "../../components/Sidebar/Sidebar";

import articleImg from "./assets/articleImg.jpg";
import sidebarImg from "./assets/sidebarImg.jpg";

function Fifa() {
  return (
    <Container fluid="md">
      <Row>
        <Col xs={12} lg={8}>
          <MainContent>
            <section>
              <h2>FIFA</h2>

              <p>
                Najbardziej znany cykl piłkarskich symulacji i zarazem jedna z
                najpopularniejszych serii sportowych w historii branży gier
                wideo. FIFA zaliczana jest do grona kluczowych marek (obok
                Madden NFL, NHL i Tiger Woods PGA) w portfolio należącej do
                koncernu Electronic Arts firmy EA Sports. Początki serii sięgają
                lat 90. ubiegłego wieku. Cykl zadebiutował w 1993 roku grą FIFA
                Football Soccer (FIFA '94) wydaną w wersjach na komputery PC
                oraz konsole (m.in. Sega Mega Drive, SNES, Master System i Game
                Boy). Produkcja stworzona została jako element promocji
                piłkarskich Mistrzostw Świata w Stanach Zjednoczonych i była
                pierwszą grę wideo na oficjalnej licencji FIFA.
              </p>

              <p>
                Od prawie trzech dekad gry z głównej linii cyklu ukazują się w
                regularnych, jednorocznych odstępach czasowych (FIFA 08, FIFA
                18, FIFA 23 itd.). Uzupełnienie stanowią natomiast sub-serie
                FIFA Manager, FIFA Street, FIFA Mobile oraz tytuły wydawane z
                okazji dużych imprez piłkarskich, takich jak Mistrzostwa Świata
                (np. 2006 FIFA World Cup i 2010 FIFA World Cup South Africa) czy
                Mistrzostwa Europy (UEFA Euro 2004 i UEFA Euro 2008).
              </p>
            </section>

            <Picture
              source={articleImg}
              alt="Chelsea vs Manchester City"
              classes="float-lg-start me-lg-3 responsive"
            />

            <section>
              <h2>Produkcja</h2>

              <p>
                Za produkcję gier z cyklu FIFA odpowiada przede wszystkim studio
                deweloperskie EA Canada. Seria rozwijana jest w sposób
                ewolucyjny, co oznacza, że kolejne odsłony odznaczają się
                relatywnie ograniczoną ilością zmian, co często jest jednym z
                argumentów wysuwanych przez krytyków. <br /> W nowszych
                odsłonach serii znajdziemy najpopularniejsze kluby i ligi z
                całego świata, takie jak Bundesliga, Premier League czy EFL
                Championship, ale też te mniej znane i prestiżowe. Dokładnie tak
                samo wygląda to w przypadku drużyn, gdzie wśród Real Madrit,
                Juventus, Barcelona czy Manchester United znajdziemy mniejsze
                zespoły z Grecji, czy Ukrainy.
              </p>
            </section>

            <section>
              <h2>Statystyki</h2>

              <p>
                Aktualnie kolejne odsłony cyklu ukazują się w przeszło 50
                krajach i około 20 wersjach językowych (w tym również polskiej),
                trafiając na praktycznie każdą możliwą dostępną platformę (PC,
                PlayStation, Xbox, Nintendo, Android czy iOS). <br />
                Do 2019 roku seria FIFA na całym świecie sprzedała ponad 282.4
                milionów egzemplarzy i zaliczana jest do najlepiej sprzedających
                się serii gier komputerowych na świecie, trafiając dzięki temu
                do Księgi Rekordów Guinnessa.
              </p>
            </section>
          </MainContent>
        </Col>

        <Col className="d-none d-lg-block">
          <Sidebar>
            <Picture
              source={sidebarImg}
              alt="Okładka gry FIFA 23"
              classes="img-fluid shadow-lg rounded"
            />
          </Sidebar>
        </Col>
      </Row>
    </Container>
  );
}

export default Fifa;
