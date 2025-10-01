import React, { useState } from "react";
import walchilogo from "../../assets/image.png";

const OrderTracking = () => {
  const [orderData] = useState({
    productName: "Walpaper Peel & Stick, 24x36 inch, Pack of 2",
    seller: "Sold by Wallchi",
    price: "₹27100",
    offers: "1 offer",
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
            <span className="text-sm text-gray-500">({orderData.offers})</span>
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
      <a href="#" className="text-blue-600 text-sm block mt-4 hover:underline">
        {orderData.updatesLink}
      </a>

      {/* Executive Note */}
      <p className="text-sm text-gray-600 mt-6 border-t pt-4">
        {orderData.executiveNote}
      </p>

      {/* Actions */}
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
    </div>
  );
};

export default OrderTracking;
