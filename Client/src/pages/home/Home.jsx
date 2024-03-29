import { useContext } from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import { ThemContext } from "../../Context/ThemContext";

const Home = () => {
  const { Dark } = useContext(ThemContext)
  return (
    <div className={`${Dark === "light" ? "" : "bg-[#060417] text-white"}`}>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">"Kindly peruse by property type."</h1>
        <PropertyList />

        <h1 className="homeTitle">"Residences favored by guests."</h1>
        <FeaturedProperties />

      </div>
    </div>
  );
};

export default Home;
