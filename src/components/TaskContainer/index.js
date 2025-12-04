import React, { useState } from 'react';
import TaskDescription from '../TaskDescription';
import TerminalConsole from '../TermialConsole';
import { ProgressBar } from '../../components/ProgressBar';
import CheckButton from '..//CheckButton';
import { Link } from 'react-router-dom';
import styles from './TaskContainer.module.scss';

const TaskContainer = ({ labData, onReset }) => {
  const { title, description, steps, imagePath, imageAlt, previousLink, taskId, hints } = labData;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ProgressBar />
      <div className={styles.lab_block}>
        <div className={styles.lab_environment}>
          {/* Task description */}
          <TaskDescription
            title={title}
            description={description}
            steps={steps}
            imagePath={imagePath}
            imageAlt={imageAlt}
          />
          {/* Console */}
          <TerminalConsole />
        </div>

        {/* Control panel */}
        <div className={styles.lab_buttons}>
          <div className={styles.left}>
            <Link to={previousLink}>
              <button className={styles.button_previous}>Back to topic</button>
            </Link>
          </div>
          <div className={styles.right}>
            <button className={styles.resetButton} data-tooltip="Hint" onClick={openModal}>
              <img src={labData.helpImage} className={styles.image_button} alt="Hint" />
            </button>
            <button
              className={styles.resetButton}
              data-tooltip="Reset configuration"
              onClick={onReset}>
              <img src={labData.resetImage} className={styles.image_button} alt="Reset" />
            </button>
            <CheckButton taskId={taskId} />
          </div>
        </div>
        {/* Modal window */}
        {isModalOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <button className={styles.closeButton} onClick={closeModal} aria-label="Close">
                &times;
              </button>
              <h3>Hints:</h3>
              <ul>
                {hints.map((hint, index) => (
                  <li key={index}>
                    {hint.split('\n').map((line, i) =>
                      line.startsWith('interface') ||
                      line.startsWith('ip') ||
                      line.startsWith('no') ||
                      line.startsWith('show') ||
                      line.startsWith('configure') ||
                      line.startsWith('ping') ? (
                        <pre key={i} className={styles.commandStyle}>
                          {line}
                        </pre>
                      ) : (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ),
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskContainer;
