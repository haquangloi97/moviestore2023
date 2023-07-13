import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ValuesContext } from "../App";

const Header = () => {
  const { searchTerm, setSearchTerm, searchMovies } = useContext(ValuesContext);

  return (
    <div className="bg-indigo bg-gradient">
      <Container>
        <div className="d-flex flex-row gap-2 gap-md-0">
          <div className="d-inline-flex flex-md-grow-1">
            <Link className="text-decoration-none text-white py-3" to="/">
              <i className="fa-solid fa-shield-cat pe-md-1 fs-3 align-middle"></i>
              <span className="fs-5 align-middle d-none d-md-inline">
                MovieStore.com
              </span>
            </Link>
          </div>
          <div className="d-inline-flex flex-grow-1 gap-2">
            <div className="position-relative m-auto w-75 flex-grow-1">
              <input
                className="form-control shadow-none border-0 pe-5"
                placeholder="Search movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                onClick={() => searchMovies(searchTerm)}
                className="btn h-100 border-0 btn-dark position-absolute top-0 end-0 rounded-0 rounded-end"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
