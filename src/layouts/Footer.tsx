import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useStoreContext } from "../context/StoreContext";

export default function Footer() {
  const context = useStoreContext();
  if (!context) return;
  const { link, menuLink, homeLink, contactLink, mobileLink } = context;
  return (
    <div
      id="footer"
      className="text-[#d9d9d9] bg-[#323232] flex flex-col rounded-t-2xl items-center gap-5 pt-20 mt-12 px-[8vw]"
    >
      <div className="w-full grid sm:grid-cols-[2fr,1fr,1fr] sm:gap-20 gap-10">
        <div className="flex flex-col items-start gap-5">
          <Link
            onClick={homeLink}
            to="/#home"
            className="text-[tomato] font-bold text-4xl flex justify-center items-center gap-1"
          >
            <img src={assets.logo} className="h-12 w-auto" alt="" />
            YiDiFood
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            necessitatibus at sit animi cupiditate.
          </p>
          <div className="flex gap-5 items-center">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
        <div className="flex flex-col items-start sm:gap-5 gap-2">
          <h2 className="font-bold text-xl">COMPANY</h2>
          <ul>
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
        </div>
        <div className="flex flex-col items-start sm:gap-5 gap-2">
          <h2 className="font-bold text-xl">GET IN TOUCH</h2>
          <ul>
            <li>+84-123-456-789</li>
            <li>yidifood@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="text-[#969696]">
        Copyright &copy; 2024 by YiDiFood - All Right Reserved{" "}
      </p>
    </div>
  );
}
