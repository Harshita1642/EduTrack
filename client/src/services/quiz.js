import API from './api';

export const generateQuiz = (data) => API.post("/quiz/generate", data);

export const addQues = (data) => API.post("/quiz/addSingleQues",data);

export const getAll = (data) => API.post("/quiz/getAll",data);

export const markAns = (data) => API.get("/quiz/markAnswer",data);

export const submit = (data) => API.post("/quiz/submit",data);