import React, { useState } from 'react';
import styles from './ProgressBar.module.scss';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const progressData = [
  {
    paths: ['/interface-config/', '/interface-config/task1/'], // Array of paths
    label: '1. Interface configuration',
    progress: '33%',
  },
  {
    paths: ['/static-route/', '/static-route/task2/'], // Array of paths
    label: '2. Static route configuration',
    progress: '66%',
  },
  {
    paths: ['/network-config/', '/network-config/task3/'], //Array of paths
    label: '3. Network basics',
    progress: '99%',
  },
];

export const ProgressBar = () => {
  const location = useLocation(); // Get current path
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const tasks = useSelector((state) => state.terminal.tasks || {});

  // Найти текущий прогресс по текущему пути
  const currentProgress = progressData.find((item) => item.paths.includes(location.pathname)) || {
    label: 'Progress unknown',
    progress: '0%',
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const isTaskAccessible = (taskPaths) => {
    // If this is the first task, it is always accessible
    if (progressData[0].paths.some((path) => taskPaths.includes(path))) {
      return true;
    }

    // Find index of the current task
    const taskIndex = progressData.findIndex((item) =>
      item.paths.some((path) => taskPaths.includes(path)),
    );

    // Check completion of the previous task
    if (taskIndex > 0) {
      const prevTask = progressData[taskIndex - 1];
      return prevTask.paths.some((path) => tasks[path.split('/')[1]]?.isCompleted);
    }

    return false; // Not accessible by default
  };
  return (
    <div className={styles.pageContainer}>
      {!isSidebarVisible && (
        <button onClick={toggleSidebar} className={styles.menuButton}>
          <span className={styles.menuIcon}>☰</span>
        </button>
      )}
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isSidebarVisible ? styles.visible : ''}`}>
        <button onClick={toggleSidebar} className={styles.closeButton}>
          ✕
        </button>
        <nav className={styles.navigation}>
          <h3>Navigation</h3>
          <ul>
            {progressData.map((item, index) => {
              const isAccessible = isTaskAccessible(item.paths);

              return (
                <li key={index} className={!isAccessible ? styles.disabled : ''}>
                  {isAccessible ? (
                    <a
                      href={item.paths[0]}
                      className={item.paths.includes(location.pathname) ? styles.active : ''}>
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <main className={styles.content}>
        <div className={styles.progress}>
          <span className={styles.progressLabel}>Progress</span>
          <div className={styles.progressBar}>
            <div className={styles.progressCurrent} style={{ width: currentProgress.progress }} />
          </div>
          <p>{currentProgress.label}</p>
        </div>
      </main>
    </div>
  );
};
