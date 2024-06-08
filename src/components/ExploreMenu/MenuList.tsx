import { useRef, useState } from "react";
import { menu_list } from "../../assets/assets";
import { useStoreContext } from "../../context/StoreContext";

export default function MenuList() {
  const storeContext = useStoreContext();
  const itemRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  if (!storeContext) {
    return null;
  }
  const { category, setCategory } = storeContext;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (itemRef.current) {
      setIsMouseDown(true);
      setStartX(e.pageX - itemRef.current.offsetLeft);
      setScrollLeft(itemRef.current.scrollLeft);
    }
  };
  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isMouseDown) return;
    e.preventDefault();
    if (itemRef.current) {
      const x = e.pageX - itemRef.current?.offsetLeft;
      const walk = (x - startX) * 2;
      itemRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div
      ref={itemRef}
      className="flex justify-between items-center gap-7 text-center m-5 overflow-x-auto scrollbar-custom"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {menu_list.map((item) => (
        <div
          onClick={() => {
            setCategory((prevItem) =>
              prevItem === item.menu_name ? "All" : item.menu_name
            );
          }}
          className={`item-menu pb-[2px] border-b-4 border-transparent flex flex-col gap-2 min-w-[80px] w-[7.5vw] cursor-pointer transition-all duration-300 ${
            category === item.menu_name ? "active" : ""
          }`}
          key={item.menu_name}
        >
          <img
            draggable="false"
            className="rounded-full transition-all duration-200 object-cover"
            src={item.menu_image}
            alt={item.menu_name}
          />
          <p
            draggable="false"
            className="mt-3 text-[#747474] text-[max(1.4vw,16px)]"
          >
            {item.menu_name}
          </p>
        </div>
      ))}
    </div>
  );
}
