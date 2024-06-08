import { Link } from "react-router-dom";
import { useStoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

export default function FoodDisplay() {
  const context = useStoreContext();
  if (!context) return null;

  const { foodList, category } = context;

  return (
    <div className="mt-8">
      <h2 className="text-[max(2vw,24px)] font-semibold">
        Top dishes near you
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-y-12 gap-x-6 mt-8">
        {foodList.map((food) => {
          if (category === "All" || category === food.category) {
            return (
              <Link
                key={food._id}
                to={`${food._id}?name=${food.name}&price=${food.price}&img=${food.image}`}
              >
                <FoodItem food={food} />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
