import { Container, Row, Col } from "react-bootstrap";

import MainContent from "../../components/MainContent/MainContent";
import Picture from "../../components/Picture/Picture";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarLink from "../../components/SidebarLink/SidebarLink";

import "../../scss/_index.scss";

import arcadeMachines from "./assets/arcade_machines.jpg";
import commodore from "./assets/commodore.jpg";
import spacewar from "./assets/spacewar.jpg";
import magnavox_odyssey from "./assets/magnavox_odyssey.jpg";

export default function Home() {
  return (
    <Container fluid="md">
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
              <Picture source={spacewar} alt="Spacewar!" classes="my-3 large" />
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
                pozwolił zaistnieć grom wideo w kulturze.
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
              />
            </section>

            <section id="arcadeMachines">
              <header>
                <h2>
                  Gaming w barze – Era maszyn arcade'owych w historii gier wideo
                </h2>
              </header>

              <p>
                Nieprzypadkowo era. Mowa tutaj o prawdziwym, dochodowym
                biznesie, który ma się coraz lepiej. A jak to w biznesie bywa,
                za pieniędzmi idzie odpowiedzialność, a za tym idą problemy. Już
                po 1972 roku wytoczony został proces nowopowstałej firmie Atari,
                która ukradła pomysł wspomnianego już Ralpha Baera. Pomysł
                przełomowy, bo na cyfrową grę w ping pong. Proces ten udowadnia,
                jak dochodowym biznesem stały się gry wideo.
              </p>
              <p>
                Przez wiele kolejnych lat powstawały różne, a nawet przeróżne
                wersje gry ping pong. Dla dwóch, dla czterech osób; z paletkami
                poruszającymi się góra – dół, oraz lewo – prawo. Na podstawie
                tej gry stworzono grę w hokeja. Wszystko to na wielkie maszyny,
                do których dostęp mógł mieć każdy. Maszyny takiej, w
                przeciwieństwie do konsoli, nie trzeba było posiadać, by móc
                zagrać. Głównym producentem maszyn było Atari i to właśnie ta
                firma zaczęła monopolizować branżę gier wideo.
              </p>
              <p>
                Po pierwszej grze w odbijanie pikselowej piłki pojawiły się
                kolejne produkcje, które budziły coraz większe zainteresowanie
                arcade'owych pasjonatów. Były strzelające do siebie czołgi i
                pojedynki nurków z rekinami (tak, pomysł ukradziono z filmu
                szczęki). Dalej powstał <i>Gun Fight</i>, czyli pojedynek dwóch
                rewolwerowców.
              </p>

              <Picture
                source={arcadeMachines}
                alt="Maszyny arcade'owe"
                classes="large"
              />
            </section>

            <section id="homeGaming">
              <header>
                <h2>
                  Gaming w domu – historia branży gier wideo pod domowym dachem
                </h2>
              </header>

              <h3>Konsole</h3>
              <p>
                Historia gier wideo to niejedna historia, ale wiele mniejszych
                opowieści połączonych w jedną całość. Gry komputerowe,
                konsolowe, arcade'owe i zawirowania kulturowe tworzą obraz
                branży gier wideo, jaką znamy dzisiaj. Aby jednak iść zgodnie z
                biegiem czasu, musimy powiedzieć sobie, co dalej działo się z
                rynkiem konsol, kiedy maszyny zawojowały świat.
              </p>
              <p>
                Pierwsza połowa lat 70. XX wieku należy do Ponga, a więc do
                dwóch paletek i piłeczki. Wariacji na ten temat pojawiało się
                multum nie tylko na maszyny. Konsole nie pozostawały w tym
                temacie dłużne. Nawet jedyna polska konsola TVG-10, była
                pudełkiem posiadającym wirtualne paletki, piłeczkę i nic poza
                tym.
              </p>
              <p>
                Druga połowa zaś, to początek cartridge'y. Nie trzeba wyrzucać
                konsoli, wystarczy kupić grę. Genialne, czyż nie? Wybór gier
                wtedy może nie należał do największych, ale jest to bardzo
                przyszłościowe myślenie, którego ewolucją może być dzisiejszy
                game pass.
              </p>

              <h3 className="pb-1 text-center">
                Najlepsze konsole rodem z XXI wieku
              </h3>

              <h4>Atari VCS</h4>
              <p>
                Czyżby nazwa tej konsoli nic nikomu nie mówiła? Niemożliwe.
                Przyjrzyjmy się jej bliżej. Stworzona w 1977 roku nie odniosła
                wielkiego sukcesu. Dopiero po 1980 nastąpił przełom. Space
                Inviders na konsolę w domu. Ta informacja zawojowała rynek,
                dając konsoli szansę na drugie życie. Potem na VCS pojawiły się
                i inne hity, np. Asteroids. To tylko wzmocniło pozycję konsoli
                na rynku. W 1982 roku pojawiła się gra <i>Pitfall!</i>, od
                Activision nawiasem mówiąc, która jest dzisiaj legendą gier na
                Atari. <br />
                VCS produkowano aż do 1991 roku, czyli ponad jedną dekadę. Po
                drodze zmieniono nazwę konsoli na Atari 2600. Tak, VCS, czyli
                2600, to jedna z najbardziej kultowych konsol w historii gier
                wideo.
              </p>

              <h4>Atari 5200</h4>
              <p>
                Na dosłownie kilka zdań w naszej historii gier wideo zasługuje
                konsola Atari 5200. Dlaczego? Bo była katastrofą. Gorsza
                specyfikacja niż jej poprzedniczka, brak kompatybilności
                wstecznej i największa zmora graczy: joystick, który nie wracał
                do swojej pierwotnej pozycji po jego wychyleniu. Ktoś opracował
                gałkę, która pozostawała wychylona. Cóż, konsola niewypał.
              </p>

              <h4>Nintendo Entertainment System (NES)</h4>
              <p>
                Super Mario Bros, The Legend of Zelda, Castlevania. 8-bitowa
                architektura, gry na kartridże. 1983 rok zapoczątkował japoński
                szał Nintendo. Szacuje się, że łącznie sprzedano około 60
                milionów egzemplarzy tej konsoli. Właśnie tą konsolą Nintendo
                przywłaszczyło sobie rynek japoński na dobre detronizując Atari.
                Rynek Europejski też udało się wtedy podbić, ale przez
                faworyzowanie rynku rodzimego Nintendo oddało pałeczkę.
                Natomiast sama konsola w latach 80. nie miała sobie równych.
              </p>

              <h3>Komputery</h3>
              <p>
                Jak już sobie wspominaliśmy, na samym początku historii gier
                komputerowych nikt o samych grach nie myślał. Powstawały one
                jako produkt uboczny lub ciekawostka nie warta dłuższej uwagi. Z
                początku w gry bawili się studenci informatyki MIT tworząc różne
                tekstowe produkcje. Były to raczej mniej lub bardziej (ale
                raczej mniej) angażujące historie ukazywane za pomocą tekstu.
                Gracze mieli do wyboru bardzo okrojony zakres ruchów, więc mogli
                jedynie wybrać kierunek, w którym będą szli, lub wykonać
                najprostszą interakcję ze światem (przyjrzeć się czemuś, czy
                podnieść przedmiot).
              </p>
              <p>
                Najpopularniejszą grą tego typu jest Zork. Stworzony na MIT był
                jedną z pierwszych gier komputerowych, które ukazały się na
                Apple (dokładniej na Apple II). Zork wychodził aż do 1981 roku.
                Właściwie 1997, ale lata 81 – 97 to już nie czasy oryginalnego
                tytułu, a raczej graficzne fantazje na jego temat. W sercach
                graczy Zork na zawsze pozostał grą tekstową.
              </p>
              <p>
                Sytuacja gier komputerowych nie była jednak ciekawa. Finansowa
                bariera była wtedy bardziej zaporowa niż jest dzisiaj, dlatego
                rynek konsolowy rozwijał się szybciej. Co prawda w latach 80.
                bardzo popularne były maszyny, ale te z roku na rok zachodziły
                kurzem, a prawdziwa walka toczyła się między konsolami, a
                komputerami.
              </p>

              <h4>ZX Spectrum</h4>
              <p>
                Kolorowy obraz o rozdzielczości 256 x 192 piksele, wbudowany
                głośnik, 48 kilobajtów pamięci RAM. Czy to technologia kosmitów?
                Nie, to Brytyjski komputer do gier. W 1982 nie miał wielu
                konkurentów, więc stał się marzeniem każdego gracza. Tytułów
                trochę było, do dziś niektórzy pamiętają{" "}
                <i>Lords of Midnight, Jet Set Willy</i>, czy <i>Knight Lore</i>.
                Jednak Spectrum nie cieszył się koroną zbyt długo.
              </p>

              <h4>Commodore 64</h4>
              <p>
                Pod koniec 1982 roku pojawił się komputer, który miał być jak
                komunizm. Dobry dla wszystkich. Okazało się to strzałem w 10, bo
                rzeczywiście komputer ten zawojował rynek na całym świecie. Tani
                i prosty w obsłudze obsługiwał konwersję gier z konsol i maszyn
                do grania. Ponadto z czasem zaczęły wychodzić na ten komputer
                produkcje oryginalne, więc źródeł rozrywki na pewno nie
                brakowało. 64 kilobajty RAM-u w tamtym czasie robiły robotę.
                Taki komputer chciał mieć każdy gracz. Mówi się o sprzedanych
                ponad 30 milionach egzemplarzy.
              </p>

              <Picture source={commodore} alt="Commodore 64" classes="large" />
            </section>

            <section id="summary">
              <header>
                <h2>Podsumowanie historii gier</h2>
              </header>

              <p>
                Kilka dekad rozwoju branży gier wideo tworzy (nie)krótką
                historię gier komputerowych. Od komputerów z kartkami
                perforowanymi, przez pierwsze cyfrowe kółko i krzyżyk, aż po
                zapierające dech w piersiach sceny z PS5. Historia gier wideo to
                również debaty na temat wpływu gier na psychikę człowieka; nauka
                o roli gier w edukacji, aż w końcu samo groznawstwo.
              </p>
              <p>
                Co będzie dalej? Trudno przewidzieć. Branża cały czas się
                rozwija, a siły na rynku się zmieniają. Dzisiejszy hegemon może
                upaść, jutro może wyrosnąć nowy. Historia gier komputerowych to
                naprawdę zajmujący temat, którego studiowanie (niekoniecznie na
                uniwersytecie) może sprawiać wiele frajdy i satysfakcji. Poza
                tym, dobrze jest znać historię swoich ulubionych tytułów, ich
                wydawców i nośników.
              </p>
            </section>

            <p className="lead">
              To tyle, co chciałem Ci przekazać na temat początków gier
              komputerowych i konsol. Zapraszam do innych sekcji witryny, w
              których opowiadam o swoich ulubionych grach. Mam nadzieję, że ci
              się spodoba. Miłej lektury!
            </p>
          </MainContent>
        </Col>

        <Col xs={{ span: 10, offset: 1 }} lg={{ span: 4, offset: 0 }}>
          <Sidebar isSticky={true}>
            <h3 className="mb-3 text-center text-white">Spis treści</h3>
            <ol className="list-group list-group-numbered border border-light border-1 rounded">
              <SidebarLink sectionId="firstGame">
                Pierwsza gra komputerowa
              </SidebarLink>
              <SidebarLink sectionId="firstConsole">
                Prototyp pierwszej konsoli
              </SidebarLink>
              <SidebarLink sectionId="Magnavox_Odyssey">
                Pierwsza konsola w historii - Magnavox Odyssey
              </SidebarLink>
              <SidebarLink sectionId="arcadeMachines">
                Gaming w barze - era maszyn arcade'owych
              </SidebarLink>
              <SidebarLink sectionId="homeGaming">Gaming w domu</SidebarLink>
              <SidebarLink sectionId="summary">
                Podsumowanie historii gier
              </SidebarLink>
            </ol>

            <h3 className="mb-2 mt-4 text-center text-white">Ciekawostki</h3>
            <ul className="text-white" style={{ listStyleType: "disc" }}>
              <li className="pb-3">
                Gry pozytywnie wpływają na rozwój logicznego myślenia u dzieci.
                Pobudzają procesy umysłowe i rozwijają umiejętność
                skojarzeniowego myślenia. Dzięki takim ćwiczeniom szarych
                komórek dziecko sprawniej rozwiązuje problemy, wykonuje zadania.
              </li>
              <li className="pb-3">
                Gry rozwijają koordynację wzrokowo-ruchową, poprawiają refleks,
                pobudzają wyobraźnię przestrzenną.
              </li>
              <li className="pb-3">
                Granie w gry to fantastyczny sposób na rozładowanie nadmiaru
                emocji, nie tylko tych złych, co poprawia ogólny stan psychiczny
                gracza.
              </li>
              <li>
                Według raportu „The Game Industry of Poland 2021” ponad 20 mln
                Polaków gra w gry, z czego ponad 80% z nich jest pełnoletnia. Co
                ważne – 49% wszystkich graczy, to kobiety.
              </li>
            </ul>
          </Sidebar>
        </Col>
      </Row>
    </Container>
  );
}
