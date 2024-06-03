//import { CDN_URL } from "./../utils/constants";

const ItemList = (item) => {
  console.log(item);
  const { name, description, imageId } = item?.data?.card?.info;

  return (
    <div>
      <span>{name}</span>
      <p>{description}</p>
      {/* <img src={CDN_URL + imageId}></img> */}
    </div>
  );
};

export default ItemList;
