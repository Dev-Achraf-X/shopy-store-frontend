import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import Features from "../../components/Features/Features";

function Home() {
  return (
    <div>
      <Banner />
      <div className="max-w-[1350px] mx-auto overflow-x-hidden">
        <Features type="featured" />
        <Categories />
        <Features type="trending" />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
