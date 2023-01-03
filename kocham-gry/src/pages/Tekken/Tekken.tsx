import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import MainContent from "../../components/MainContent/MainContent";
import Picture from "../../components/Picture/Picture";
import Sidebar from "../../components/Sidebar/Sidebar";

import sidebarImg from "./assets/sidebarImg.jpg";

export default function Tekken() {
  return (
    <Container fluid="md">
      <Row>
        <Col xs={12} lg={8}>
          <MainContent>
            <section>
              <header>
                <h2>Tekken</h2>
              </header>

              <p className="lead">
                Tekken jest bijatyką 3D stworzoną i wydaną przez japońską firmę
                Namco pod koniec 1995 roku na konsolę PlayStation. Jest to
                pierwsza odsłona popularnej serii Tekken, jaka pojawiła się na
                platformie Sony. Produkcja Namco na automatach w Japonii
                zadebiutowała już w grudniu 1994 roku. Gra dodawana jest jako
                bonus w Tekken 5 na PlayStation 2.
              </p>
            </section>

            <section>
              <header>
                <h2>Historia</h2>
              </header>

              <p>
                Wprawdzie Tekken nie był pierwszą trójwymiarową bijatyką, gdyż
                miano to przypisuje się Virtua Fighter (choć gry traktujące o
                walce i oparte o grafikę wektorową istniały już wcześniej),
                jednak to właśnie tytuł Namco ukazał piękno i potencjał grafiki
                3D - nie tylko z animacją wyświetlaną w 50/60 klatkach na
                sekundę (system PAL i NTSC), ale zwłaszcza z efektownymi
                ujęciami kamer w trakcie wykonywania rzutów. Lista ciosów, jakże
                uboga z dzisiejszego punktu widzenia, po prostu deklasowała
                wszelką konkurencję licznymi, przeprogramowanymi combosami. W
                tym także, stanowiącymi ukłon w stronę Killer Instinct, słynnymi
                „dziesiątkami”, czyli sekwencjami przeprogramowanych dziesięciu
                uderzeń. Już wtedy pojawiły się również tzw. multipart throws u
                dwóch zawodniczek - Niny i Anny. Przy odpowiednim chwyceniu
                przeciwnika, można było szybko wklepać odpowiednią kombinację,
                by postać wykonała z chwytu np. łamanie ręki.
              </p>
            </section>

            <section>
              <header>
                <h2>Rozgrywka</h2>
              </header>

              <p>
                Każdy z dostępnych wojowników miał swoje własne nemezis, które
                można było odblokować jako grywalną postać. Na tamte czasy był
                to istny fenomen. Co ciekawe, na początku kariery PlayStation
                nieco blasku pierwszemu Tekkenowi skradło Battle Arena
                Toshinden, prezentujące uzbrojone postacie, które w dodatku
                szastały efektownymi ciosami specjalnymi i walczyły na w pełni
                trójwymiarowych arenach. Programiści z Namco w tym temacie
                postawili na nieograniczone, płaskie plansze. W pierwszym
                Tekkenie dostępnych było łącznie osiemnaście postaci. Byli to:
                Anna Williams, Armor King, Devil Kazuya, Ganryu, Heihachi
                Mishima, Jack, Kazuya Mishima, King, Kuma, Kunimitsu, Lee
                Chaolan, Marshall Law, Michelle Chang, Nina Williams, Prototype
                Jack, Paul Phoenix, Wang Jinrei oraz Yoshimitsu. Bijatyka spod
                dłuta Namco trafiła do Księgi Rekordów Guinnesa jako pierwszy
                tytuł na PlayStation, który rozszedł się w liczbie
                przekraczającej milion sztuk.
              </p>

              <p>
                Grafika 3D starzeje się niezwykle szybko, a Tekken to jedna z
                pierwszych gier tego typu, nic więc dziwnego, że dziś jest
                praktycznie nie do zaakceptowania. Zasadnicza nuta niektórych
                utworów towarzyszy nam do dziś, ale odgłosy postaci brzmią
                bardzo sztucznie.
              </p>
            </section>
          </MainContent>
        </Col>

        <Col className="d-none d-lg-block">
          <Sidebar>
            <Picture
              source={sidebarImg}
              alt="Tekken 7"
              classes="img-fluid shadow-lg large"
            />
          </Sidebar>
        </Col>
      </Row>
    </Container>
  );
}
