import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/details.css";
import { ArrowReturnLeft } from "react-bootstrap-icons";

export const Characters = () => {
  const params = useParams();
  console.log(params);
  const [CharacterDetails, setCharacterDetails] = useState([]);

  const getCharacterDetails = async () => {
    const response = await fetch(
      `https://www.swapi.tech/api/people/${params.uid}`
    );
    const data = await response.json();
    const details = data;
    console.log(details);
    setCharacterDetails(details.result.properties);
  };
  getCharacterDetails();
  console.log(CharacterDetails);
  return (
    <>
      <div className="container d-flex justify-content-between">
        <div className="details-page">
          <h1>{CharacterDetails.name}</h1>
          <div className="d-flex justify-content-center">
            <p className="dtails-page pe-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              atque quisquam praesentium quae veniam nobis consequuntur culpa
              doloribus reprehenderit deserunt ipsa nostrum, nulla doloremque,
              voluptatem autem. Sequi debitis, non, ex ipsum perferendis ut a
              deserunt tempore blanditiis, at est error reprehenderit similique
              fuga aliquam voluptatum consequatur nostrum molestiae nesciunt
              neque? Deserunt facere reprehenderit architecto similique deleniti
              atque accusamus ut dolorum itaque facilis officia voluptas maxime
              rerum quidem error doloremque ad veritatis vero eveniet,
              voluptatem aperiam. Qui aperiam impedit architecto exercitationem
              mollitia accusamus nulla! Ut laudantium iste qui, dignissimos
              beatae eius debitis dolor vitae sequi dicta unde? Alias asperiores
              eius ullam labore! Culpa velit laudantium, ut quos reiciendis
              animi quia asperiores ducimus recusandae voluptate corrupti cumque
              eum facere. Quam, facilis vero?
            </p>
            <div>
              <img
                className="pb-5"
                src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
                alt=""
              />
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-sm-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                  <p className="card-text">{CharacterDetails.name}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Birth Year</h5>
                  <p className="card-text">{CharacterDetails.birth_year}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Gender</h5>
                  <p className="card-text">{CharacterDetails.gender}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Height</h5>
                  <p className="card-text">{CharacterDetails.height}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Skin Color</h5>
                  <p className="card-text">{CharacterDetails.skin_color}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Eye Color</h5>
                  <p className="card-text">{CharacterDetails.eye_color}</p>
                </div>
              </div>
            </div>
          </div>

          <Link to={"/"}>
            <button className="btn btn-light">
              <ArrowReturnLeft size={35} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
