import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import NavBar from "./NavBar";
import SingleCardMyList from "./SingleCardMyList";

function MyList() {
  const { mylist } = useContext(GlobalContext);

  return (
    <div className="mylist">
      <NavBar />
      <div className="mylist-lettering"></div>
      <div className="mylist-main-container">
        {mylist.length > 0 ? (
          <div className="mylist-films-container">
            {mylist.map((movie) => (
              <SingleCardMyList key={movie.id} movie={movie} type="mylist" />
            ))}
          </div>
        ) : (
          <h2 className="mylist-empty-list">
            Your list is empty, add some films...
          </h2>
        )}
      </div>
    </div>
  );
}

export default MyList;
