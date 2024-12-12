import API from "./api";

export const createCourse = async (courseData) => {
  
  const { data } = await API.post("/course/new", courseData,{
    headers: {
      token: localStorage.getItem("token"),
    }
  });
  return data;
};

export const addLecture = async (courseId, lectureData) => {
  const { data } = await API.post(`/course/${courseId}`, lectureData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const deleteCourse = async (courseId) => {
  const { data } = await API.delete(`/course/${courseId}`);
  return data;
};

// Lecture APIs
export const deleteLecture = async (lectureId) => {
  const { data } = await API.delete(`/lecture/${lectureId}`);
  return data;
};

// Stats API
export const getAllStats = async () => {
  const { data } = await API.get("/stats");
  return data;
};

// User APIs
export const getAllUsers = async () => {
  const { data } = await API.get("/users");
  return data;
};

export const updateUserRole = async (userId, updatedRole) => {
  const { data } = await API.put(`/user/${userId}`, { role: updatedRole });
  return data;
};
