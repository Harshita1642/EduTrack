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
      if(response.data.role === 'student'){
        navigate("/studDash")
      }
      else{
        navigate("/tutDash")
      }
      localStorage.removeItem("activationToken"); // Clear token after success
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid OTP or token expired!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold text-center mb-6">Verify OTP</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
            OTP
          </label>
          <input
            id="otp"
            type="text"
            placeholder="Enter OTP"
            value={formData.otp}
            onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Verify
        </button>
      </form>
    </div>
  );
}
