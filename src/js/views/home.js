import React from "react";
import "../../styles/home.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Star } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div
      className="container"
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://starwars-visualguide.com/assets/img/characters/1.jpg"
          className="object-fit-scale border rounded"
        />
        <Card.Body>
          <Card.Title>Luke Skywalker</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Body className="d-flex justify-content-between">
          <Link to={"/single"}>
            <Card.Link className="btn btn-outline-dark">Learn More!</Card.Link>
          </Link>
          <Card.Link href="#" className="btn btn-outline-warning p-auto">
            <Star size={20} />
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
