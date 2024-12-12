import API from "./api";

export const userRegister = (data) => API.post("/user/register", data);

export const verifyUser = (data) => API.post("/user/verify", data);

export const UserLogin = (data) => API.post("/user/login", data);

export const forgotPassword = (data) => API.post("/user/forgot", data);

export const resetPassword = (data) =>
  API.post(`/user/reset?token=${data.token}`, { password: data.password });

export const getMyProfile = (token) => API.get("/user/me",{headers:{
  token:token
}});
