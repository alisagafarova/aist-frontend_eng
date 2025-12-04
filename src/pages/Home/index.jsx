import React from 'react';
import styles from "./Home.module.scss";
import { Link, useLocation } from 'react-router-dom';
import image_page from '../../images/image_page.jpg'
import image_me from '../../images/me.png'
import { useSelector } from 'react-redux'; // Подключаем Redux
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const isAuthenticated = useSelector((state) => state.terminal.auth.isAuthenticated); // Получаем состояние авторизации
  const currentUser = useSelector((state) => state.terminal.currentContext.currentUser); // Получаем текущего пользователя
  const currentLab = useSelector((state) => state.terminal.currentContext.currentLab); // Получаем текущую лабораторию
  const currentTask = useSelector((state) => state.terminal.currentContext.currentTask); // Получаем текущую лабораторию
  
  const tasks = useSelector(
    (state) => state.terminal.users[currentUser]?.labs[currentLab]?.tasks || {},
  );
  const lastVisited = useSelector(
    (state) =>state.terminal.lastVisitedPath
  );

  const navigate = useNavigate();

  const handleStartLearning = async () => {
    if (!isAuthenticated) {
      navigate('/login/'); // Перенаправляем на страницу входа
    } else {
      const lastVisitedPath = lastVisited || '/intro/';
      navigate(lastVisitedPath); // Перенаправляем на сохраненную страницу
    }
  };
  

  return (
    <div className={styles.root}>
      <div className={styles.intro}>
        <h1 className={styles.intro_title}>Learn Network Technologies from Beginner to Professional</h1>
        <button className={styles.intro_button} onClick={handleStartLearning}> Start Learning</button>
      </div>
      <div className={styles.network}>
        <img src={image_page} className={styles.network_image}/>
      </div>
      <div className={styles.about}>
        <img src={image_me} className={styles.image_me}/>
        <div className={styles.about_text}>
          <p> Hello everyone!</p>
          <p>My name is Sergey Ovintsovsky, and this is the beta version of the website about network technologies.</p>
          <p>The idea of this site is to create a unique platform for learning networks, where you will find:</p>
            <li> Concise and easy-to-understand theoretical materials</li>
            <li>Interesting video lessons</li>
            <li>And most importantly, practical exercises on an emulated console</li>
          <p>I ask you to test the site and share your impressions. I will be happy to receive your suggestions and words of thanks!</p> 
        </div>
      </div>
      <button className={styles.go_button} onClick={handleStartLearning}>Let’s start testing</button>
    </div>
  );
};





