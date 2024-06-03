import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    featchData();
  }, []);

  const featchData = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971445514841218&lng=77.70035739988089&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );

  if (listOfRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className=" m-4 p-4">
          <input
            type="text"
            className="border border-solid rounded-md border-gray-600 mr-4"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-600 rounded-lg px-4 py-2 text-white"
            onClick={() => {
              const searchedRes = listOfRes.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredListOfRes(searchedRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex m-4 p-4">
          <button
            className=" bg-blue-500 rounded-lg px-4 text-white"
            onClick={() => {
              const topRes = listOfRes.filter(
                (res) => res.info.avgRating > 4.0
              );
              setListOfRes(topRes);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ml-10">
        {filteredListOfRes.map((res) => (
          <Link
            key={res.info.id}
            style={{ textDecoration: "none" }}
            to={"/restaurants/" + res.info.id}
          >
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
