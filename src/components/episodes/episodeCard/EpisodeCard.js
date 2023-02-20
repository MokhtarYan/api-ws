import React from "react";
import { Card } from "react-bootstrap";

const EpisodeCard = ({ episode }) => {
  return (
    <div>
      <Card
        style={{
          width: "250px",
          height: "400px",
          marginBottom: "10px",
          marginLeft: "30px",
        }}
      >
        <Card.Img
          variant="top"
          src={episode.data.coverArt.sources[0].url}
          className="pic"
        />
        <Card.Body>
          <Card.Title>{episode.data.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EpisodeCard;
