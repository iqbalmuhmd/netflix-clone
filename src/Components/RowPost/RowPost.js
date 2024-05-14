import YouTube from "react-youtube";
import React, { useEffect, useState } from "react";
import { imageUrl, API_KEY } from "../Constants/Constants";
import axios from "../axios";
import "./RowPost.css";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [url, setUrlId] = useState("");

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("NetworkError");
      });
  });

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const movieHandler = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching movie videos:", error);
      });
  };
  const handleClickClose = () => {
    setUrlId("");
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => movieHandler(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          />
        ))}
      </div>
      {url && (
        <button className="close_btn" onClick={() => handleClickClose()}>
          {" "}
          X
        </button>
      )}
      {url && <YouTube opts={opts} videoId={url.key} />}
    </div>
  );
}

export default RowPost;
