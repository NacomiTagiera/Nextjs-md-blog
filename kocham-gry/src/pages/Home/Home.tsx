import { Link } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";

import MainContent from "../../components/MainContent/MainContent";
import Picture from "../../components/Picture/Picture";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarLink from "../../components/SidebarLink/SidebarLink";

import "../../scss/_index.scss";
import "./Home.scss";

import spacewar from "./assets/spacewar.jpg";
import magnavox_odyssey from "./assets/magnavox_odyssey.jpg";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={8}>
          <MainContent>
            <p className="lead">
              Witaj na mojej stronie internetowej poświęconej grom komputerowym,
              na której przedstawiłem historię gier oraz subiektywne top 3 w
              kilku różnych kategoriach. Obecnie wolę tworzyć strony internetowe
              od grania na konsoli czy komputerze, dlatego postanowiłem stworzyć
              tę witrynę. Zapraszam!
            </p>
            <section id="firstGame">
              <header>
                <h2>Pierwsza gra komputerowa</h2>
              </header>
              <p>
                Tak prawdziwa, że bardziej się nie da. Tutaj wszyscy badacze są
                zgodni. Historia gier komputerowych zaczyna się na dobre. Twórcą
                pierwszej gry wideo (takiej w pełni graficznej) jest Steve
                Russell. Znudzony uniwersyteckim życiem żak, który przez te gry
                komputerowe studiów nie skończył. Może mama ma rację…?
              </p>
              <p>
                Na przełomie 1961 i 1962 roku do Massachusetts Institute of
                Technology (MIT) trafia komputer o nazwie PDP – 1. Grupa
                studentów, w której znajdował się Steve Russell, dostała za
                zadnie zademonstrować możliwości tego komputera. A z racji tego,
                że ci studenci byli już znudzeni robieniem kolejnych
                nieatrakcyjnych prezentacji, postanowili zrobić coś zupełnie
                innego.
              </p>
              <p>
                Pomysłodawcą zmiany i głową zespołu był właśnie Russel, który
                uwielbiał literaturę science-fiction. Pierwsza gra bazowała na
                walce dwóch kosmicznych statków na czarnym tle (to ostatnie
                miało robić za przestrzeń kosmiczną). I tyle. Dwa pikselowe
                statki, które w siebie strzelały. Tylko tyle i aż tyle.
              </p>
              <h3>Spacewar!</h3>
              <p>
                Projektowanie gry zajęło <b>ponad sześć miesięcy</b>, ale gra z
                marszu stała się hitem. Nadano jej nazwę <i>Spacewar!</i>. Potem
                rozbudowano trochę pomysł i dodano przyciągające statki słońce
                oraz możliwość pojawienia się w losowym (a nie jak wcześniej z
                góry ustalonym) miejscu. Gra była darmowa; twórcy udostępnili
                program, który został skopiowany na inne komputery. Sam
                producent PDP – 1 dołączał tę grę do swoich egzemplarzy. Steve
                Russell nigdy nie skończył studiów.
              </p>
              <Picture
                source={spacewar}
                alt="Spacewar!"
                classes="my-3 large"
                lazyLoading={true}
              />
            </section>
            <section id="firstConsole">
              <header>
                <h2>Prototyp pierwszej konsoli</h2>
              </header>
              <p>
                Historia gier wideo przeżywa trudny okres. Świat już załapał, że
                gry wideo mogą mieć jakąś sensowną przyszłość, ale mało kto
                chciał inwestować w niepewny jeszcze rynek. Ponadto mówimy o
                czasach, w których sprzęt komputerowy i elektroniczny w ogóle
                był bardzo drogi, więc masowe produkowanie gier komputerowych
                nie miało sensu.
              </p>
              <p>
                W 1966 roku obraz konsoli do grania, gdzie telewizor odgrywałby
                integralną rolę zabawy, pojawiła się w głowie Ralpha Baera. Myśl
                ta była do zrealizowania niesłychanie trudna, bo telewizor
                kojarzył się wtedy jedynie, tylko i wyłącznie z oglądaniem
                telewizji. Jak, grać na telewizorze? Bzdury.
              </p>
              <p>
                Myśl tę na całe szczęście udało się zrealizować, więc pisanie o
                historii gier wideo ma sens. Mało tego, już w 1966 roku poznano
                radość płynącą z gier multiplayerowych. Co prawda nie było to
                Call of Duty, ale jednak rywalizacja z innym człowiekiem.
              </p>
            </section>
            <section id="Magnavox_Odyssey">
              <header>
                <h2>
                  Pierwsza konsola w historii gier wideo – Magnavox Odyssey
                </h2>
              </header>
              <p>
                Chętnych do wydania konsoli, która obsługiwałaby gry za bardzo
                nie było. Dopiero producent telewizorów postanowił zaangażować
                się w produkcję konsol, bo poniekąd łączyło się to z tym
                biznesem. Takim sposobem w 1972 roku firma Magnavox zaczęła
                masową produkcję pierwszej konsoli w historii gier wideo –
                <b> Magnavox Odyssey</b>.
              </p>
              <p>
                Konsola odstawała trochę od wyobrażeń Baera, ale cóż,
                wszystkiego mieć nie można. Odyssey jednak odniosła sukces
                sprzedażowy, w czym z pewnością pomogła kampania marketingowa, w
                której wziął udział sam Frank Sinatra. Można uznać to za
                naprawdę dobry start. Sukces sprzedażowy konsoli otworzył drzwi
                do dalszych produkcji gamingowych i, co być może najważniejsze,
                pozwolił zaistnieć grom wideo w kulturze
              </p>
              <p>
                Zdanie o tym, że gry wideo musiały zaistnieć w kulturze może
                wydawać się błahe, ale przypomnijmy sobie jakie boje stoczyły
                komiksy, by zostać uznane przez społeczeństwo za pełnoprawną
                literaturę. Gry wideo musiały przejść tę samą drogę tylko że…
                Miały trudniej. Dlaczego? Bo komiks jest znacznie tańszy niż
                gra, która wymaga jeszcze nośnika w postaci komputera (i
                ekranu), lub konsoli (i znów ekranu). Do tego aspektu historii
                gier wideo jeszcze wrócimy.
              </p>
              <Picture
                source={magnavox_odyssey}
                alt="Magnavox Odyssey - pierwsza konsola w historii gier"
                classes="large"
                lazyLoading={true}
              />
            </section>
            <p className="lead">
              To tyle, co chciałem Ci przekazać na temat początków gier.
              Zapraszam do innych sekcji witryny, w których poznasz moje
              ulubione gry komputerowe. Miłej lektury!
            </p>
          </MainContent>
        </Col>
        <Col xs={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 0 }}>
          <Sidebar>
            <ol className="list-group list-group-numbered border border-light border-1 d-none d-lg-block rounded">
              <SidebarLink sectionId="firstGame">
                Pierwsza gra komputerowa
              </SidebarLink>
              <SidebarLink sectionId="firstConsole">
                Prototyp pierwszej konsoli
              </SidebarLink>
              <SidebarLink sectionId="Magnavox_Odyssey">
                Magnavox Odyssey
              </SidebarLink>
            </ol>
          </Sidebar>
        </Col>
      </Row>
    </Container>
  );
}
