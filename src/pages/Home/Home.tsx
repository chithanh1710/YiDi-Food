import Header from "../../layouts/Header";
import { BoxContent } from "../../components/BoxContent";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Main from "../../layouts/Main";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownLoad from "../../components/AppDownLoad/AppDownLoad";
import Contact from "../../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Header>
        <BoxContent />
      </Header>
      <Main>
        <ExploreMenu />
        <FoodDisplay />
        <Contact />
        <AppDownLoad />
      </Main>
    </>
  );
}
