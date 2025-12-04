import React, { useEffect } from 'react';
import styles from './Introduction.module.scss';
import { ProgressBar } from '../../components/ProgressBar';
import { useDispatch } from 'react-redux';
import { setCurrentTask, setcurrentLab, setCurrentRouter } from '../../redux/slices/slices';

export const Introduction = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentTask('introduction'));
  }, [dispatch]);

  const navigateToNextPage = () => {
    window.location.href = '/interface-config/';
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.pageContainer}>
        <main className={styles.content}>
          <div className={styles.config_guide}>
            <h2>Introduction</h2>
            <p>
              Hello, welcome to the depot of our future course! Its idea is to make networks simple
              and understandable for anyone: a network engineer, programmer, or even a biological
              marketer :)
            </p>

            <h3>Where do we start?</h3>
            <p>
              The large and complex internet is actually just many network devices connected
              together, sending network packets back and forth. All well-known services like Google
              or Amazon are simply servers connected somewhere in the global network. The rest is
              easy — just reach those servers.
            </p>

            <p>
              As I mentioned above, a network is just many network devices connected to each other.
              At this stage, let's consider all “network devices” as routers (for simplicity). In
              reality, the network world is slightly more complex (but only just a little).
            </p>

            <h3>How do routers connect and communicate with each other?</h3>
            <p>
              For this, they use their ports, or as we (network engineers) like to call them in
              English — interfaces. An interface is both a physical and logical entity. First, it's
              a place where cables are plugged in to physically connect devices. Second, it is a
              logical entity that must have parameters for future interaction — mode, address, etc.
            </p>
          </div>
          <button className={styles.taskButton} onClick={() => navigateToNextPage()}>
            Let’s get to it
          </button>
        </main>
      </div>
    </>
  );
};
