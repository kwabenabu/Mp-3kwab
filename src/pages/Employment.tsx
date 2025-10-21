import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Employment() {
  return (
    <div id="page-wrapper">
      <Header />
      <div id="container">
        <Nav />
        <Main>
          <div className="employment" id="employment">
            <h1>Professional Experience</h1>
            <ul>
              <li>Product Manager Intern – WHOOP (2025)</li>
              <li>Director of Operations – Hack4Impact BU (2024–2025)</li>
              <li>Project Manager – District 6 Civic Tech (2024)</li>
              <li>Software Developer – BU Spark! (2023)</li>
            </ul>
          </div>
        </Main>
      </div>
      <Footer />
    </div>
  );
}
