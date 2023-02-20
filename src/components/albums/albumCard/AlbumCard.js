import React from "react";
import { Card } from "react-bootstrap";

const AlbumCard = ({ album }) => {
  return (
    <div>
      <Card
        style={{
          width: "200px",
          height: "350px",
          marginBottom: "10px",
          marginLeft: "30px",
        }}
      >
        <Card.Img variant="top" src={album.data.coverArt.sources[0].url} />
        <Card.Body>
          <Card.Title>{album.data.name}</Card.Title>
          <Card.Text>Released in : {album.data.date.year}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AlbumCard;
