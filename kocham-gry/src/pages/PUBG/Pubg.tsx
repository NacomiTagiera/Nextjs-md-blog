import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from "react-bootstrap-icons";

import MainContent from "../../components/MainContent/MainContent";
import Picture from "../../components/Picture/Picture";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Pubg.scss";

import articleImg from "./assets/articleImg.jpg";
import sidebarImg from "./assets/sidebarImg.jpg";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import slide4 from "./assets/slide4.jpg";

const slides: string[] = [slide1, slide2, slide3, slide4];

export default function Pubg() {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const nextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <Container fluid="md">
      <Row>
        <Col xs={12} lg={8}>
          <MainContent>
            <section>
              <h2>PUBG</h2>

              <p className="lead">
                Playerunknown's Battleground to gra multiplayer zaliczana do
                gatunku battle royale opracowana przez koreańskie studio
                Bluehole. W czasie każdego meczu grupka graczy zrzucana jest na
                dużą zamkniętą mapę, której powierzchnia zmniejsza się z czasem.
                Twoim zadaniem jest w PUBG jest przetrwanie dłużej niż inni
                gracze.
              </p>
            </section>

            <section>
              <h2>Rozgrywka</h2>

              <p>
                O miejscu rozpoczęcia zabawy decydujesz samodzielnie - musisz
                bowiem w odpowiednim momencie wyskoczyć z lecącego samolotu.
                Wylądowanie w odpowiednim miejscu bardzo istotne. Każdy mecz
                rozpoczynasz bez wyposażenia. Wszelką broń i pozostałe elementy
                ekwipunku zdobywasz przeszukując kolejne lokacje. W grze może
                brać udział maksymalnie 100 graczy. Mecz skończy się, gdy przy
                życiu postanie tylko jedna osoba. Gra przeznaczona jest tylko do
                zabawy sieciowej.
              </p>
            </section>

            <Picture
              source={articleImg}
              alt="Mężczyzna z karabinem przy samochodzie"
              classes="float-lg-start me-lg-3 my-3 my-lg-0 responsive"
            />

            <section>
              <h2>Produkcja</h2>

              <p>
                W 2016 roku PUBG Corporation (wtedy jeszcze występujące pod
                nazwą Bluehole Ginno Games) rozpoczęło produkcję PlayerUnknown's
                Battlegrounds. Na rynku było dostępnych tylko kilka tytułów
                battle royale: The Culling, H1Z1 oraz modyfikacje do gier z
                serii Arma. W studiu pracowało wtedy 25 osób (w tym ludzie
                odpowiedzialni m.in. za marketing, czy PR), była to część
                zespołu odpowiedzialnego za grę akcji MMORPG Devilian z 2015
                roku. Większość pracowników miała ponad 10 lat doświadczenia w
                tworzeniu gier nastawionych na rozgrywki wieloosobowe, jednakże
                nie mieli doświadczenia w tworzeniu strzelanek.
              </p>

              <p>
                1 lipca 2016 roku ogłoszono, że trwają prace nad PlayerUnknown's
                Battlegrounds. Po 4 miesiącach od rozpoczęcia produkcji
                rozpoczęto zamknięte pre-alfa testy. Zarejestrowało się w nich
                1100 testerów, a w samych testach wzięło udział 600 osób. Testy
                trwały sześć godzin (jednakże nie było to 6 godzin jednym
                ciągiem, a rozłożono je na dwa dni) i rozegrano w trakcie nich
                52 mecze. Producent gry nie miał pieniędzy na marketing, więc
                postanowił wykorzystać inne sposoby na zainteresowanie graczy
                swoją produkcją. Uczestnicy testów mieli wyłączny dostęp do
                informacji na specjalnym kanale utworzonym w aplikacji Discord.
                Twórcy chcieli sprawić, aby gracze zrozumieli, że gra ma jeszcze
                wiele błędów, może zawieszać się i w tej, wczesnej wersji jest
                jeszcze mało zawartości, ale docelowo będzie jej znacznie
                więcej. Gra początkowo była nazywana PUBS, oferowała rozgrywkę
                dla 64 graczy, a gracze nie rozpoczynali rozgrywek skacząc z
                samolotu. Brendan Greene wpadł na pomysł, aby gracze startowali
                z samolotu, a nie z budynku na ziemi, gdyż nad biurem często
                latały samoloty Lockheed C-130 Hercules z pobliskiej bazy
                wojskowej w Seulu i to one go zainspirowały.
              </p>

              <p>
                Podczas pierwszych testów alfa zniesiono umowę poufności i
                gracze od tego momentu mogli nagrywać filmy, robić zrzuty ekranu
                i streamować rozgrywkę. W szczytowym momencie rozgrywki z testów
                na Twitchu streamowało 128 streamerów i oglądało je 44 tysiące
                osób. W trakcie drugich testów alfa, które trwały cztery
                tygodnie od połowy listopada 2016 roku, grze udało się osiągnąć
                piąte miejsce na Twitchu w kategorii najczęściej oglądana gra.
                PUBG Corporation w celu zwiększenia popularności produkcji
                rozsyłało wtedy maile z zaproszeniami do testów dla streamerów.
                Dzięki temu udało im się namówić ponad 800 osób. W zamkniętych
                testach beta wzięło udział ponad 30 tysięcy osób, a gra stała
                się drugą najpopularniejszą produkcją na Twitchu. W szczytowym
                momencie rozgrywki oglądało 80 tysięcy osób.
              </p>
            </section>

            <section className="h-auto mx-auto my-5 p-relative ratio ratio-16x9 slider-container">
              {slides.map((_, index) => (
                <img
                  key={index}
                  src={slides[activeSlide]}
                  alt={`Slajd ${index + 1}`}
                  className={`w-100 h-auto slide ${
                    activeSlide === index ? "active" : ""
                  }`}
                />
              ))}
              <ArrowLeftCircleFill
                className="cursor-pointer p-absolute top-50 start-0 translate-middle btn"
                onClick={prevSlide}
              />
              <ArrowRightCircleFill
                className="cursor-pointer p-absolute top-50 start-100 translate-middle btn"
                onClick={nextSlide}
              />
            </section>
          </MainContent>
        </Col>

        <Col className="d-none d-lg-block">
          <Sidebar>
            <Picture
              source={sidebarImg}
              alt="Żołnierz w hełmie i z karabinem na tle wybuchu"
              classes="img-fluid shadow-lg rounded"
            />
          </Sidebar>
        </Col>
      </Row>
    </Container>
  );
}
