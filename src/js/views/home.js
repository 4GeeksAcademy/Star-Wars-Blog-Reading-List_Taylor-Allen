import React, { useContext } from "react";
import "../../styles/home.css";
import CardCharacter from "../component/CardCharacter.js";
import { Context } from "../store/appContext";
import CardPlanets from "../component/CardPlanets.js";
import CardVehicles from "../component/CardVehicles.js";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <CardCharacter />
      <CardPlanets />
      <CardVehicles />
    </>
  );
};
