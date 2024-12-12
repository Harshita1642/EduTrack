import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import { CourseData } from "../../context/CourseContext";

export default function Login() {
  const {loginUser} = UserData();
  const {fetchMyCourse} = CourseData();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(formData.email,formData.password,navigate,fetchMyCourse);
      // toast.success(`Welcome back ${response.data.user.name}`);
      // localStorage.setItem("token", response.data.token);
      // if(response.data.user.role ==='user'){
      //   navigate('/StudDash');
      // }
      // else{
      //   navigate('/tutDash')
      // }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    
    <div className="min-h-screen w-screen bg-[#d8c0f7] flex items-center justify-center absolute top-0 left-0 right-0 bottom-0">
      <div className="w-full max-w-sm p-8 bg-purple-900 rounded-lg shadow-xl text-white mx-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-purple-100"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="mt-1 block w-full px-3 py-2 bg-purple-50 border border-purple-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-purple-900"
              required
            />
          </div>
          
          <div>
            <label
              htmlFor="password"                           
              className="block text-sm font-medium text-purple-100"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="mt-1 block w-full px-3 py-2 bg-purple-50 border border-purple-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-purple-900"
              required
            />
          </div>
          <button
            type="submit"
            className="w-1/3 mx-auto block bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300"
          >
            Login
          </button>
        </form>
        
        <p className="text-center mt-4 text-purple-100">
          Don't have an account?{" "}
          <span
            className="text-purple-300 hover:text-purple-200 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
        <p className="text-center mt-2 text-purple-100">
          Forgot your password?{" "}
          <span
            className="text-purple-300 hover:text-purple-200 cursor-pointer"
            onClick={() => navigate("/forgot-password")}
          >
            Reset Password
          </span>
        </p>
      </div>
    </div>
  );
}