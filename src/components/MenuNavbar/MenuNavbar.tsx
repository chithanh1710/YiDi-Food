import { useLogin } from "../../context/LoginContext";
import { useStoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

export function MenuNavbar({
  setIsShowMenu,
  setShowLogin,
}: {
  setIsShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const context = useStoreContext();
  const login = useLogin();
  const { loginSuccess, userName, setLoginSuccess } = login!;
  const { menuLink, homeLink, mobileLink, contactLink } = context!;
  return (
    <div className="lg:hidden flex justify-center w-full h-[calc(100vh-88px)] z-[99999999] absolute top-[88px] bg-[rgba(255,255,255,0.9)]">
      <ul className="flex flex-col mt-8 gap-12 text-center text-2xl text-[tomato] uppercase font-bold">
        <li>
          <Link
            onClick={() => {
              homeLink();
              setIsShowMenu(false);
            }}
            draggable="false"
            to="/#home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              menuLink();
              setIsShowMenu(false);
            }}
            draggable="false"
            to="/#menu"
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              mobileLink();
              setIsShowMenu(false);
            }}
            draggable="false"
            to="/#mobile-app"
          >
            Mobile App
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              contactLink();
              setIsShowMenu(false);
            }}
            draggable="false"
            to="/#contact-us"
          >
            Contact Us
          </Link>
        </li>
        <li>
          {loginSuccess ? (
            <div className="flex flex-col gap-3 text-2xl">
              <h2 className="font-medium text-black">
                Welcome {userName} to YiDiFood
              </h2>
              <p
                onClick={() => setLoginSuccess(false)}
                className="text-center cursor-pointer text-blue-700 border-2 rounded-md border-blue-700 transition-all duration-300 hover:bg-blue-700 hover:text-white"
              >
                Logout
              </p>
            </div>
          ) : (
            <button
              onClick={() => {
                setShowLogin(true);
                setIsShowMenu(false);
              }}
              className="border-[6px] border-[tomato] px-6 py-2 rounded-full cursor-pointer transition-all duration-300 bg-[tomato] text-white hover:bg-transparent hover:text-[tomato]"
            >
              Sign in
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
