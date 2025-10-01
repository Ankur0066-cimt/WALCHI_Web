import Consultation from "../components/Cards/Consultation";
import EstimateCost from "../components/Cards/EstimateCost";
import Explore from "../components/Cards/Explore";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col ">
   
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="pt-20 w-full border rounded-lg">
        <Explore />
      </div>
       <Consultation />
       
      <div className="mt-3 w-full mb-10 p-2">
        <EstimateCost />
      </div>
    </div>
  );
};

export default Home;