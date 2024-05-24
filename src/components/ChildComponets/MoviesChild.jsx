import React from "react";
import styles from "./MovieChild.module.css";

const MoviesChild = ({ title, release_year, genres, imdb_rating, length_in_min, poster, movie_url }) => {
  return (
    <div className={styles.card}>
      <img src={poster} alt="poster" className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3>Title : {title}</h3>
        <h3>Year : {release_year}</h3>
        <h3>Genres : {genres}</h3>
        <h3>Imdb_rating : {imdb_rating}</h3>
        <h3>Length_in_min: {length_in_min}</h3>
        <a href={movie_url} target="_blank" >
          <button className={styles.button1}>Read More</button>
        </a>
      </div>
    </div>
  );
};

export default MoviesChild;



