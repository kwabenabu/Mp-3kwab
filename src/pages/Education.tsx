import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Education() {
  return (
    <div id="page-wrapper">
      <Header />
      <div id="container">
        <Nav />
        <Main>
          <div className="education" id="education">
            <h1>
              Boston University is situated a mile outside of downtown Boston in the Fenway-Kenmore area.
            </h1>
            <img id="edimg" src="/Boston.png" alt="Boston University" />
            <h2>Notable Alumni</h2>
            <ul>
              {/* <li>
                Martin Luther King
                <img src="/MartinLutherKing.png" alt="Martin Luther King" />
              </li> */}
              {/* <li>
                Alexandria Ocasio Cortez
                <img src="/AlexandriaCortez.png" alt="Alexandria Cortez" />
              </li> */}
              {/* <li>
                Kwabena the Goat Ampomah
                <img src="/kwab.png" alt="Kwabena Ampomah" />
              </li> */}
            </ul>
          </div>
        </Main>
      </div>
      <Footer />
    </div>
  );
}
