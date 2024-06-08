import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "../components/Navbar/Navbar";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
