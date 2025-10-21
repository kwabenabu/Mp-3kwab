import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div id="page-wrapper">
      <Header />
      <div id="container">
        <Nav />
        <Main>
          <h1>References</h1>
          <ul>
            <li>
              <p>Name: Prof. Czik</p>
              <p>Position: Boss</p>
              <p>Contact: czik@bu.edu</p>
            </li>
            <li>
              <p>Name: Lydia Holyk</p>
              <p>Position: Boss</p>
              <p>Contact: LHocky@bu.edu</p>
            </li>
          </ul>
        </Main>
      </div>
      <Footer />
    </div>
  );
}
