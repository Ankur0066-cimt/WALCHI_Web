import wallchiLogo from "../assets/Walchi.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div
    className="bg-[#B5B26F] shadow-2xl rounded-3xl p-8 flex flex-col justify-between min-h-[600px]"
    style={{ width: "700px" }} 
  >
    {/* Heading */}
    <h2 className="text-4xl font-bold text-center text-[#006E39] mb-10  border-black rounded-full px-4 py-2 ">
      Register
    </h2>

    {/* Form Fields */}
    <div className="flex flex-col space-y-5">
      {/* Full Name */}
      <div>
        <label className="block text-base font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-3 rounded-lg outline-none text-gray-800 text-base focus:ring-2 focus:ring-[#006E39]"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-base font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-lg outline-none text-gray-800 text-base focus:ring-2 focus:ring-[#006E39]"
        />
      </div>

      {/* Mobile Number */}
      <div>
        <label className="block text-base font-medium text-gray-700 mb-2">
          Mobile Number
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#006E39]">
          <span className="px-4 py-3 bg-gray-100 text-gray-700 text-base">+91</span>
          <input
            type="text"
            placeholder="Enter number"
            className="w-full px-4 py-3 outline-none text-gray-800 text-base"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block text-base font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full px-4 py-3 rounded-lg outline-none text-gray-800 text-base focus:ring-2 focus:ring-[#006E39]"
        />
      </div>
    </div>

    {/* Button and Login Link */}
    <div className="mt-8 flex flex-col items-center">
      <button
        className="w-full max-w-sm bg-[#006E39] hover:bg-green-800 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300 mb-4"
        onClick={() => navigate("/")}
      >
        Register
      </button>
      <span
        className="text-gray-800 cursor-pointer hover:text-[#006E39]"
        onClick={() => navigate("/login")}
      >
        Already have an account? Login
      </span>
    </div>

    {/* Logo at Bottom */}
    <div className="mt-10 flex justify-center">
      <img src={wallchiLogo} alt="Wallchi Logo" className="w-48 h-auto" />
    </div>
  </div>
</div>

  );
};

export default Register;
