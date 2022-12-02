import MainContent from "../../components/MainContent/MainContent";
import Sidebar from "../../components/Sidebar/Sidebar";

import { Container, Row, Col } from "react-bootstrap";

import "../../scss/_index.scss";
import "./Home.scss";

import gra from "./assets/gra.jpg";
import pong from "./assets/pong.jpg";
import rudy from "./assets/rudy.webp";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={8}>
          <MainContent>
            <section>
              <header>
                <h2>Wstęp</h2>
              </header>
              <p className="lead">
                Witaj na mojej stronie internetowej poświęconej grom, na której
                przedstawiłem subiektywne top 3 gier w kilku różnych
                kategoriach. Obecnie wolę tworzyć strony internetowe od grania
                na konsoli czy komputerze, dlatego postanowiłem stworzyć tę
                witrynę. Zapraszam!
              </p>
            </section>
            <section>
              <header>
                <h2>Początki gier</h2>
              </header>
              <p>
                Prototypem gry komputerowej był wynaleziony w 1947 roku przez
                Amerykanów Thomasa A. Goldsmitha Jr. i Estle Raya program
                Cathode-Ray Tube Amusement Device – analogowy symulator pocisku
                rakietowego używający lamp elektronowych. Początek gier
                komputerowych w formie graficznej nastąpił jednak dopiero po
                wynalezieniu w Wielkiej Brytanii komputera EDSAC – pierwszej
                maszyny liczącej posiadającej wyświetlacze, które stanowiły
                prototyp monitora. Pionierem gier komputerowych stał się
                pracownik uniwersytetu w Cambridge, Alexander Sandy Douglas,
                który w ramach pracy doktorskiej stworzył adaptację zabawy w
                kółko i krzyżyk pod nazwą Noughts and Crosses (1952). Kolejnego
                osiągnięcia w zakresie tworzenia gier dokonał fizyk William
                Higinbotham, który wyprodukował dzieło Tennis for Two na
                podstawie gry w tenisa (1958). Była to pierwsza graficzna gra
                komputerowa, wyświetlana na oscyloskopie i posiadająca
                kontrolery do sterowania. Kolejną innowacyjną grą okazała się
                Spacewar! (1961) stworzona przez Steve'a Russella z
                Massachusetts Institute of Technology, w której dwaj gracze
                kierujący statkami kosmicznymi mieli za zadanie zniszczyć
                przeciwnika. W amerykańskich publikacjach wskazuje się ją jako
                pierwszą grę z prawdziwą wektorową grafiką komputerową. Pierwsze
                programy interaktywne stanowiły produkcje akademickie. Do ich
                upowszechnienia dążył Ralph Baer, który zamierzał stworzyć
                interaktywną grę możliwą do podłączenia do telewizora. Wynalazł
                nowe kontrolery (na przykład pistolet do strzelania w ekran) i
                doprowadził do wydania pierwszej w historii konsoli gier wideo
                pod nazwą Magnavox Odyssey (1972), która zapoczątkowała pierwszą
                generację platform do grania. Skopiowanie przez Nolana Bushnella
                pomysłu Baera na uproszczoną symulację tenisa doprowadziło do
                wydania pierwszej gry na automaty – Ponga (1972), którego
                seryjna sprzedaż przez Atari doprowadziła do pierwszego sukcesu
                komercyjnego w branży.
              </p>
            </section>
            <section>
              <header>
                <h2>Rozwój gier na automaty</h2>
              </header>
              <p>
                Sukces Ponga spowodował produkcję przez Atari kolejnych gier
                zręcznościowych przeznaczonych na automaty: Tanka – symulatora
                walki czołgów (1974), Shark Jaws – pierwszej gry komputerowej z
                zastosowanymi animacjami postaci (1975); rywalizację z Atari
                podjęła japońska spółka Taito, produkując Gun Fight (1975) –
                pierwszą grę wykorzystującą mikroprocesory. Rozwój gier na
                automaty postępował: Steve Jobs i Steve Wozniak stworzyli
                Breakout (1976) – pierwowzór Arkanoida; Japończyk Tomohiro
                Nishikado zasłynął jako twórca Space Invaders (1978) – produktu
                o niespotykanej dotąd popularności, który upowszechnił rozrywkę
                elektroniczną i zapoczątkował gatunek strzelanek. Odpowiedzią na
                Space Invaders był Galaxian (1979) – pierwsza gra komputerowa z
                kolorowym wyświetlaczem. Kolejnym przebojem na automaty była gra
                Asteroids (1979), oparta głównie na pomyśle Spacewar!. Premiera
                Pac-Mana (1980), kolejnego sukcesu komercyjnego autorstwa Toru
                Iwataniego ze spółki Namco, uczyniła tytułowego bohatera
                pierwszą w historii branży ikoną popkultury, co zaowocowało
                między innymi sequelami gry i serialem animowanym. Ostatnimi
                kluczowymi produkcjami na automaty z tego okresu były: gra
                Dragon's Lair (1983) autorstwa Dona Blutha, zawierająca
                nowoczesną oprawę graficzną przywodzącą na myśl interaktywny
                film animowany, oraz Mario Bros. (1983) wyprodukowana przez
                Shigeru Miyamoto, która oficjalnie wprowadziła postać Mario,
                znaną z gry Donkey Kong (1981)
              </p>
            </section>
            <section>
              <header>
                <h2>Druga generacja konsola</h2>
              </header>
              <p>
                Rozwojowi gier komputerowych towarzyszyły innowacje w zakresie
                konsol gier wideo. W 1976 roku powstała Fairchild Channel F,
                która wykorzystywała kartridże z różnymi tytułami, co pozwalało
                na łatwą zmianę gry. W 1977 roku Atari wydało konsolę Atari VCS,
                która popularność zyskała po wydaniu dla niej portu Space
                Invaders (1980) oraz przeboju Davida Crane'a pod tytułem
                Pitfall! (1982). Sukcesy odniosły też wyprodukowane przez Mattel
                konsole Intellivision (1979) i ColecoVision (1982), przy czym ta
                ostatnia stała się popularna dzięki konwersjom tytułów na
                automaty. Niepowodzenie konsoli Atari 5200 (1982), jak również
                pojawienie się komputerów uniwersalnych w rodzaju ZX Spectrum i
                Commodore 64, doprowadziły w 1983 roku do gwałtownego załamania
                sprzedaży konsol i zapaści branżowej, powiązanej z upadkiem
                Atari
              </p>
            </section>
          </MainContent>
        </Col>
        <Col>
          <Sidebar imgSrc={rudy} imgAlt="Rudy">
            to jest test
          </Sidebar>
        </Col>
      </Row>
    </Container>
  );
}
