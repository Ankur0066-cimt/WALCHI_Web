// import Consultation from "../components/Cards/Consultation";
import EstimateCost from "../components/Cards/EstimateCost";
import Explore from "../components/Cards/Explore";
import ChatWidget from "../components/Features/ChatBot";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col ">
          
         <ChatWidget />
   
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="pt-12 w-full border rounded-lg">
        <Explore />
      </div>
      
       
      <div className="mt-3 w-full  p-2">
        <EstimateCost />
      </div>
    <div className="p-2 w-full">
      <Footer />
    </div>

    </div>
  );
};

export default Home;