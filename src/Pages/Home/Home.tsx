import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCard from "../../Components/TitleCards/TitleCard";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const genres = [
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 28,
      name: "Action",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 53,
      name: "Thriller",
    },
  ];

  return (
    <div className="home relative">
      <Navbar />
      <div className="hero w-full">
        <div className="overlay-banner">
          <img className="w-full h-full banner-img" src={hero_banner} alt="Hero Banner" />
        </div>
        <div className="hero-caption absolute w-full pl-6p top-96">
          <img src={hero_title} alt="Hero Title" className="caption-img max-w-md w-80p mb-9" />
          <p className="max-w-xl text-xl">
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
          </p>
          <div className="hero-btns flex gap-3 mb-12 mt-2 box-border">
            <button className="outline-none p-4 px-8 py-2 inline-flex items-center text-sm font-semibold bg-white text-black rounded-md gap-2 hover:bg-play-btn-hover">
              <img className="w-5" src={play_icon} alt="Play Icon" />
              Play
            </button>
            <button className="outline-none px-5 py-3 inline-flex items-center text-sm font-semibold bg-info-btn-light text-white rounded-md gap-2 hover:bg-info-btn-hover">
              <img className="w-7" src={info_icon} alt="Info Icon" /> More Info
            </button>
          </div>
        </div>
        <div className="more-cards pl-6p -mt-40">
          <TitleCard
            key="now_playing"
            title="Now Playing On Netflix"
            genreId=""
            category="now_playing"
          />
          {genres.map((genre) => (
            <TitleCard
              key={genre.id}
              title={genre.name}
              genreId={genre.id}
              category=""
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
