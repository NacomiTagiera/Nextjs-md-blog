import { useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

import MainContent from "../../components/MainContent/MainContent";
import Picture from "../../components/Picture/Picture";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarLink from "../../components/SidebarLink/SidebarLink";

import { LinkToSection, SFCharacter } from "../../types/main";
import "./Street_Fighter.scss";

import abel from "./assets/abel.jpg";
import dudley from "./assets/dudley.jpg";
import hakan from "./assets/hakan.jpg";
import seth from "./assets/seth.jpg";
import fighters from "./assets/articleImg1.jpg";
import streetFigher from "./assets/article-st6.jpg";

const characters: SFCharacter[] = [
  {
    image: abel,
    name: "Abel",
  },
  {
    image: dudley,
    name: "Dudley",
  },
  {
    image: hakan,
    name: "Hakan",
  },
  {
    image: seth,
    name: "Seth",
  },
];

const linksToSections: LinkToSection[] = [
  {
    id: "intro",
    text: "Wstęp",
  },
  {
    id: "history",
    text: "Historia i rozwój",
  },
  {
    id: "st2",
    text: "Street Fighter II",
  },
  {
    id: "st3",
    text: "Street Fighter III",
  },
  {
    id: "st4",
    text: "Street Fighter IV",
  },
  {
    id: "st5",
    text: "Street Fighter V",
  },
  {
    id: "st6",
    text: "Street Fighter VI",
  },
];

export default function StreetFighter() {
  const [activeImg, setActiveImg] = useState<number>(0);

  return (
    <Container fluid="md">
      <Row>
        <Col xs={12} lg={8}>
          <MainContent>
            <section id="intro">
              <h2>Street Fighter</h2>

              <p className="lead">
                Street Fighter (ストリートファイターSutorīto Faitā) w skrócie
                SF, to popularna seria gier walki, w której gracze grają
                postaciami z całego świata, który każdy ma swoje ciosy
                specjalne.W Street Fighter II, w dużej mierze przypisuje norma
                kolejnym częściom serii i jest uważana za prawdziwą pierwszą
                część serii gry. Capcom wydał pierwszą część gry w 1987 roku,
                ale nie była to powszechnie znana bijatyka.W 1989 roku wydano
                pierwszą grę z tej serii, która nosiła nazwę Final Fight.
                Ostatecznie seria Final Fight została zmieniona na Street
                Fighter.
              </p>
            </section>

            <Picture
              source={fighters}
              alt="Postacie z gry Street Fighter"
              classes="float-lg-start me-lg-3 my-3 my-lg-0 responsive"
            />

            <section id="history">
              <h2>Historia i rozwój</h2>

              <p>
                Street Fighter zadebiutował w salonach gier 1987 roku. Został on
                zaprojektowany przez <i>Takashiego Nishiyamę</i> i{" "}
                <i>Hiroshiego Matsumoto</i>. Gracz przejął kontrolę nad samotnym
                artystą sztuk walki, imieniem Ryu, który rywalizuje w światowym
                turnieju sztuk walki razem z reprezentantami pięciu różnych
                krajów (USA, Japonii, Chin, Tajlandii i Anglii), po dwóch z
                każdego kraju. Gracz może wykonać trzy podstawowe rodzaje ciosów
                i kopnięć, które różnią się w szybkością i siłą więc w sumie
                posiadamy sześć przycisków ataku i trzy ataki specjalne: Wave
                Fist (ognista kula), Rising Dragon Punch i Hurricane Kick lub
                Hadouken, Shoryuken i Tatsumaki Senpuukyaku w języku japońskim,
                które mogą być wykonywane tylko w wyjątkowych sytuacjach. Drugi
                gracz, w każdej chwili może dołączyć do gry jako rywala Ryu,
                Kena. Oryginalną wersję Street Fightera, źle oceniono,
                wykonywanie ruchów specjalnych. W tej części gry im mocniej
                nacisnęło się guzik, tym mocniejszy był cios, a pady zbyt szybko
                psuły się, więc Capcom je wycofał.
              </p>
            </section>

            <section id="st2">
              <h3>Street Fighter II</h3>

              <p>
                Został wydany w 1991 roku i był pierwszym prawdziwym sequelem
                oryginalnego Street Fightera. Była to jedna z pierwszych gier
                zręcznościowych Capcom na sprzęt CPS i został zaprojektowany
                przez duet Akira Nishitani (Nin-Nin) i Akiman (Akira Yasuda),
                którzy wcześniej pracowali nad Final Fight i Forgotten Worlds.
                Street Fighter II było pierwszą grą jeden na jednego, a także
                gracz miał możliwość wyboru spośród różnych postaci. Każda
                postać miała konkretny, styl walki i około 30 lub więcej ruchów.
                W trybie dla pojedynczego gracza w grze, wybrana postać ma za
                zadanie stawić czoło, siedmiu losowych, innych głównych
                bohaterów przed starciem z ostatecznymi czterema wojownikami.
                Street Fighter II okazał się popularny, ze względu na wszystkie
                te nowe możliwości w grze.
              </p>
            </section>

            <section id="st3">
              <h3>Street Fighter III</h3>

              <p>
                Street Fighter III jest prawdziwym sequelem Street Fighter II, o
                innej nazwie Street Fighter III: New Generation. Gra
                zadebiutowała w salonach na sprzęt CPS3 w 1997 r. Street Fighter
                III dorzuca postacie z poprzednich gier, a także wprowadza kilka
                nowych postaci, przede wszystkim kobietę ninja Ibuki ,
                bliźniaków Yun i Yang, również Alex'a (który jest także
                bohaterem w grze). Kilka miesięcy po jego wydaniu, dodano nowy
                korekt i dwie nowe postacie, w tym Akumę oraz bonusowe rundy w
                3rd Strike: Fight for the Future, wydany w 1999 roku. Był to
                trzecia i ostatnia wersja Street Fighter III, przywracając
                Chun-Li i dodając cztery nowe postacie grywalne.
              </p>
            </section>

            <Picture
              source={streetFigher}
              alt="Street Fighter VI"
              classes="float-lg-end ms-lg-3 my-3 my-lg-0 responsive"
            />

            <section id="st4">
              <h3>Street Fighter IV</h3>

              <p>
                Street Fighter IV to gra wydana w 2008 roku i została
                wyprodukowana przez Capcom. Jest to nowa, a zarazem pierwsza gra
                Street Fighter, wydana przez Capcom od czasu wydania arcade
                Street Fighter III: 3rd Strike w 1999 roku. W Japonii,
                zręcznościowa gra została wydana 18 lipca 2008 roku, a wersje
                domowe, zostały wydane 12 lutego na PlayStation 3, 17 lutego na
                Xbox 360 oraz 20 lutego na PC w 2009 roku w Japonii, Ameryce
                Północnej i Europie. Postacie i środowisko, w grze są
                renderowane jako modele 3D, tak aby ich efekt dawał im ręcznie
                rysowany wygląd. Dodatkowo zastosowano spray, podczas gdy
                wybrany wojownik wykonuje atak. Dyrektorem artystycznym i
                projektantem charakterystycznym jest Daigo Ikeno, który
                wcześniej pracował nad Street Fighter III: 3rd Strike. Gdyby
                ustawić chronologicznie gry Street Fighter II, Street Fighter
                III i Street Fighter IV, początkowo można pomyśleć że, jest to
                powrót do korzeni serii. Oro uważa że, Super Street Fighter II
                Turbo jest królem gier Street Fighter i właśnie ta gra stała się
                głównym wpływem na rozpoczęcie Street Fighter IV oraz wszystkie
                jego postacie miały być w grze. Jednak czterech postacie
                wprowadzone w Super Street Fighter II zrzucono do wersji arcade
                gry, więc ostatecznie, grą przepisaną jest Street Fighter II:
                Champion Edition, wraz z czterema dodatkowymi, nowymi postaciami
                z serii.
              </p>
            </section>

            <section id="st5">
              <h3>Street Fighter V</h3>

              <p>
                Street Fighter V jest dotychczas najnowszą grą wyprodukowaną
                przez Capcom, 16 lutego 2016 r. Gra została wydana wyłącznie na
                PlayStation 4 i PC. <br />
                16 stycznia 2018 r. została wydana pierwsza zaktualizowana
                wersja, Street Fighter V: Arcade Edition. <br />
                Druga zaktualizowana wersja, Street Fighter V: Champion Edition,
                została wydana 14 lutego 2020 r.
              </p>
            </section>

            <section id="st6">
              <h3>Street Fighter VI</h3>

              <p>
                Street Fighter VI zostanie wydany na PS5, PS4, Xbox Series X|S,
                XB1 i PC w 2022 r. Gra ma mieć dwie aktualizacje:{" "}
                <b>Super Street Fighter VI</b> (2023r.) i{" "}
                <b>Ultra Street Fighter VI</b> (2024r.).
              </p>
            </section>
          </MainContent>
        </Col>
        <Col xs={{ span: 10, offset: 1 }} lg={{ span: 4, offset: 0 }}>
          <Sidebar>
            <h3 className="mb-3 text-center text-white">Spis treści</h3>
            <nav>
              <ListGroup as="ol" numbered variant="flush">
                {linksToSections.map((link) => (
                  <SidebarLink key={link.id} sectionId={link.id}>
                    {link.text}
                  </SidebarLink>
                ))}
              </ListGroup>
            </nav>
          </Sidebar>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <section>
            <h2 className="py-3 text-center text-white">
              Moje ulubione postacie
            </h2>
            <div className="d-flex">
              {characters.map((character, index) => (
                <div
                  key={index}
                  className={`gallery-item ${
                    activeImg === index ? "active" : ""
                  }`}
                  style={{ backgroundImage: `url(${character.image})` }}
                  onClick={() => {
                    setActiveImg(index);
                  }}
                >
                  <h3>{character.name}</h3>
                </div>
              ))}
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
}
