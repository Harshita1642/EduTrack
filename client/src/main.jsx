import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserContextProvider } from "./context/UserContext.jsx";
import { CourseContextProvider } from './context/CourseContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CourseContextProvider>
      <UserContextProvider>
        <App/>
      </UserContextProvider>
    </CourseContextProvider>
  </StrictMode>,
)
