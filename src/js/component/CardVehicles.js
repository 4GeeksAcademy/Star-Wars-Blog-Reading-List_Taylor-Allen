import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Star } from "react-bootstrap-icons";
import "../../styles/cardbuttons.css";

const CardVehicles = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h3 className="neon-text p-5">Vehicles</h3>
      <div className="d-flex justify-content-center">
        <div className="container row row-col-5">
          {store.vehicles.map((vehicle) => {
            return (
              <div key={vehicle.uid} id="vehicles" className="container col">
                <div className="mb-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <div>
                      <img
                        className="img-fluid rounded"
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                        alt={vehicle.properties.name}
                      />
                    </div>
                    <div className="">
                      <div className="card-body">
                        <h5 className="card-title">
                          {vehicle.properties.name}
                        </h5>
                        <p className="card-text">{vehicle.properties.lenght}</p>
                        <p className="card-text">
                          Passengers:
                          {vehicle.properties.passengers}
                        </p>
                        <p className="card-text">
                          Model:
                          {vehicle.properties.model}
                        </p>
                        <div className="card-text d-flex justify-content-between">
                          <Link
                            to={`/vehicles/${vehicle.uid}`}
                            className="btn btn-light"
                          >
                            Learn More
                          </Link>
                          <button
                            onClick={() => {
                              actions.handleFavorite({
                                name: vehicle.properties.name,
                                _id: vehicle._id,
                              });
                            }}
                            className="favorite-button btn btn-warning"
                          >
                            <Star size={25} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardVehicles;
