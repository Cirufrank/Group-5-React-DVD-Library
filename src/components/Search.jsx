import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Dvd from "./Dvd.jsx";
import useFetch from "../hooks/useFetch";
import { UserContext } from "../context/UserContext";

function Search() {
  const [dvdsSearch, setDvdsSearch] = useState("");
  const [userHasSearched, setUserHasSearched] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  let url = `http://dvd-library.us-east-1.elasticbeanstalk.com/dvds`;
  const [dvdData, error] = useFetch(url);
  const user = useContext(UserContext);

  function filterDvdData(searchTerm) {
    setUserHasSearched(true);
    setDvdsSearch(searchTerm);

    let filteredResults;

    if (searchTerm == "") {
      filteredResults = [];
      setUserHasSearched(false);
    } else {
      filteredResults = dvdData.filter((dvd) => {
        return (
          dvd.title.includes(searchTerm)
        );
      });
    }

    setSearchResults(filteredResults);
  }

  return (
    <div>
      <header className="flex flex-col md:flex-row justify-between">
        <p className="pl-14 mt-8 md:w-1/3 text-gray-700 font-semibold italic self-center">Welcome, {user.userName}</p>
      <nav className="w-full flex justify-end mt-8">
        <Link
          to="/create"
          className=" w-11/12 m-auto lg:w-1/6 text-center text-lg py-4 px-6 rounded-full border-2 lg:mr-16 text-gray-100 border-green-600 bg-green-600 hover:bg-gray-50 hover:border-green-600  hover:text-green-600 hover:shadow-2xl  "
        >
          Add Dvd
        </Link>
      </nav>
      </header>

      <SearchBar
        searchValue={dvdsSearch}
        searchValueFunction={filterDvdData}
      />

      <table className="flex justify-center my-4">
      <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Release Year</th>
                    <th scope="col">Director</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Notes</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
        {userHasSearched ? (
          <>
            <div
              className={
                searchResults.length > 0
                  ? "hidden"
                  : "bg-red-100 border border-red-400 text-red-700  md:w-2/5 lg:max-w-md px-4 py-3 rounded-md"
              }
              role="alert"
            >
              <p className="text-center">
                <strong>Sorry!</strong> There are no Dvds with the name of{" "}
                <strong>{dvdsSearch}</strong>
              </p>
            </div>
            <tbody
              className={
                searchResults.length > 0
                  ? "grid grid-cols-3 gap-2 place-items-center"
                  : "hidden"
              }
            >
              {searchResults.map((dvd) => {
                return (
                  <Link key={dvd.id} to={`/${dvd.id}`}>
                    <Dvd
                      // Delete key={contact.contactId}
                      title={dvd.title}
                      releaseYear={dvd.releaseYear}
                      director={dvd.director}
                      rating={dvd.rating}
                      notes={dvd.notes}
                    />
                  </Link>
                );
              })}
            </tbody>
          </>
        ) : (
          <tbody>
            {dvdData.map((dvd) => {
              return (
                <Link key={dvd.id} to={`/${dvd.id}`}>
                    <Dvd
                      // Delete key={contact.contactId}
                      title={dvd.title}
                      releaseYear={dvd.releaseYear}
                      director={dvd.director}
                      rating={dvd.rating}
                      notes={dvd.notes}
                    />
                  </Link>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default Search;
