import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as C from "./Styles";
import Slider from "../../components/Slider";
import Button from "../../components/Button/";
import Modal from "../../components/Modal/";
import GetImages from "./../../utils/getImages";

import {
  getMovies,
  getPopularSeries,
  getTopMovies,
  getTopPeople,
  getTopSeries,
} from "../../services/getData";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [popularPeople, setPopularPeople] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopPeople(),
      ])
        .then(([movie, topMovies, topSeries, popularSeries, topPeople]) => {
          setMovie(movie);
          setTopMovies(topMovies);
          setTopSeries(topSeries);
          setPopularSeries(popularSeries);
          setPopularPeople(topPeople);
        })
        .catch((error) => console.error(error))
    }

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <C.Background img={GetImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <C.Container>
            <C.Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <C.ContainerButton>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </C.ContainerButton>
            </C.Info>
            <C.Poster>
              <img src={GetImages(movie.poster_path)} alt="capa-do-filme" />
            </C.Poster>
          </C.Container>
        </C.Background>
      )}
      {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
      {topSeries && <Slider info={topSeries} title={"Top Series"} />}
      {popularSeries && (
        <Slider info={popularSeries} title={"Popular Series"} />
      )}
      {popularPeople && (
        <Slider info={popularPeople} title={"Popular People"} />
      )}
    </>
  );
}

export default Home;
