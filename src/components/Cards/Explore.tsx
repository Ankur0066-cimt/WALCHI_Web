import { FaPaintBrush, FaPaintRoller } from "react-icons/fa";
import exploreimg from "../../assets/explore.jpg";
import { LuPaintbrush, LuPaintBucket } from "react-icons/lu";
import { GiPaintBucket } from "react-icons/gi";
import { use } from "react";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full">
      <img
        src={exploreimg}
        alt="Explore"
        className="w-full h-auto object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full z-0">
       
        <div className="absolute top-20 left-2/6 transform -translate-x-1/2 -translate-y-1/2 pl-10 text-white" style={{ top: '20%' }}>
          <h1 className="text-4xl font-bold mb-4 z-10 text-[#90EE90] drop-shadow-[2px_2px_6px_rgba(0,0,0,0.6)]">
            Explore the world of colours
          </h1>

          <button className="bg-[#006E39] hover:bg-green-800 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300">
            Explore
          </button>
        </div>

        <div className="pl-220 w-full h-full flex flex-col justify-center items-center mt-2"> {/* Adjusted pl-10 and added mt-20 */}
          <div className="bg-white w-[500px] min-h-[300px] flex flex-col justify-start items-start rounded-lg shadow-md gap-4">
            <h1 className="text-2xl ml-2 text-left text-[#006E39] font-semibold z-10">
              Transform Your Space
            </h1>

            <div className="grid grid-cols-3 gap-4 w-full ">
              <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate("/consultation")}>
                <FaPaintBrush fontSize={60} className="text-gray-700 text-lg mt-4" />
                <span className="text-gray-700 text-md">Paint</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate("/consultation")}>
                <FaPaintRoller fontSize={60} className="text-gray-700 text-lg mt-4" />
                <span className="text-gray-700 text-md">Paint</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate("/consultation")}>
                <LuPaintBucket fontSize={60} className="text-gray-700 text-lg mt-4" />
                <span className="text-gray-700 text-md">Paint</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate("/consultation")}>
                <LuPaintbrush fontSize={60} className="text-gray-700 text-lg mt-4" />
                <span className="text-gray-700 text-md">Paint</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate("/consultation")}>
                <GiPaintBucket fontSize={60} className="text-gray-700 text-lg mt-4" />
                <span className="text-gray-700 text-md">Paint</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate("/consultation")}>
                <FaPaintBrush fontSize={60} className="text-gray-700 text-lg mt-4" />
                <span className="text-gray-700 text-md">Paint</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;