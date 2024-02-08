const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      vehicles: [],
	  favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getPeople: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((resp) => {
            if (!resp.ok) throw Error(resp.statusText);
            return resp.json();
          })
          .then((data) => {
            console.log(data);

            setStore({ people: data });
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((resp) => {
            if (!resp.ok) throw Error(resp.statusText);
            return resp.json();
          })
          .then((data) => {
            console.log(data);

            setStore({ planets: data });
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles/")
          .then((resp) => {
            if (!resp.ok) throw Error(resp.statusText);
            return resp.json();
          })
          .then((data) => {
            console.log(data);

            setStore({ vehicles: data });
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
};

export default getState;
