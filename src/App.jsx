//Todo: Filter by region
//Todo: Search country 

import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import "./styles/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon} from "@fortawesome/free-solid-svg-icons";
import ListCountries from "./components/ListCountries";
import EspecificCountry from "./components/EspecificCountry";

function App() {
  return (
    <div>
      <header>
        <h1>Where in the world?</h1>
        <a href="/">
          <FontAwesomeIcon className="header_icon" icon={ faMoon } />
          Dark Mode
        </a>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={ <ListCountries/> }></Route>
          <Route path="*" element={ <Navigate to='/'/> }></Route>
          <Route path="/country/:countryName" element={ <EspecificCountry/> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
