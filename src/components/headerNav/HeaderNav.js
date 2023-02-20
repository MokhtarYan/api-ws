import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Link to={`/`} className="titleNa">
            <img
              id="thumb"
              src="https://media.tenor.com/0MIZalDWd9wAAAAC/michael-jackson.gif"
              alt=""
            />{" "}
            Michael Jackson Mania
          </Link>

          <Nav
            className="me-auto"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Link to={`/`} className="titleNav">
              Home
            </Link>
            <Link to={`/Albums`} className="titleNav">
              ALBUMS
            </Link>
            <Link to={`/Episodes`} className="titleNav">
              EPISODES
            </Link>
            <Link to={`/Podcasts`} className="titleNav">
              PODCASTS
            </Link>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="light">Search</Button>
            </Form>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
