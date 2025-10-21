import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function References() {
  return (
    <div id="page-wrapper">
      <Header />
      <div id="container">
        <Nav />
        <Main>
          <h1 className="page-title">References</h1>
          <ul className="refs" id="refs">
            <li>
              <p>Sally Li</p>
              <p>Position: Boss</p>
              <p>Contact: futureceo@gmail.com</p>
            </li>
            <li>
              <p>Name: Queen Sally</p>
              <p>Position: Queen</p>
              <p>Contact: QueenSallyceoboss@bu.edu</p>
            </li>
          </ul>

          {/* Optional personal section if you’d like to include it later */}
          {/* 
          <h3>Personal</h3>
          <ul className="refs" id="personal-refs">
            <li>
              Name: Kwabena Ampomah <br />
              Relation: Myself <br />
              Contact: kwabamp@bu.edu
            </li>
            <li>
              Name: Mayah Ampomah <br />
              Relation: Sister <br />
              Contact: mamp@neu.edu
            </li>
          </ul>
          */}
        </Main>
      </div>
      <Footer />
    </div>
  );
}
