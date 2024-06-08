import { useState } from "react";
import { useStoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const context = useStoreContext();
  const [codePromo, setCodePromo] = useState("");
  const navigate = useNavigate();
  if (!context) return null;
  const {
    removeAllOneCard,
    addToCard,
    cardItem,
    foodList,
    removeCard,
    getTotalCartAmount,
    getSumQuantity,
    isPromo,
    setIsPromo,
  } = context;
  let ord = 0;
  const sumQuantity = getSumQuantity();
  const subTotal = getTotalCartAmount();
  const promo = Math.floor(subTotal * 0.1);
  let total = subTotal + sumQuantity / 2;
  if (isPromo) {
    total -= promo;
  }

  return (
    <div className="mt-[100px] text-center">
      <div>
        <div className="grid grid-cols-[0.5fr,1fr,1.5fr,1fr,1fr,1fr,0.5fr] items-center text-gray-500 text-[max(1vw,12px)] font-bold ">
          <p>Ord</p>
          <p>Items</p>
          <p>Tittle</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="border-2 border-[tomato] rounded-full" />
        {foodList.map((item) => {
          if (cardItem[item._id] > 0) {
            ord++;
            return (
              <div key={item._id}>
                <div className="grid grid-cols-[0.5fr,1fr,1.5fr,1fr,1fr,1fr,0.5fr] items-center text-black text-[max(1vw,12px)] my-[10px]">
                  <p className="font-bold">{ord}</p>
                  <img className="w-[60px] mx-auto" src={item.image} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <div className="flex gap-2 items-center justify-center">
                    <button
                      className="cursor-pointer text-xl bg-[tomato] rounded-full px-3"
                      onClick={() => removeCard(item._id)}
                    >
                      -
                    </button>
                    <p>{cardItem[item._id]}</p>
                    <button
                      className="cursor-pointer text-xl bg-[tomato] rounded-full px-3"
                      onClick={() => addToCard(item._id)}
                    >
                      +
                    </button>
                  </div>
                  <p>${item.price * cardItem[item._id]}</p>
                  <button
                    onClick={() => removeAllOneCard(item._id)}
                    className="cursor-pointer mx-auto h-6 w-6 font-bold text-white rounded-full transition-all duration-500 bg-[tomato] hover:bg-[red] hover:scale-110"
                  >
                    X
                  </button>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="mt-[80px] flex md:flex-row flex-col-reverse justify-between gap-[max(12vw,20px)]">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="self-start font-bold text-2xl">Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${subTotal}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${sumQuantity / 2}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="flex justify-between text-[#555]">
              <p>Promotion</p>
              <p>${isPromo ? promo : 0}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>${total}</b>
            </div>
          </div>
          <button
            onClick={() => {
              if (total !== 0) {
                navigate("/place-order");
              }
            }}
            className="text-white box-content font-medium bg-[tomato] w-[max(15vw,200px)] py-[12px] px-2 cursor-pointer rounded-md self-end"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1">
          <div>
            <p className="text-[#555] font-medium text-start">
              If you have a promo code, Enter it here
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (codePromo === "promo10%") {
                  setIsPromo(true);
                }
              }}
              className="mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-md"
            >
              <input
                className="bg-transparent border-none outline-none pl-4"
                type="text"
                placeholder="Promo code"
                value={codePromo}
                onChange={(e) => {
                  setCodePromo(e.target.value);
                }}
                disabled={isPromo}
              />
              {!isPromo ? (
                <button className="w-[max(10vw,150px)] font-medium px-[5px] py-3 bg-[tomato] text-white rounded-md">
                  Submit
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPromo(false);
                    setCodePromo("");
                  }}
                  className="w-[max(10vw,150px)] font-medium px-[5px] py-3 bg-black text-white rounded-md"
                >
                  Cancel
                </button>
              )}
            </form>
            {isPromo && (
              <p className="text-start mt-2 text-[tomato]">
                You get 10% off the total value
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
