import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

function DvdDetails() {
  let { dvdId } = useParams();
  var navigate = useNavigate();
  let url = `http://dvd-library.us-east-1.elasticbeanstalk.com/dvd/${dvdId}`;
  const [data, error] = useFetch(url);
  const [updateDvdsData, setUpdateDvdsData] = useState(data);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setUpdateDvdsData(data);
  }, [data]);

  function handleUpdatingValue(e) {
    setUpdateDvdsData({
      ...updateDvdsData,
      [e.target.id]: e.target.value,
    });
  }

  function updateDvd() {
    if (editing === true) {
      setEditing(!editing);

      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateDvdsData),
      });
    } else {
      setEditing(!editing);
    }
  }

  async function deleteDvd() {
    await fetch(url, {
      method: "DELETE",
    });

    navigate("/");
  }

  // Testing our Error Boundary by throwing an error
  // throw new Error("Lets Crash our App to test our new Error Boundary");

  return (
    <>
      <nav className="md:w-3/4 m-auto mt-8 ">
        <button
          aria-label="Navigates back to the home page"
          onClick={() => navigate("/")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </button>
      </nav>

      {/* Show Error if data is null */}
      {error !== null ? (
        <div
          className="bg-red-100 border border-red-400 text-red-700  md:w-2/5 lg:max-w-md px-4 py-3 rounded-md m-auto mt-24"
          role="alert"
        >
          <p className=" text-xl text-center">
            <strong>Sorry!</strong> It seems that this contact is missing or has
            been deleted.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center my-16 mx-2 md:w-1/2 lg:w-2/5 md:mx-auto shadow-xl bg-gray-50 rounded  pt-8 p-4 px-8">
          <div className="flex flex-col items-center ">
            {/* Start of DVD title */}
            <div className="flex flex-col justify-center w-64 h-64 bg-gray-300 border-gray-300 rounded-full border-2 shadow-xl text-center p-8 -m-32">

              {!editing ? (
                <h1 className="text-2xl font-semibold">{updateDvdsData.title}</h1>
              ) : (
                <form className="flex justify-around ">
                  <label htmlFor="title" className="sr-only">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={updateDvdsData.title}
                    onChange={handleUpdatingValue}
                    className="font-light text-xl w-24 mr-2 p-1 rounded"
                  />
                </form>
              )}
            </div>
            {/* End of DVD title */}

            {/* Remaining DVD fields */}

            {!editing ? (
              <div className="grid grid-cols-2 gap-3 items-center justify-items-center mt-32 pt-8">
                {/* Release Year */}
                <h2 className="font-bold text-xl ">Release Year:</h2>
                <p className="font-light text-xl p-1 rounded ">
                  {updateDvdsData.releaseYear}
                </p>

                {/*Director  */}
                <h2 className="font-bold text-xl">Director:</h2>
                <p className="font-light text-xl p-1 rounded ">
                  {updateDvdsData.director}
                </p>

                {/* Rating */}
                <h2 className="font-bold text-xl">Rating:</h2>
                <p className="font-light text-xl p-1 rounded">
                  {updateDvdsData.rating}
                </p>
                {/* Notes */}
                <h2 className="font-bold text-xl">Notes:</h2>
                <p className="font-light text-xl p-1 rounded">
                  {updateDvdsData.notes}
                </p>
              </div>
            ) : (
              <form className="grid grid-cols-2 gap-3 items-center justify-items-center mt-32 pt-8">
                {/* Release Year */}
                <label htmlFor="releaseYear" className="font-bold text-xl">
                  Release Year:
                </label>
                <input
                  type="number"
                  id="releaseYear"
                  value={updateDvdsData.releaseYear}
                  onChange={handleUpdatingValue}
                  className="font-light text-xl"
                />
                {/* Director */}
                <label htmlFor="director" className="font-bold text-xl">
                  Director:
                </label>
                <input
                  type="text"
                  id="director"
                  value={updateDvdsData.director}
                  onChange={handleUpdatingValue}
                  className="font-light text-xl"
                />
                {/* Rating */}
                <label htmlFor="rating" className="font-bold text-xl">
                  Rating:
                </label>
                <input
                  type="text"
                  id="rating"
                  value={updateDvdsData.rating}
                  onChange={handleUpdatingValue}
                  className="font-light text-xl"
                />
                {/* Notes */}
                <label htmlFor="notes" className="font-bold text-xl">
                  Notes:
                </label>
                <input
                  type="text"
                  id="notes"
                  value={updateDvdsData.notes}
                  onChange={handleUpdatingValue}
                  className="font-light text-xl"
                />
              </form>
            )}

            {/* End of contact fields */}

            {/* Edit and Delete Buttons */}
            <div className="flex justify-around my-6 w-2/5 mx-auto pt-2 space-x-4">
              <button
                className="bg-blue-600 rounded-full py-4 px-8 text-white hover:bg-gray-50 hover:border-blue-400  hover:text-blue-400 hover:shadow-2xl border-2"
                onClick={updateDvd}
              >
                {!editing ? "Edit" : "Save"}
              </button>

              {/* Delete Button */}
              <button
                className="bg-red-600 rounded-full py-4 px-8 text-white hover:bg-gray-50 hover:border-red-400  hover:text-red-400 hover:shadow-2xl border-2"
                onClick={deleteDvd}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DvdDetails;
