import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "../../styles/details.css";
import { Link } from "react-router-dom";
import { ArrowReturnLeft } from "react-bootstrap-icons";

export const Planets = () => {
  const params = useParams();
  const [planetDetails, setPlanetDetails] = useState([]);

  const getPlanetDetails = async () => {
    const response = await fetch(
      `https://www.swapi.tech/api/planets/${params.uid}`
    );
    const data = await response.json();
    const details = data;
    setPlanetDetails(details.result.properties);
  };
  getPlanetDetails();

  return (
    <>
      <div className="container d-flex justify-content-between">
        <div className="details-page">
          <h1>{planetDetails.name}</h1>
          <div className="d-flex justify-content-center">
            <p className="details-page pe-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              nesciunt, vitae quibusdam iusto illum animi iste aliquam autem
              dolores, fuga, blanditiis doloribus incidunt optio provident sed
              tenetur beatae magni eaque minus! Nam amet optio, quod incidunt
              doloremque at beatae quisquam tempore dolorum repellendus,
              deserunt quaerat? Saepe pariatur totam necessitatibus ipsam, rem
              ad exercitationem similique possimus! Consectetur, saepe! Minima
              perspiciatis eligendi tempora inventore tenetur officiis
              accusantium, totam porro hic dolorum itaque sunt laudantium
              similique iste pariatur praesentium. Quaerat possimus cumque aut
              commodi temporibus consequatur iste aspernatur laudantium. Iure
              exercitationem voluptate modi quia eveniet sapiente velit,
              corrupti quidem minus culpa, natus harum quod. Est quo, laudantium
              veritatis, impedit fugiat dolorum, perspiciatis vero dignissimos
              repudiandae incidunt quaerat quod eos accusantium. Deleniti, cum
              quos?
            </p>
            <img
              className="pb-5"
              src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}
              alt=""
            />
          </div>
          <div class="row pb-5">
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Name</h5>
                  <p class="card-text">{planetDetails.name}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Diameter</h5>
                  <p class="card-text">{planetDetails.diameter}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Population</h5>
                  <p class="card-text">{planetDetails.population}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Terrain</h5>
                  <p class="card-text">{planetDetails.terrain}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Oribital Period</h5>
                  <p class="card-text">{planetDetails.orbital_period}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Rotation Period</h5>
                  <p class="card-text">{planetDetails.rotation_period}</p>
                </div>
              </div>
            </div>
          </div>
          <Link to={"/"}>
            <button className="btn btn-dark">
              <ArrowReturnLeft size={35} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
