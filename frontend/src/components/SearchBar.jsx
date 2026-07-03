import { FaSearch, FaFilter } from "react-icons/fa";
import "../styles/search.css";

function SearchBar({
  search,
  setSearch,
  severity,
  setSeverity,
}) {
  return (
    <div className="search-container">

      <div className="search-box">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search disaster alerts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="filter-box">

        <FaFilter className="filter-icon" />

        <select
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
        >
          <option value="">All Severity</option>
          <option value="High">🔴 High</option>
          <option value="Medium">🟠 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>

      </div>

    </div>
  );
}

export default SearchBar;