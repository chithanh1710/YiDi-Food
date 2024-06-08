import { ReactNode } from "react";
import { assets } from "../assets/assets";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <header
      style={{
        background: `url(${assets.header_img})`,
        backgroundSize: "cover",
      }}
      className="h-[36vw] rounded-xl overflow-hidden w-full mx-auto my-[30px] relative"
    >
      {children}
    </header>
  );
}
