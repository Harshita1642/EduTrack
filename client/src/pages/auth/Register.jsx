import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../services/userAuth";
import { toast } from "sonner";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // Default role
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userRegister(formData);
      console.log(formData.role);
      toast.success(response.data.message);
      localStorage.setItem("activationToken", response.data.activationToken);
      navigate("/verify"); // Redirect to Verify OTP
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen w-screen bg-[#d8c0f7] flex items-center justify-center absolute top-0 left-0 right-0 bottom-0">
      <div className="w-full max-w-sm p-8 bg-purple-900 rounded-lg shadow-xl text-white mx-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white" 
            style={{ fontFamily: "'Playfair Display', serif" }}>
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-purple-100">Name</label>
            <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-purple-200 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-gray-800"
            required
          />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-100">Email</label>
            <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-purple-200 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-gray-800"
            required
          />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-100">Password</label>
            <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-purple-200 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-gray-800"
            required
          />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-100">Role</label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-purple-200 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-gray-800"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <button 
            type="submit"
            className="w-2/3 mx-auto block bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4 text-purple-100">
          Already have an account?{" "}
          <span
            className="text-purple-300 hover:text-purple-200 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}