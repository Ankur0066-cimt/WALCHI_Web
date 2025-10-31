import  { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import orderImg from "../../assets/Walchi.png"
import { useNavigate } from "react-router-dom";
import ChatWidget from "../../components/Features/ChatBot";
const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("myOrder");
  const [name, setName] = useState("Ankur Tiwari");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("Ankurtiwari006@gmail.com");
  const [mobile, setMobile] = useState("+91932434991");

  const navigate = useNavigate();
  return (
    <>
    <ChatWidget />
    <div className="flex min-h-screen bg-gradient-to-br from-[#006E39] to-[#E1C680]">
   
      <aside className="w-64 border-r bg-gradient-to-br from-[#006E39] to-[#E1C680] p-6 flex flex-col">
        <div className="text-center mb-6">
          <BiUserCircle className="text-gray-200 mx-auto mb-3" size={70} />
          <h2 className="text-2xl font-bold text-white drop-shadow-md">Profile</h2>
        </div>

        <nav className="flex flex-col space-y-2">
          <button
            onClick={() => setSelectedTab("myOrder")}
            className={`w-full py-2 px-3 rounded transition ${
              selectedTab === "myOrder"
                ? "bg-white text-green-700 font-semibold"
                : "text-white hover:bg-green-800"
            }`}
          >
            My Orders
          </button>

          <button
            onClick={() => setSelectedTab("profile")}
            className={`w-full py-2 px-3 rounded transition ${
              selectedTab === "profile"
                ? "bg-white text-green-700 font-semibold"
                : "text-white hover:bg-green-800"
            }`}
          >
            Profile
          </button>

          {/* <button
            onClick={() => setSelectedTab("trackOrder")}
            className={`w-full py-2 px-3 rounded transition ${
              selectedTab === "trackOrder"
                ? "bg-white text-green-700 font-semibold"
                : "text-white hover:bg-green-800"
            }`}
          >
            Track Order Details
          </button> */}

          <button 
          onClick={() => navigate("/roomdetail")}
          className={`w-full py-2 px-3 rounded transition ${
              selectedTab === "trackOrder"
                ? "bg-white text-green-700 font-semibold"
                : "text-white hover:bg-green-800"
            }`}
          >
            View Order Details
            </button>
            <button 
          onClick={() => navigate("/roomdetail")}
          className={`w-full py-2 px-3 rounded transition ${
              selectedTab === "trackOrder"
                ? "bg-white text-green-700 font-semibold"
                : "text-white hover:bg-green-800"
            }`}
          >
          Payment Option
            </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* My Orders */}
        {selectedTab === "myOrder" && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl text-green-700 font-semibold mb-4">My Orders</h3>
           <div className="flex items-center space-x-6">
  {/* Image Box */}
  <div className="w-[400px] h-[200px] bg-green-500 rounded-lg overflow-hidden">
    <img
    src= {orderImg}
      alt="Order"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  
  <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Wallpaper</h3>
    <p className="text-gray-600 mb-4">
     Estimated Cost: ₹5000
    </p>
     <p className="text-gray-600 mb-4">
     Enquiy Date : 20 May 2023
    </p>
    <p className="text-gray-600 mb-4">
      Delivery Date: 25 May 2023
    </p>
   
    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition" onClick={() => navigate("/orderdetail")}>
      View Details
    </button>
  </div>
</div>

          </div>
        )}

        {/* Profile (Your MyProfile code integrated) */}
        {selectedTab === "profile" && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
              <button className="text-white hover:underline">Edit</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-gray-800 mb-1 ">Name</label>
                <input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Enter your name"
  className="w-full p-3 border border-gray-300 rounded placeholder-red-500 focus:ring-2 focus:ring-green-400 focus:outline-none"
/>
              </div>

              {/* Gender */}
              <div className="flex flex-col">
                <label className="text-gray-800 mb-1">Gender</label>
                <div className="flex items-center space-x-6 mt-1">
                  <label className="flex items-center space-x-2 text-gray-800">
                    <input
                      type="radio"
                      value="Male"
                      checked={gender === "Male"}
                      onChange={() => setGender("Male")}
                      className="text-green-500"
                    />
                    <span>Male</span>
                  </label>
                  <label className="flex items-center space-x-2 text-gray-800">
                    <input
                      type="radio"
                      value="Female"
                      checked={gender === "Female"}
                      onChange={() => setGender("Female")}
                      className="text-green-500"
                    />
                    <span>Female</span>
                  </label>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>

              {/* Mobile */}
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Mobile Number</label>
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8 flex justify-end">
              <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Track Order */}
        {selectedTab === "trackOrder" && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl text-black font-semibold mb-4">Track Your Order</h3>
            <form className="space-y-4 ">
              <input
                type="text"
                placeholder="Enter Order ID"
                className="w-1/4 p-3 border-2 border-gray-800 rounded-lg placeholder-gray-600 focus:ring-2 focus:ring-gray-200 focus:outline-none" 
              />
              <br />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Track
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
    </>
  );
};

export default Dashboard;
