import React from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import Banner from "./Components/Banner/Banner.js";
import RowPost from "./Components/RowPost/RowPost.js";
import { orginals, action, horror, romance } from "./urls.js";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RowPost url={orginals} title={"Netflix Orginals"} />
      <RowPost url={action} title={"Action/Comedy"} isSmall />
      <RowPost url={horror} title={"Sci-Fi/Mystery"} isSmall />
      <RowPost url={romance} title={"Romantic/Thriller"} isSmall />
    </div>
  );
}

export default App;
