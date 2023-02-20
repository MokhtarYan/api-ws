import React from "react";
import { Card } from "react-bootstrap";

const PodcastCard = ({ pod }) => {
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
          src={pod.data.coverArt.sources[0].url}
          className="pic"
        />
        <Card.Body>
          <Card.Title>{pod.data.name}</Card.Title>
          <Card.Text>Publisher : {pod.data.publisher.name}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PodcastCard;
