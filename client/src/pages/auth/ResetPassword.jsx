import { useState } from "react";
import { resetPassword } from "../../services/userAuth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setBtnLoading(true);
    try {
      const {data} = await resetPassword({token : localStorage.getItem("resetToken"), password : formData.password});
      localStorage.removeItem("resetToken");
      // const { data } = await axios.post(
      //   `${server}/api/user/reset?token=${params.token}`,
      //   {
      //     password : formData.password,
      //   }
      // );

      toast.success(data.message);
      navigate("/login");
      // setBtnLoading(false);
    } catch (error) {
      toast.error(error.response.data?.message);
      // setBtnLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold text-center mb-6">Reset Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter new password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
