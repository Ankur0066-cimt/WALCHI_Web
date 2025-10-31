
import wallchilogo from "../../assets/Walchi.png";

const EstimateCost = () => {
  return (
    <div className="w-full max-w-10xl bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left Column (Text) */}
      <div className="flex-1 flex flex-col justify-center space-y-2">
        <img
          src={wallchilogo}
          alt="Wallchi"
          className="w-50 h-25 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        />
        <h2 className="text-gray-700 text-lg font-semibold">Beautifulhomes</h2>
        <h1 className="text-4xl font-bold text-red-600 leading-tight">
          Painting <br /> Service
        </h1>
        <p className="text-gray-600 text-sm">
          Bid goodbye to your home painting hassles with our expert supervision
        </p>
      </div>

      <div className="flex-1 w-full">
        <div className="space-y-4">
          {/* Row 1 */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="flex-1 p-3 text-base border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 text-base border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* Row 2 */}
          <div className="flex gap-4">
            <input
              type="tel"
              placeholder="Enter mobile number"
              className="flex-1 p-3 text-base border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Enter your Pincode"
              className="flex-1 p-3 text-base border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* Toggle + Checkboxes */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-green-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer-checked:bg-green-600 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
              </label>
              <span className="text-green-600 text-base">
                Update me on WhatsApp
              </span>
            </div>

            <div className="flex gap-4 flex-wrap">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-gray-700"
                />
                <span className="text-gray-600 text-base">
                  Construction work going on at my house
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-gray-700"
                />
                <span className="text-gray-600 text-base">
                  Local painter hired
                </span>
              </label>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-gray-500 text-sm">
            By proceeding, you are authorizing Wallchi and its suggested
            contractors to get in touch with you through calls, SMS, or e-mail.
          </p>

          {/* Button */}
          <button className="w-full bg-yellow-500 text-white py-3 rounded-full font-semibold text-lg hover:bg-yellow-600 transition-colors flex items-center justify-center">
            Enquire Now &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstimateCost;
