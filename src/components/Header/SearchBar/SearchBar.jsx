import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { getAllUsers, channelsGet } from "../../../api/api-users";
import avatar from "../../../avatar-placeholder.png";
import "./SearchBar.scss";
import { CgLock } from "react-icons/cg";
// import { channelsGet } from "../../../api/api-channels";

const SearchBar = ({ handleOpenSearchBar }) => {
  const [itemsList, setItemsList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // const loginData = JSON.parse(sessionStorage.getItem("userLoggedInDetails"));

  const params = useParams();

  useEffect(() => {
    (async () => {
      const response = await getAllUsers();

      const response2 = await channelsGet();
      console.log(response2);

      setItemsList(response["data"]["data"].concat(response2["data"]["data"]));
    })();
  }, []);

  const searchResults = () => {
    console.log(itemsList);

    const filteredResults = itemsList.filter((item) => {
      if (searchInput == "") {
        return "";
      } else if (item.hasOwnProperty("uid")) {
        if (item.uid.toLowerCase().includes(searchInput.toLowerCase())) {
          return item;
        }
      } else if (!item.hasOwnProperty("uid")) {
        if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
          return item;
        }
      }
    });
    return (
      <div className="searchBar_results">
        {filteredResults.map((result) => {
          if (result.email) {
            return (
              <NavLink
                to={`/${params.uid}/messages/${result.id}`}
                key={result.id}
              >
                <div
                  title="searchBar_results_items"
                  className="searchBar_results_items"
                  onClick={handleOpenSearchBar}
                >
                  <img src={avatar} />
                  <h3>{result.email}</h3>
                </div>
              </NavLink>
            );
          } else {
            return (
              <NavLink
                to={`/${params.uid}/channels/${result.id}`}
                key={result.id}
              >
                <div
                  title="searchBar_results_items"
                  className="searchBar_results_items"
                  onClick={handleOpenSearchBar}
                >
                  <CgLock color="black" />
                  <h3>{result.name}</h3>
                </div>
              </NavLink>
            );
          }
        })}
      </div>
    );
  };

  return (
    <div className="searchBar_container">
      <div className="searchBar_items">
        <div className="searchBar_input">
          <FiSearch className="searchBar-icon" />
          <input
            title="searchBar_input"
            type="text"
            autoFocus
            placeholder="Input Search. Beep boop."
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
          />
          <GrFormClose className="icon-close" onClick={handleOpenSearchBar} />
        </div>
        {searchResults()}
      </div>
    </div>
  );
};

export default SearchBar;
