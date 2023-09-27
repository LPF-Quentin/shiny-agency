import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav>
      <Link to="/">Acceuil</Link>
      <Link to="/survey">questionnaire</Link>
    </nav>
  );
}

export default Header;
