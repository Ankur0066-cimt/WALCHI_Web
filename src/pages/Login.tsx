// import React from "react";
import wallchiLogo from "../assets/Walchi.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate  =useNavigate();
  return (
    <div className="w-auto max-w-xl bg-[#B5B26F] shadow-2xl rounded-2xl p-12 min-h-[500px] flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-center text-[#006E39] mb-8">
        Login / Sign Up
      </h2>

      <label className="block text-base font-medium text-gray-700 mb-2">
        Your Mobile Number
      </label>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#006E39]">
        <span className="px-4 py-3 bg-gray-100 text-gray-700 text-base">
          +91
        </span>
        <input
          type="text"
          placeholder="Enter number"
          className="w-full px-4 py-3 outline-none text-gray-800 text-base"
        />
      </div>
<div className="text-red-500 text-center mt-4">
      <button className="w-full mt-8 bg-[#006E39] hover:bg-green-800 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300"
     onClick={()=>navigate("/")}
      >
      
        Proceed
      </button>
     <div className="mt-3 flex justify-between">
      <span className="text-red-500 cursor-pointer align-left" onClick={()=>navigate("/forgotpassword")}>  Forget password?</span>
        <span className="text-blue-700 cursor-pointer align-right" onClick={()=>navigate("/register")}>  Register</span>
      </div> 
</div>
      <div className="mt-12 flex justify-center">
        <img src={wallchiLogo} alt="Wallchi Logo" className="w-60 h-25" />
      </div>
    </div>
  );
};

export default Login;
