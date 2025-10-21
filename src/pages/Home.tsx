import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div id="page-wrapper">
      <Header />
      <div id="container">
        <Nav />
        <Main>
          <div className="kwabresume" id="kwabresume">
            <h1>
              Hi, I’m Kwabena Ampomah, a senior studying Computer Science at Boston University (expected May 2026). 
              I specialize in project management with two years of experience leading non-profit tech initiatives and 
              internships in software development and product management.
            </h1>
            <img src="/kwab.png" alt="Kwabena Ampomah" />
          </div>
        </Main>
      </div>
      <Footer />
    </div>
  );
}
