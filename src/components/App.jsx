import { Routes, Route } from "react-router-dom";
import "./App.css";
import Search from "./Search";
import CreateDvd from "./CreateDvd";
import DvdDetails from "./DvdDetails";
import ErrorBoundary from "./ErrorBoundary";
import {UserProvider} from "../context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route
          path="/:dvdId"
          element={
            <ErrorBoundary>
              <DvdDetails />
            </ErrorBoundary>
          }
        />
        <Route path="/create" element={<CreateDvd />} />
      </Routes>
      </UserProvider>
    </>
  );
}

export default App;
