import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import "./SearchInput.css";

function SearchInput({ handleFilter, placeholder, data, query, clearInput }) {
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
        {query.length > 0 ? (
          <CloseIcon className="closeBtn" onClick={clearInput} />
        ) : (
          <SearchIcon />
        )}
      </div>
    </div>
  );
}

export default SearchInput;
