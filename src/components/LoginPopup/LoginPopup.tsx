import { useState } from "react";
import { assets } from "../../assets/assets";
import { useLogin } from "../../context/LoginContext";

export default function LoginPopup() {
  const [currentState, setCurrentState] = useState("Login");
  const login = useLogin();
  const { loginSummit, setShowLogin } = login!;
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  return (
    <div className="absolute z-[999999] w-full h-full bg-[#00000090] grid">
      <form
        style={{ animation: "fadeIn 0.5s" }}
        onSubmit={(e) => {
          e.preventDefault();
          if (currentState === "Sign Up") {
            console.log("Sign up");
          } else {
            loginSummit(inputEmail, inputPassword);
          }
        }}
        className="place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] px-[30px] py-[25px] text-[14px] rounded-lg"
      >
        <div className="flex justify-between items-center font-bold text-black text-2xl">
          <h2>{currentState}</h2>
          <img
            className="cursor-pointer w-6 h-6"
            onClick={() => {
              setShowLogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          {currentState === "Sign Up" && (
            <div className="flex flex-col gap-1 font-medium">
              <label htmlFor="your-name">Your Name</label>
              <input
                name="your-name"
                className="outline-none border-[1px] border-[#c9c9c9] p-[10px] rounded-md"
                type="text"
                placeholder="Chi Thanh"
                required
              />
            </div>
          )}
          <div className="flex flex-col gap-1 font-medium">
            <label htmlFor="your-name">Your Email</label>
            <input
              onChange={(e) => setInputEmail(e.target.value)}
              value={inputEmail}
              className="outline-none border-[1px] border-[#c9c9c9] p-[10px] rounded-md"
              type="email"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="flex flex-col gap-1 font-medium">
            <label htmlFor="your-name">Password</label>
            <input
              className="outline-none border-[1px] border-[#c9c9c9] p-[10px] rounded-md"
              onChange={(e) => setInputPassword(e.target.value)}
              value={inputPassword}
              type="password"
              placeholder="********"
              required
            />{" "}
          </div>
        </div>
        <button className="p-[10px] rounded-md text-white bg-[tomato] text-[15px] font-medium">
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        {currentState === "Sign Up" && (
          <div className="flex gap-2 items-start -mt-4">
            <input className="mt-[5px]" type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>
        )}
        {currentState === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              className="cursor-pointer text-[tomato] font-medium border-b-[1px] border-[tomato]"
              onClick={() => setCurrentState("Login")}
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              className="cursor-pointer text-[tomato] font-medium border-b-[1px] border-[tomato]"
              onClick={() => setCurrentState("Sign Up")}
            >
              Click here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}
