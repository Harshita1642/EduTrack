import { useState } from "react";
import { verifyUser } from "../../services/userAuth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function VerifyUser() {
  const [formData, setFormData] = useState({
    otp: "",
    activationToken: localStorage.getItem("activationToken"), // Automatically fetch token from localStorage
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await verifyUser({otp : Number(formData.otp), activationToken :formData.activationToken});
      toast.success(response.data.message);
      navigate("/login");
      localStorage.removeItem("activationToken"); // Clear token after success
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid OTP or token expired!");
    }
  };

  return (
    <div className="min-h-screen w-screen bg-[#d8c0f7] flex items-center justify-center absolute top-0 left-0 right-0 bottom-0">
      <div className="w-full max-w-sm p-8 bg-purple-900 rounded-lg shadow-xl text-white mx-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white" 
            style={{ fontFamily: "'Playfair Display', serif" }}>
          Verify OTP
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-purple-100">
              OTP
            </label>
            <input
              id="otp"
              type="text"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-purple-200 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-gray-800"
              required
            />
          </div>
          <button
            type="submit"
            className="w-2/3 mx-auto block bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}
