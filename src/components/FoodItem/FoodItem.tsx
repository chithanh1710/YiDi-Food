import { assets, foodListProps } from "../../assets/assets";
import { useStoreContext } from "../../context/StoreContext";

export default function FoodItem({ food }: { food: foodListProps }) {
  const context = useStoreContext();
  if (!context) return null;

  const { addToCard, removeCard, cardItem } = context;

  return (
    <div
      style={{ animation: "fadeIn 1s" }}
      className="w-full h-full transition-all duration-300 m-auto rounded-2xl shadow-lg flex flex-col justify-start items-center overflow-hidden"
    >
      <div className="w-full overflow-hidden relative">
        <img
          className="w-full object-cover transition-all duration-500 hover:scale-125"
          src={food.image}
          alt={food.name}
        />
        {!cardItem[food._id] ? (
          <img
            onClick={() => addToCard(food._id)}
            src={assets.add_icon_white}
            alt="add"
            className="cursor-pointer absolute bottom-2 right-2"
          />
        ) : (
          <div className="flex gap-2 items-center justify-center absolute bottom-2 right-2 rounded-[100px] p-1 overflow-hidden bg-white">
            <img
              onClick={() => removeCard(food._id)}
              className="cursor-pointer"
              src={assets.remove_icon_red}
              alt="remove"
            />
            <p className="text-2xl">{cardItem[food._id]}</p>
            <img
              onClick={() => addToCard(food._id)}
              className="cursor-pointer"
              src={assets.add_icon_green}
              alt="add"
            />
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold">{food.name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="text-[#676767] text-[16px] mb-4">{food.description}</p>
        <p className="text-[tomato] font-semibold text-2xl">${food.price}</p>
      </div>
    </div>
  );
}
