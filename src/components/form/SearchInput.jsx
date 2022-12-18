import SearchIcon from "@mui/icons-material/Search";
import "./SearchInput.css";

function SearchInput({ handleFilter, placeholder, data, query }) {
  return (
    <div className="searchInputs">
      <input
        type="text"
        placeholder={placeholder}
        data={data}
        value={query}
        onChange={handleFilter}
      />
      <div className="searchIcon">
        <SearchIcon />
      </div>
    </div>
  );
}

export default SearchInput;
