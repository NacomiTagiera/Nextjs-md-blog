import { Col, Container, Row } from "react-bootstrap";

import MainContent from "../../components/MainContent/MainContent";
import Picture from "../../components/Picture/Picture";
import Sidebar from "../../components/Sidebar/Sidebar";

import articleImg from "./assets/articleImg.jpg";
import sidebarImg from "./assets/sidebarImg.jpg";

export default function Faeria() {
  return (
    <Container fluid="md">
      <Row>
        <Col xs={12} lg={8}>
          <MainContent>
            <section>
              <h2>Faeria</h2>

              <p className="lead">
                Faeria to produkcja studia Abrakam, która łączy cechy gier
                karcianych oraz strategicznych. Do dyspozycji są trzy tryby gry:
                Kampania (dla jednego gracza), Battle (pojedynki online z innymi
                graczami) oraz Pandora przypominająca Arenę z Hearthstone.
              </p>
            </section>

            <section>
              <h2>Fabuła</h2>

              <p>
                Akcja Faeria toczy się w starej krainie fantasy, zamieszkanej
                zarówno przez ludzi, jak i inne inteligentne istoty. Każdy
                skrawek tego świata kryje wiele ciekawych historii, a powietrze
                buzuje od energii magicznych. Gra kładzie duży nacisk na
                historię fikcyjnego uniwersum i osoby lubiące wykopywać takie
                informacje znajdują tu sporo okazji do oddania się tej pasji.
              </p>
            </section>

            <section>
              <h2>Rozgrywka</h2>

              <p>
                Tytuł oferuje kilka wariantów rozgrywki. Po pierwsze, jest to
                tryb fabularny. Opowiedziana w nim historia toczy się w świecie
                inspirowanym klasycznym fantasy. Oprócz tego twórcy udostępnili
                również tryb pojedynków, w którym mamy możliwość stoczenia
                szybkich starć z innymi graczami bądź sztuczną inteligencją,
                oraz tzw. Pandorę. W tej ostatniej losowy zestaw kart i gramy
                dopóki nie poniesiemy trzech porażek. Im więcej zwycięstw
                odniesiemy przy tak skonstruowanych zasadach, tym lepsze nagrody
                zgarniemy.
              </p>
            </section>

            <Picture
              source={articleImg}
              alt="Plansza z gry Faeria"
              classes="float-lg-start me-lg-3 responsive"
            />

            <section>
              <h2>Mechanika</h2>

              <p>
                Faeria oferuje mocno nietypowe podejście do tematyki karcianek.
                Zabawa sprowadza się tradycyjnie do bitew między dwoma graczami
                toczonymi za pomocą kart losowanych ze skomponowanych przez nich
                talii, przy jednoczesnym gromadzeniu zasobów i wykorzystywaniu
                ich do prowadzenia wojny. Karty reprezentują zarówno bohaterów,
                jak i efekty oraz zaklęcia, ale nie możemy ich zagrywać
                swobodnie. Zamiast tego ekran wypełnia mapa podzielona na heksy,
                na którą musimy wrzucać karty.Co jednak ciekawe, gdy zaczynamy
                zabawę, mapa jest pusta. Dopiero poprzez nasze akcje zapełnia
                się heksami, po których potem mogą poruszać się przywołani
                bohaterowie. Tym samym to sami gracze kształtują pole bitewne, a
                odmienne typy dostępnego terenu mocno wpływają na zachowanie
                jednostek i zaklęć. W połączeniu z faktem, że aby rozpocząć
                walkę postacie muszą znaleźć się na sąsiadujących pozycjach daje
                to oryginalny system, skutecznie wyróżniający Faeria na tle
                licznej konkurencji. Dodatkową zaletą gry jest to, że gra
                pozwala na rywalizację posiadaczom różnych platform, a konta są
                wspólne dla wszystkich wersji.
              </p>
            </section>
          </MainContent>
        </Col>

        <Col className="d-none d-lg-block">
          <Sidebar>
            <Picture
              source={sidebarImg}
              alt="Gabrian Warden"
              classes="img-fluid shadow-lg large"
            />
          </Sidebar>
        </Col>
      </Row>
    </Container>
  );
}
