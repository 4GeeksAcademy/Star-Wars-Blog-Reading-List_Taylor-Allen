import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home.js";
import { Characters } from "./views/Characters.js";
import { Planets } from "./views/Planets.js";
import { Vehicles } from "./views/Vehicles.js";
import injectContext from "./store/appContext";
import { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  const { store, actions } = useContext(Context);
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters/:uid" element={<Characters />} />
          <Route path="/planets/:uid" element={<Planets />} />
          <Route path="/vehicles/:uid" element={<Vehicles />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
