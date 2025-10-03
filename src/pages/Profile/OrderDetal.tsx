import React, { useState } from "react";
import walchilogo from "../../assets/image.png";
import Navbar from "../../components/Navbar";
import { FaBoxOpen, FaCheckCircle, FaClock, FaShippingFast } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OrderTracking = () => {

  const navigate = useNavigate();
const [isModalOpen, setIsModalOpen] = useState(false);

  const [orderData] = useState({
    productName: "Walpaper Peel & Stick, Green Brick, 24x36 inch, ",
    seller: "Sold by Wallchi",
    price: "₹27100",
    plans: "1 BHK",
     timeline: [
      {
        heading: "Consultation Process",
        events: [
          { step: "Consultation Placed", date: "2025-09-15", status: "completed" },
          { step: "Consultation Confirmed", date: "2025-09-16", status: "completed" },
        ],
      },
      {
        heading: "vendor Allocation",
        events: [
          { step: "Vendor Allocated", date: "2025-09-17", status: "completed" },
          { step: "Ready for Site Visit", date: "2025-09-18", status: "completed" },
        ],
      },
       
      
      {
        heading: "Site Visit",
        events: [
          { step: "Site Visit", date: "2025-09-19", status: "completed" },
          { step: "Site Visit Completed", date: "2025-09-20", status: "completed" },
          { step: "Site Visit Reported", date: "2025-09-21", status: "completed" },
        ],
      },
       {
        heading: "Quotaion Generated",
        events: [
          { step: "Quotaion Generated", date: "2025-09-19", status: "completed" },
          { step: "Quotaion Sent", date: "2025-09-20", status: "In-Progress" },
          { step: "Quotaion Confirmed", date: "2025-09-21", status: "In-Progress" },
        ],
      },
       
       
    ],
    imageUrl: { walchilogo },
    statuses: [
      { label: "Enquiry Confirmed, Sep 23", completed: true },
      { label: "Vendor allocated", completed: true, highlighted: true },
      { label: "Ready for site visit, Oct 01", completed: true },
      {
        label: "Completed, Oct 02",
        highlighted: true,
        completed: false,
        button: "Re-Evaluate",
      },
    ],
    updatesLink: "See All Updates >",
    executiveNote:
      "Report  details will be available once the Vendor is out for Execution.",
    actions: ["Cancel Order", "Chat with us"],
  });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

   const getIcon = (status:any, step:any) => {
    if (status === "completed") return <FaCheckCircle className="text-green-600 text-xl" />;
    if (status === "in-progress") return <FaClock className="text-orange-500 text-xl animate-pulse" />;
    if (step === "Shipped") return <FaShippingFast className="text-blue-600 text-xl" />;
    if (step === "Delivered") return <FaBoxOpen className="text-gray-500 text-xl" />;
    return <FaClock className="text-gray-400 text-xl" />;
  };
 

  return (
   
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md border p-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">
            {orderData.productName}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Seller: {orderData.seller}
          </p>
          <p className="text-base font-bold text-green-600 mt-1">
            {orderData.price}{" "}
            <span className="text-sm text-gray-500">({orderData.plans})</span>
          </p>
        </div>
        <img
          src={walchilogo}
          alt={orderData.productName}
          className="w-75 h-55   object-contain rounded-md border"
        />
      </div>

      {/* Timeline */}
      <div className="mt-6 space-y-5">
        {orderData.statuses.map((status, index) => (
          <div key={index} className="flex items-start">
            {/* Bullet + Line */}
            <div className="flex flex-col items-center mr-4">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  status.completed
                    ? "bg-green-500 text-white"
                    : "border-2 border-gray-300 bg-white"
                }`}
              >
                {status.completed && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              {index < orderData.statuses.length - 1 && (
                <div className="w-0.5 flex-1 bg-gray-300"></div>
              )}
            </div>

            {/* Label */}
            <div
              className={`flex-1 ${
                status.highlighted
                  ? "bg-green-50 border-l-4 border-green-500 pl-3 py-1 rounded"
                  : ""
              }`}
            >
              <p className="text-sm font-medium text-gray-800">
                {status.label}
              </p>
              {status.button && (
                <button
                  className="mt-1 text-sm px-3 py-1 rounded border"
                  style={{
                    backgroundColor: "#E1C680",
                    borderColor: "#010100ff",
                    color: "black",
                   
                    
                  }}
                >
                 Re-Evaluate
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Updates */}
      <a href="#" className="text-blue-600 text-md block mt-4 hover:underline"  
      onClick={(e) => {
          e.preventDefault();
          handleOpenModal();
        }}>
        {orderData.updatesLink}
      </a>

     
      <p className="text-sm text-gray-600 mt-6 border-t pt-4">
        {orderData.executiveNote}
      </p>

      
      <div className="flex justify-end space-x-4 mt-6">
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"  style={{
                    backgroundColor: "#E1C680",
                    borderColor: "#010100ff",
                    color: "black",
                   
                    
                  }}>
          {orderData.actions[0]}
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"  style={{
                    backgroundColor: "#E1C680",
                    borderColor: "#010100ff",
                    color: "black",
                   
                    
                  }}>
          💬 {orderData.actions[1]}
        </button>
      </div>
     
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-8 relative">
           
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {orderData.productName}
              <span className="text-base font-normal text-gray-500 block mt-1">
                {orderData.seller} - {orderData.price} ({orderData.plans})
              </span>
            </h3>

          
            <div className="space-y-8">
              {orderData.timeline.map((group, idx) => (
                <div key={idx}>
                
                  <h4 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-2">
                    {group.heading}
                  </h4>

                 
                  <div className="space-y-4">
                    {group.events.map((event, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div>{getIcon(event.status, event.step)}</div>
                        <div>
                          <span className="font-medium text-gray-800">{event.step}</span>
                          <p className="text-sm text-gray-500">{event.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={handleCloseModal}
                className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-white font-medium transition"
              >
                Close
              </button>
              <button
                onClick={() => navigate('/quotation')} 
                className="px-5 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium transition"
              >
                View Quatation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
   
  );
};

export default OrderTracking;
