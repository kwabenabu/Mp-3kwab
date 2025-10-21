import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Achievements() {
  return (
    <div id="page-wrapper">
      <Header />
      <div id="container">
        <Nav />
        <Main>
          <div id="achievements">
            <h2>My Achievements</h2>
            <ul>
              <li>HTML Mastery</li>
              <li>Dean’s List</li>
              <li>Employee of the Month</li>
              <li>Teaching Assistant</li>
              <li>Python Certificate – LinkedIn</li>
              <li>JavaScript Certificate – LinkedIn</li>
              <li>Project Management Certificate</li>
            </ul>
          </div>
        </Main>
      </div>
      <Footer />
    </div>
  );
}
