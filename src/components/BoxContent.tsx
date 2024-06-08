import { Link } from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";

export function BoxContent() {
  const context = useStoreContext();
  const { menuLink } = context!;
  return (
    <div
      style={{ animation: "fadeIn 3s" }}
      className="absolute bottom-[5%] left-[5%] sm:left-[10%] gap-[1.6vw] flex flex-col items-start sm:max-w-[55%] max-w-[80%] bg-[tomato]/90 rounded-2xl sm:px-10 px-4 sm:pb-4 pb-2 box-content"
    >
      <h2 className="font-medium text-white text-[max(4.5vw,18px)]">
        Order your favourite food here
      </h2>
      <p className="text-white text-[max(1.6vw,9px)]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        eveniet vel et! Nulla sit doloribus dolor beatae amet asperiores maxime
        labore blanditiis.
      </p>
      <Link
        to="#menu"
        onClick={menuLink}
        className="text-[#747474] text-[max(1vw,10px)] font-medium bg-white rounded-full px-[2.3vw] py-[1vw] transition-all duration-300 hover:bg-[#fd7e14] hover:text-white"
      >
        View Menu
      </Link>
    </div>
  );
}
