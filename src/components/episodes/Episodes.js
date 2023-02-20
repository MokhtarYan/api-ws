import axios from "axios";
import React, { useEffect, useState } from "react";
import EpisodeCard from "./episodeCard/EpisodeCard";

const Episodes = () => {
  const [episode, setEpisode] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/search/",
      params: {
        q: "michael jackson",
        type: "multi",
        offset: "0",
        limit: "10",
        numberOfTopResults: "5",
      },
      headers: {
        "X-RapidAPI-Key": "3486f354cfmsh6e6ebdcd1c5d748p1297a1jsne7c8e10b6e0b",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setEpisode(response.data.episodes.items);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {" "}
      <h1>EPISODES</h1>
      <div className="episodes">
        {episode.map((el) => <EpisodeCard episode={el} />).slice(0, 8)}
      </div>
    </div>
  );
};

export default Episodes;
