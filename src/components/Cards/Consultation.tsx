import { useNavigate } from 'react-router-dom';
import consultancy from '../../assets/image.png'

const Consultation = () => {
  const navigate = useNavigate();
  return (
   <div className="relative w-auto h-auto p-2 rounded-lg shadow-lg">
 
  <img
    src={consultancy}
    alt="Consultation"
    className="w-full h-auto object-cover rounded-lg"
  />

  
  <div className="absolute inset-0 flex  justify-end bg-black/40 rounded-lg p-4 " >
  <div className="max-w-sm text-right mr-10 border-2 border-white p-6 rounded-lg bg-black/30">
  <h2 className="text-3xl font-semibold text-white">
    Refresh. Inspire. Elevate.
  </h2>
  <p className="text-gray-200 text-sm mt-2 mr-3">
    Get expert advice on your home painting project.
  </p>

  <form className="mt-5 space-y-4 w-full">
    <input
      type="text"
      placeholder="Enter your name"
      className="w-full p-3 text-base border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-white"
    />

    <input
      type="email"
      placeholder="Enter your email"
      className="w-full p-3 text-base border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-white"
    />

    <input
      type="tel"
      placeholder="Enter mobile number"
      className="w-full p-3 text-base border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-white"
    />

    <input
      type="text"
      placeholder="Enter your Pincode"
      className="w-full p-3 text-base border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-white"
    />

    <input
      type="text"
      placeholder="Enter your Address"
      className="w-full p-3 text-base border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-white"
    />
  <label className="flex flex-col text-white text-lg mb-5" style={{ textAlign: 'left' }}>
  Preferred Date for Site Visit:
  <input
    type="date"
    className="w-full p-3 text-base border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-white mt-2"
  />
</label>
    <label className="flex items-center gap-2 text-white text-base">
      <input type="checkbox" className="form-checkbox text-white" />
      I agree to the Terms and Conditions
    </label>

    <button
      type="submit"
      className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 mt-4"
      onClick={() => navigate("/")}
    >
      Book Now
    </button>
  </form>
</div>

</div>
</div>

   
  )
}

export default Consultation
