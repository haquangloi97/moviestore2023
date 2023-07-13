import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { ValuesContext } from "../App";

const Main = () => {
  const { movies } = useContext(ValuesContext);
  return (
    <div className="pt-5">
      <Container>
        <Row md={3} lg={4} xl={5}>
          {movies?.length > 0 ? (
            <>
              {movies.map((movie, index) => (
                <Col key={index}>
                  <div className="d-grid gap-3 mb-4 text-center">
                    <img
                      src={movie.Poster}
                      width={200}
                      height={300}
                      className="mx-auto rounded-4 posterImages"
                      alt={movie.Title}
                      title={movie.Title}
                    />
                    <h4 className="text-truncate">{movie.Title}</h4>
                  </div>
                </Col>
              ))}
            </>
          ) : (
            <>
              <h4>Movie not found!</h4>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Main;
