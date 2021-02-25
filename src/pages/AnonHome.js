import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
const AnonHome = () => {
  return (
    <>
      <Jumbotron className="m-3">
        <h1>Carpe Caseum </h1>
        <p>
          Il est temps de prendre le temps, d'apprécier les bonnes choses,
          l'amitié, le partage. Raclette Party et l'antithèse du réseau social
          tel qu'on le connait. Ici, il faut prendre son temps, apprécier ses
          échanges, et se rencontrer.
        </p>
        <p>
          <Button variant="primary">S'inscrire</Button>
        </p>
      </Jumbotron>
    </>
  );
};

export default AnonHome;
