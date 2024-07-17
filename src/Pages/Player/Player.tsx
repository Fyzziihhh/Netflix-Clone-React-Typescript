import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  published_at: string;
}
function Player() {
  const [TrailerResponse, setTrailerResponse] = useState<Video | null>(null);
  const { id } = useParams();
  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}/videos`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjMyYmU3YjZmNjA1ZmQzMDg3NDNjMGNiYjFjYTE4ZiIsIm5iZiI6MTcyMDg4MjA4NC41NzU5MjQsInN1YiI6IjY0ZTMzODRkNTQ0YzQxMDExYmNhOTllNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PpTgeccsmsr_oS1SOagp7-X_ZLvQinEV3JZgPdQxFzw",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setTrailerResponse(response.data.results[0]);
        console.log(TrailerResponse);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="player h-screen flex flex-col justify-cente items-center">
      <Link to={"/"}>
        <img
          className="absolute top-5 left-5 w-12 cursor-pointer"
          src={back_arrow_icon}
          alt=""
        />
      </Link>
      <iframe
        className="rounded-xl mt-10"
        src={`https://www.youtube.com/embed/${TrailerResponse?.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
        width="90%"
        height="90%"
      ></iframe>
      <div className="player-info flex  items-center justify-between w-90p">
        <p>{TrailerResponse?.published_at.slice(0, 10)}</p>
        <p>{TrailerResponse?.name}</p>
        <p>{TrailerResponse?.type}</p>
      </div>
    </div>
  );
}

export default Player;
