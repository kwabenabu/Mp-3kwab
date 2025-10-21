import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav id="sally">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/employment">Employment</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/references">References</Link></li>
      </ul>
    </nav>
  );
}
