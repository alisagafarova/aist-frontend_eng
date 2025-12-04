import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskContainer from '../../../components/TaskContainer';
import {
  resetTask,
  setcurrentLab,
  setCurrentRouter,
  setCurrentTask,
} from '../../../redux/slices/slices';
import resetImage from '../../../images/redo.png';
import helpImage from '../../../images/problem-solving.png';

export const TaskInterfaceConfig = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentTask('interface-config'));
    dispatch(setcurrentLab('lab1'));
    dispatch(setCurrentRouter('R1'));
  }, [dispatch]); // Dependency to prevent unnecessary calls

  const { currentUser, currentLab } = useSelector((state) => state.terminal.currentContext);

  const handleReset = () => {
    dispatch(resetTask({ currentUser, currentLab, taskId: 'interface-config' }));
    alert('ask reset. Router configuration cleared.');
  };

  const handleHelp = () => {
    alert('A hint will appear here.');
  };

  const labData = {
    title: 'Task: Interface Configuration',
    description:
      'Сonfigure the GigabitEthernet 0/0 (Gi0/0) interface on router R1 with an IP address and enable it. Check the interface status using the show ip interface brief command and make sure the route appears in the routing table as connected.',
    steps: [
      'Set the IP address on the GigabitEthernet 0/0 (Gi0/0) interface.',
      'Enable the interface using the no shutdown command.',
      'Check the interface status with the show ip interface brief command.',
      'Ensure the network appears in the routing table as connected.',
    ],
    imagePath: '/images/int_confug_2.png',
    imageAlt: 'Interface Configuration',
    previousLink: '/interface-config/',
    taskId: 'interface-config',
    resetImage: resetImage,
    helpImage: helpImage,
    hints: [
      'Enter the command: \nconfigure terminal',
      'Enter:\ninterface Gi0/0',
      'Assign the IP address:\nip address 10.2.2.1 255.255.255.0',
      'Enable the interface with the command:\nno shutdown',
    ],
  };

  return <TaskContainer labData={labData} onReset={handleReset} onHelp={handleHelp} />;
};
