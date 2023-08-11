import * as C from "./Styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getMovieById,
  getMovieVideos,
  getMovieCredits,
  getMovieSimilar,
} from "../../services/getData";
import GetImages from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres/SpanGenres.jsx";
import Credits from "../../components/Credits/Credits.jsx";
import Slider from "../../components/Slider/index";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id),
      ])
        .then(([movie, videos, credits, similar]) => {
          console.log({ movie, videos, credits, similar });
          setMovie(movie);
          setMovieVideos(videos);
          setMovieCredits(credits);
          setMovieSimilar(similar);
        })
        .catch((error) => console.error(error));
    }

    getAllData();
  });

  return (
    <>
      {movie && (
        <>
          <C.Background image={GetImages(movie.backdrop_path)} />
          <C.Container>
            <C.Cover>
              <img src={GetImages(movie.poster_path)} />
            </C.Cover>
            <C.Info>
              <h2>{movie.title}</h2>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </C.Info>
          </C.Container>
          <C.ContainerMovies>
            {movieVideos &&
              movieVideos.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </C.ContainerMovies>
          {movieSimilar && (
            <Slider info={movieSimilar} title={"Filmes Recomendados"} />
          )}
        </>
      )}
    </>
  );
}

export default Details;
