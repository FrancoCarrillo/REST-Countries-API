import "./styles/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSearch} from "@fortawesome/free-solid-svg-icons";
import ListCountries from "./components/ListCountries";

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
      <div className="action-inputs">
        <div className="input_search">
          <input list="" type={ "search" } className="form-control" placeholder="Search for a country..."></input>
          <FontAwesomeIcon className="search_icon" icon={ faSearch } />
        </div>
          <select className="custom-select" id="inputGroupSelect01">
            <option defaultValue>Choose...</option>
            <option value={ "1" }>One</option>
            <option value={ "2" }>Two</option>
            <option value={ "3" }>Three</option>
          </select>
      </div>
      <ListCountries></ListCountries>
    </div>
  );
}

export default App;
