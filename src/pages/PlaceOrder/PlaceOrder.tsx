import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../../context/StoreContext";

export default function PlaceOrder() {
  const context = useStoreContext();
  const navigate = useNavigate();

  if (!context) return null;
  const { getTotalCartAmount, getSumQuantity, isPromo } = context;
  const sumQuantity = getSumQuantity();
  const subTotal = getTotalCartAmount();
  const promo = Math.floor(subTotal * 0.1);
  let total = subTotal + sumQuantity / 2;
  if (isPromo) {
    total -= promo;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/");
      }}
      className="relative flex items-start min-h-screen justify-between gap-[50px] mt-[100px] md:flex-row flex-col"
    >
      <div className="place-order-left w-full max-w-[max(30%,500px)]">
        <p className="text-[30px] font-semibold mb-[50px]">
          Delivery Information
        </p>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" type="text" placeholder="Chi Thanh" />
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" type="text" placeholder="Doan" />
        <div className="flex gap-5">
          <div>
            <label htmlFor="email">Street</label>
            <input
              name="street"
              type="text"
              placeholder="123 Nguyen Chi Thanh"
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input name="city" type="text" placeholder="TP.HCM" />
          </div>
        </div>
        <label htmlFor="email">Email address</label>
        <input name="email" type="email" placeholder="example@gmail.com" />
        <label htmlFor="phone">Phone</label>
        <input name="phone" type="tel" placeholder="0123456789" />
      </div>

      <div className="w-full flex flex-col gap-5">
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
        <button className="text-white box-content font-medium bg-[tomato] w-[max(15vw,200px)] py-[12px] px-2 cursor-pointer rounded-md self-end">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </form>
  );
}
