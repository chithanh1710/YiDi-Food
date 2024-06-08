import { useParams, useSearchParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useStoreContext } from "../../context/StoreContext";
import { useEffect } from "react";

export default function FoodItemPage() {
  const id = useParams().id!;
  const [param] = useSearchParams();
  const price = param.get("price") as string;
  const image = param.get("img") as string;
  const name = param.get("name") as string;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const context = useStoreContext();
  if (!context) return null;

  const { addToCard, removeCard, cardItem } = context;

  return (
    <div
      style={{ animation: "fadeIn 1s" }}
      className="w-[80%] h-[680px] transition-all duration-300 m-auto rounded-2xl shadow-lg flex flex-col justify-start items-center overflow-hidden"
    >
      <div className="w-full overflow-hidden relative">
        <img
          className="w-full h-full object-cover transition-all duration-500 hover:scale-125"
          src={image}
          alt={name}
        />
        {!cardItem[id] ? (
          <img
            onClick={() => addToCard(id)}
            src={assets.add_icon_white}
            alt="add"
            className="cursor-pointer absolute bottom-2 right-2"
          />
        ) : (
          <div className="flex gap-2 items-center justify-center absolute bottom-2 right-2 rounded-[100px] p-1 overflow-hidden bg-white">
            <img
              onClick={() => removeCard(id)}
              className="cursor-pointer"
              src={assets.remove_icon_red}
              alt="remove"
            />
            <p className="text-2xl">{cardItem[id]}</p>
            <img
              onClick={() => addToCard(id)}
              className="cursor-pointer"
              src={assets.add_icon_green}
              alt="add"
            />
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="text-[#676767] text-[16px] mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          aspernatur rerum! Quos, nam sequi quam omnis officia repellat eum at
          quisquam repudiandae ducimus quae dicta excepturi optio, iste cum ad.
        </p>
        <p className="text-[tomato] font-semibold text-2xl">${price}</p>
      </div>
    </div>
  );
}
