import { CDN_URL } from "../utils/constants";
import { addItem } from "./../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items, showButton }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between m-2 p-2 border-b-2 border-gray-300"
        >
          <div className="w-9/12 ">
            <span className="m-2 p-2 font-bold">{item?.card?.info?.name}</span>
            <span className="font-bold">
              - ₹
              {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                100}
            </span>
            <p className="m-2 px-2">{item?.card?.info?.description}</p>
          </div>
          <div>
            <div>
              <div>
                {showButton && (
                  <div className="absolute mx-8 my-20">
                    <button
                      className="bg-white px-2 py-1 m-auto rounded-lg text-green-700 font-bold"
                      onClick={() => handleAddItem(item)}
                    >
                      ADD
                    </button>
                  </div>
                )}

                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  className="w-28 h-28 rounded-lg"
                ></img>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
