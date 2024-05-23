import React from "react";
import styles from "./MovieChild.module.css";

const MoviesChild = ({ title, release_year,genres,imdb_rating,length_in_min, poster }) => {
  if (poster === "N/A") return;
  return (
    <div className={styles.card} >
      <img src={poster} alt="Not found" className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3>
          Title : <span>{title}</span>
        </h3>
        <h4>
          Year : <span>{release_year}</span>
        </h4>
        <h4 >
        Genres : <span>{genres}</span>
        </h4>
        <h4 >
        Imdb_rating : <span>{imdb_rating}</span>
        </h4>
        <h4 >
        Length_in_min: <span>{length_in_min}</span>
        </h4>
      </div>
    </div>
  );
};

export default MoviesChild;



