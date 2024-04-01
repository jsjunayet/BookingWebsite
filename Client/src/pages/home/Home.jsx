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
import Feedback from "../../components/feebbacks/feedback/Feedback";
import Contact from "../../components/Contact/Contact";

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
      <Feedback></Feedback>
      <Contact></Contact>
      <Footer></Footer>


    </div >
  );
};

export default Home;
