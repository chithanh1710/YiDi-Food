import { useRef } from "react";
import { useStoreContext } from "../../context/StoreContext";
import MenuList from "./MenuList";

export default function ExploreMenu() {
  const context = useStoreContext();
  const divRef = useRef(null);

  const { menuRef } = context!;

  return (
    <div ref={menuRef} id="menu" className="flex flex-col gap-5">
      <h1 className="text-[#262626] text-2xl font-medium">Explore our menu</h1>
      <p className="lg:w-[60%] w-[80%] text-[#808080]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque a
        repellat odit fuga ea nam, et voluptates velit optio magnam sunt unde
        eveniet.
      </p>
      <div ref={divRef} className="top-0 bg-white z-[99]">
        <MenuList />
        <hr className="my-3 h-0.5 bg-[#e2e2e2] border-none" />
      </div>
    </div>
  );
}
