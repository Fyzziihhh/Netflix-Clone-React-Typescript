import React, { useEffect, useState } from "react";
import "./TitleCard.css";
import axios from "axios";

import { Link } from "react-router-dom";

export interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  release_date:string;
  vote_average:number;
}
interface ITitleCard {
  title: string;
  genreId: number | string;
  category: string;
}

function TitleCard({ title, genreId, category }: ITitleCard) {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [checkGenre, setCheckGenre] = useState<string | boolean>("");

  useEffect(() => {
    if (genreId) {
      setCheckGenre(`with_genres=${genreId}`);
    } else {
      setCheckGenre("");
    }
  
  }, [genreId]);

  useEffect(() => {
    if (category) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${category}?api_key=7f32be7b6f605fd308743c0cbb1ca18f&language=en-US&page=1`
        )
        .then((response) => setMovieData(response.data.results))
        .catch((error) => console.error("Error fetching movie data:", error));
    }
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=7f32be7b6f605fd308743c0cbb1ca18f&language=en-US&${checkGenre}&page=1`
      )
      .then((response) => setMovieData(response.data.results))
      .catch((error) => console.error("Error fetching movie data:", error));
  }, [checkGenre, category]);



  return (
    <div className="title-card mt-4 mb-8 ">
      <h1 className="mb-4 font-bold text-2xl">
        {title ? title : "Popular on Netflix"}
      </h1>
      <div className="card-list  relative  flex gap-3 overflow-auto p-2 z-30">
        {movieData.map((movie: Movie) => (
          <Link key={movie.id}  to={`/player/${movie.id}`} className="no-underline">
            <div className="card relative group" >
              <img
                className=" rounded-xl cursor-pointer "
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt=""
              />
        
              <div className="overlay-text w-full bg-slate-400 px-4">
                 <p className=" mt-20 font-bold text-lg ">{movie.title}</p>
                 <div className="flex justify-between text-xs ">
                 <p> Released On : {movie.release_date}</p>
                 <p >Rating : <span className="font-bold">{movie.vote_average.toFixed(1)}</span></p>

                 </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TitleCard;
