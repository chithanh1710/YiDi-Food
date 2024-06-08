import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { foodListProps, food_list } from "../assets/assets";

export interface MenuListProps {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  foodList: foodListProps[];
  cardItem: {
    [id: string]: number;
  };
  addToCard: (itemId: string) => void;
  removeCard: (itemId: string) => void;
  removeAllOneCard: (itemId: string) => void;
  link: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  isSearch: boolean;
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
  getTotalCartAmount: () => number;
  getSumQuantity: () => number;
  isPromo: boolean;
  setIsPromo: React.Dispatch<React.SetStateAction<boolean>>;
  homeRef: React.MutableRefObject<null>;
  menuRef: React.MutableRefObject<null>;
  mobileRef: React.MutableRefObject<null>;
  contactRef: React.MutableRefObject<null>;
  mobileLink: () => void;
  contactLink: () => void;
  homeLink: () => void;
  menuLink: () => void;
}

type cardItem = {
  [id: string]: number;
};

const StoreContext = createContext<MenuListProps | undefined>(undefined);

function StoreContextProvide({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState("All");
  const [cardItem, setCartItem] = useState<cardItem>({});
  const [link, setLink] = useState("home");
  const [isSearch, setIsSearch] = useState(false);
  const [isPromo, setIsPromo] = useState(false);
  const homeRef = useRef(null);
  const menuRef = useRef(null);
  const mobileRef = useRef(null);
  const contactRef = useRef(null);
  const foodList = food_list;

  const homeLink = () => {
    setLink("home");
    if (homeRef.current) {
      const nav = homeRef.current as HTMLElement;
      nav.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const mobileLink = () => {
    setLink("mobile-app");
    if (mobileRef.current) {
      const container = mobileRef.current as HTMLElement;
      container.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const contactLink = () => {
    setLink("contact-us");
    if (contactRef.current) {
      const container = contactRef.current as HTMLElement;
      container.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const menuLink = () => {
    setLink("menu");
    if (menuRef.current) {
      const menu = menuRef.current as HTMLElement;
      menu.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const addToCard = (itemId: string) => {
    if (!cardItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeCard = (itemId: string) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (cardItem[itemId] === 1) {
      setCartItem((prev) => {
        const updateCardItem = { ...prev };
        delete updateCardItem[itemId];
        return updateCardItem;
      });
    }
  };

  const removeAllOneCard = (itemId: string) => {
    setCartItem((prev) => {
      const updateCardItem = { ...prev };
      delete updateCardItem[itemId];
      return updateCardItem;
    });
  };

  const getTotalCartAmount = useCallback(() => {
    let totalAmount = 0;
    for (const key in cardItem) {
      const itemInfo = foodList.find((product) => product._id === key);
      if (itemInfo) {
        totalAmount += itemInfo?.price * cardItem[key];
      }
    }
    return totalAmount;
  }, [cardItem, foodList]);

  const getSumQuantity = useCallback(() => {
    let sumQuantity = 0;
    for (const quantity of Object.entries(cardItem)) {
      sumQuantity += quantity[1];
    }
    return sumQuantity;
  }, [cardItem]);

  /////////////////////////////////////////////////////////////////////////////////
  const value: MenuListProps = {
    category,
    setCategory,
    foodList,
    cardItem,
    addToCard,
    removeCard,
    removeAllOneCard,
    link,
    setLink,
    getTotalCartAmount,
    getSumQuantity,
    isPromo,
    setIsPromo,
    homeRef,
    menuRef,
    mobileRef,
    homeLink,
    menuLink,
    mobileLink,
    contactRef,
    contactLink,
    isSearch,
    setIsSearch,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

function useStoreContext() {
  const context = useContext(StoreContext);
  if (!context) return null;
  return context;
}

export { StoreContextProvide, useStoreContext };
