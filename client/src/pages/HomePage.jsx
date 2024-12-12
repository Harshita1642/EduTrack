import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/ui/button";
import s from '../Styles/HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <div className={s['home-container']}>
      <div className={s['home-content']}>
        <h1 className={s['home-title']}>EduTrack</h1>
        <p className={s['home-subtitle']}>Your Personal Education Management Platform</p>
        
        <div className={s['button-group']}>
          <Button 
            variant="ghost" 
            size="sm" 
            className={s['login-button']} 
            onClick={handleLogin}
          >
            Login
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className={s['get-started-button']} 
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;