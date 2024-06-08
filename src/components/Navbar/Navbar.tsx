import { assets } from "../../assets/assets";
import { LogOut, Menu, X } from "lucide-react";
import { useStoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { MenuNavbar } from "../MenuNavbar/MenuNavbar";
import { useLogin } from "../../context/LoginContext";

export default function Navbar() {
  const context = useStoreContext();
  const login = useLogin();
  const { loginSuccess, setLoginSuccess, setShowLogin } = login!;
  const {
    link,
    getSumQuantity,
    homeRef,
    menuLink,
    homeLink,
    mobileLink,
    contactLink,
    isSearch,
    setIsSearch,
  } = context!;
  const sumQuantity = getSumQuantity();

  const searchRef = useRef<HTMLInputElement>(null);

  const [isShowMenu, setIsShowMenu] = useState(false);

  useEffect(() => {
    if (isSearch && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearch]);

  return (
    <nav ref={homeRef} id="home" className="relative">
      {isShowMenu && (
        <MenuNavbar setIsShowMenu={setIsShowMenu} setShowLogin={setShowLogin} />
      )}
      <div className="py-5 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Menu
            onClick={() => {
              setIsShowMenu((prev) => !prev);
              setIsSearch(false);
            }}
            className={`cursor-pointer lg:hidden block h-6 w-6 ${
              isShowMenu ? "hidden" : ""
            }`}
          />
          <X
            className={`cursor-pointer lg:hidden block h-6 w-6 ${
              isShowMenu ? "" : "hidden"
            }`}
            onClick={() => setIsShowMenu((prev) => !prev)}
          />
          <Link
            onClick={homeLink}
            to="/#home"
            className="text-[tomato] font-bold text-4xl flex justify-center items-center gap-1"
          >
            <img src={assets.logo} className="h-12 w-auto" alt="" />
            YiDiFood
          </Link>
        </div>

        <ul className="lg:flex hidden gap-6 color-default text-xl navbar">
          <li>
            <Link
              onClick={homeLink}
              className={`${link === "home" ? "active" : ""}`}
              draggable="false"
              to="/#home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={menuLink}
              className={`${link === "menu" ? "active" : ""}`}
              draggable="false"
              to="/#menu"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              onClick={mobileLink}
              className={`${link === "mobile-app" ? "active" : ""}`}
              draggable="false"
              to="/#mobile-app"
            >
              Mobile App
            </Link>
          </li>
          <li>
            <Link
              onClick={contactLink}
              className={`${link === "contact-us" ? "active" : ""}`}
              draggable="false"
              to="/#contact-us"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex justify-between relative items-center lg:gap-10 gap-6">
          <div className="flex absolute -bottom-11 right-0">
            <input
              ref={searchRef}
              className={`rounded-[100px] border-[1px] border-black px-2 py-1 outline-none ${
                !isSearch ? "hidden" : ""
              }`}
              type="text"
              placeholder="Search..."
            />
          </div>
          <>
            {isSearch ? (
              <button
                onClick={() => setIsSearch((prev) => !prev)}
                className="w-6 h-6 font-bold bg-[tomato] text-white rounded-full cursor-pointer"
              >
                X
              </button>
            ) : (
              <img
                onClick={() => {
                  setIsSearch((prev) => !prev);
                }}
                className="h-6 w-6 cursor-pointer"
                src={assets.search_icon}
                alt="search"
              />
            )}

            <Link to="/cart">
              <div className="relative">
                <img
                  className="h-6 w-6"
                  src={assets.basket_icon}
                  alt="basket"
                />
                {sumQuantity !== 0 && (
                  <div className="absolute -top-[6px] -right-[10px] flex items-center justify-center text-white p-2 sm:h-6 sm:w-6 h-4 w-4 text-[80%] rounded-full bg-[tomato]">
                    {sumQuantity}
                  </div>
                )}
              </div>
            </Link>
            <div className="max-sm:hidden">
              {loginSuccess ? (
                <div
                  onClick={() => setLoginSuccess(false)}
                  className="cursor-pointer h-10 w-10 bg-[tomato] rounded-full flex items-center justify-center"
                >
                  <LogOut className="w-full h-full text-white px-2" />
                </div>
              ) : (
                <button
                  onClick={() => setShowLogin(true)}
                  className="border-[3px] font-medium border-[tomato] bg-[tomato] text-white px-6 py-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-transparent hover:text-[tomato]"
                >
                  Sign in
                </button>
              )}
            </div>
          </>
        </div>
      </div>
    </nav>
  );
}
