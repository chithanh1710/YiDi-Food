import { assets } from "../../assets/assets";
import { useStoreContext } from "../../context/StoreContext";

export default function AppDownLoad() {
  const context = useStoreContext();
  if (!context) return null;
  const { mobileRef } = context;
  return (
    <div
      ref={mobileRef}
      className="m-auto mt-[100px] text-[max(3vw,20px)] text-center font-medium"
    >
      <p>
        For Better Experience Download <br /> Yidi App
      </p>
      <div className="flex justify-center gap-[max(2vw,20px)] mt-[40px]">
        <img
          className="w-[max(16vw,120px)] transition-all duration-500 cursor-pointer hover:scale-105"
          src={assets.play_store}
          alt="play store"
        />
        <img
          className="w-[max(16vw,120px)] transition-all duration-500 cursor-pointer hover:scale-105"
          src={assets.app_store}
          alt="app store"
        />
      </div>
    </div>
  );
}
