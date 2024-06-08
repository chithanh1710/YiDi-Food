// React
import { Suspense, lazy } from "react";

// React router
import { Route, Routes } from "react-router-dom";

// Components

import LoginPopup from "./components/LoginPopup/LoginPopup";

// Pages
// import Home from "./pages/Home/Home";
const Home = lazy(() => import("./pages/Home/Home"));
// import Cart from "./pages/Cart/Cart";
const Cart = lazy(() => import("./pages/Cart/Cart"));
// import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
const PlaceOrder = lazy(() => import("./pages/PlaceOrder/PlaceOrder"));

// Layouts

import SpinnerFullPage from "./components/SpinnerFullPage/SpinnerFullPage";
import { useLogin } from "./context/LoginContext";
import AppLayout from "./layouts/AppLayout";
import FoodItemPage from "./pages/FoodItemPage/FoodItemPage";
import NotFound from "./pages/NotFound/NotFound";

///////////////////////////////////////////////////////////////////////////

export default function App() {
  const login = useLogin();
  const { showLogin } = login!;
  return (
    <Suspense fallback={<SpinnerFullPage />}>
      {showLogin ? <LoginPopup /> : <></>}
      <div className="width-container">
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path=":id" element={<FoodItemPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="place-order" element={<PlaceOrder />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Suspense>
  );
}
