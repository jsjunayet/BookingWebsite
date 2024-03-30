import { useContext } from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import { ThemContext } from "../../Context/ThemContext";
import Location from "../../components/Location/Location";

const Home = () => {
  const { Dark } = useContext(ThemContext)
  return (
    <div className={`${Dark === "light" ? "" : "bg-[#060417] text-white"}`}>
      <Navbar />
      <Header />
      <Featured />
      <PropertyList />
      <FeaturedProperties />
      <Location></Location>


    </div >
  );
};

export default Home;
