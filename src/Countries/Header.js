import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header({ setToggle }) {
  
  return (
    <>
      <header className="lighter-dark">
        <div className="container">
          <h1>
            <Link to="/">Where in the world?</Link>
          </h1>
          <div className="dark-mode" onClick={() => setToggle()}>
            <FaMoon />
            <span>Dark Mode</span>
          </div>
        </div>
      </header>
    </>
  );
}
