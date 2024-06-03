import ItemList from "./ItemList";

const ResturantCategory = ({ data }) => {
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 shadow-md bg-gray-50 flex justify-between">
        <div>
          <span className="font-bold px-4 py-4">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="px-4 py-4">🔽</span>
        </div>
        <div>
          {data.itemCards.map((item) => (
            <ItemList key={item?.card?.info?.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResturantCategory;
