import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskContainer from '../../../components/TaskContainer';
import { resetTask, setcurrentLab, setCurrentTask } from '../../../redux/slices/slices';
import resetImage from '../../../images/redo.png';
import helpImage from '../../../images/problem-solving.png';

export const NetworkBasicConfig = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentTask('network-config'));
    dispatch(setcurrentLab('lab3'));
  }, [dispatch]);

  const { currentUser, currentLab } = useSelector((state) => state.terminal.currentContext);

  const handleReset = () => {
    dispatch(resetTask({ currentUser, currentLab, taskId: 'network-config' }));
    alert('The task has been reset. The router configuration has been cleared.');
  };

  const handleHelp = () => {
    alert('A hint will appear here.');
  };

  const labData = {
    title: 'Task: Basic Network Configuration',
    description:
      'In this task, you will learn how to perform basic network configuration, including interface configuration and static routing on routers.',
    steps: [
      'Configure the GigabitEthernet 0/0 interface with the IP address 192.168.1.1/24.',
      'Enable the interface using the no shutdown command.',
      'Configure a static route to the 192.168.2.0/24 network.',
      'Check the availability of the 192.168.2.0/24 network by running the ping command.',
    ],
    imagePath: '/images/network_basic_config.png',
    imageAlt: 'Network Basic Configuration',
    previousLink: '/network-config/',
    taskId: 'network-config',
    resetImage: resetImage,
    helpImage: helpImage,
    hints: [
      'On R1, enter configuration mode, enter interface Gi0/0, and configure the static route: \ninterface Gi0/0\nip address 10.2.2.1 255.255.255.0\nno shutdown\nip route 192.168.1.0 255.255.255.0 10.2.2.1',
      'On R2, enter configuration mode, enter interface Gi0/1, and configure the interface: \ninterface Gi0/1\nip address 10.2.2.2 255.255.255.0\nno shutdown',
      'Check the route using the ping command from R1: \nping 192.168.1.1',
    ],
  };

  return <TaskContainer labData={labData} onReset={handleReset} onHelp={handleHelp} />;
};
