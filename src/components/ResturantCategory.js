import ItemList from "./ItemList";

const ResturantCategory = ({
  data,
  showItems,
  setShowIndex,
  unSetShowIndex,
}) => {
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 shadow-md bg-gray-50  text-left">
        <div>
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => (showItems ? unSetShowIndex() : setShowIndex())}
          >
            <span className="font-bold px-4 py-4">
              {data.title} ({data.itemCards.length})
            </span>
            <span className="px-4 py-4">🔽</span>
          </div>
          <div>
            {showItems && (
              <ItemList items={data.itemCards} showButton={true}></ItemList>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantCategory;
