import React, { useContext } from "react";
import { userContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Home() {
  const { user, setUser } = useContext(userContext);
  return (
    <div className="w-1/2 mx-auto mt-10">
      <ul>
        {user.length > 0 ? (
          user.map((items, index) => {
            return (
              <Link to={`/user/${items.id}`}>
                <li key={index} className="w-1/2 p-4 bg-red-300 rounded-md mb-2 hover:bg-red-400">
                  {items.username}
                </li>
              </Link>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </div>
  );
}

export default Home;
