import API from "./api";
export const addTaskToTimetable =(taskData)=>API.post("/user/addTask",taskData);
export const getTimeTable=()=>API.post("/user/getTimeTable");
export const deleteTaskFromTimetable=(taskId)=>API.delete("/user/deleteTask",{data:{id:taskId}});
export const updateTaskInTimeTable=()=>(updatedTask)=>API.delete("user/deleteTask",{data:{id:taskId}});
export const startDoingTask = (taskId) =>API.post("/user/startDoingTask", { id: taskId });
export const stopDoingTask = (taskId) =>API.post("/user/stopDoingTask", { id: taskId });