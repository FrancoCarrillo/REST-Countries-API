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
          <input  list="conutries_list"  type={ "search" } className="form-control" placeholder="Search for a country..."></input>
          <FontAwesomeIcon className="search_icon" icon={ faSearch } />
        </div>
        <select className="custom-select">
          <option>Filter by Region</option>
          <option value={ "Africa" }>Africa</option>
          <option value={ "America" }>America</option>
          <option value={ "Asia" }>Asia</option>
          <option value={ "Europe" }>Europe</option>
          <option value={ "Oceania" }>Oceania</option>
        </select>
        <datalist id="conutries_list">
          <option value={ "Peru" }/>
          <option value={ "EEUU" }/>
          <option value={ "Argentina" }/>
        </datalist>
      </div>
      <ListCountries></ListCountries>
    </div>
  );
}

export default App;
