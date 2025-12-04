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

export const StaticRouteConfig = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentTask('static-route'));
    dispatch(setcurrentLab('lab2'));
    dispatch(setCurrentRouter('R1'));
  }, [dispatch]);
  const { currentUser, currentLab } = useSelector((state) => state.terminal.currentContext);

  const handleReset = () => {
    dispatch(resetTask({ currentUser, currentLab, taskId: 'static-route' }));
    alert('Task has been reset. The router configuration has been cleared.');
  };

  const handleHelp = () => {
    alert('A hint will appear here.');
  };

  const labData = {
    title: 'Task: Static Route Configuration',
    description:
      'Configure a static route on router R1 to the network 192.168.1.0/24. Make sure the route appears in the routing table as static.',
    steps: [
      'Configure the static route using the ip route command.',
      'Verify that the route appears in the routing table.',
    ],
    imagePath: '/images/static_route_config.png',
    imageAlt: 'Static Route Configuration',
    previousLink: '/static-route/',
    taskId: 'static-route',
    resetImage: resetImage,
    helpImage: helpImage,
    hints: [
      'Enter the command:\nconfigure terminal',
      'Enter:\nip route 192.168.1.0 255.255.255.0 10.2.2.2',
      'Check the static route with the command:\nshow ip route',
    ],
  };

  return <TaskContainer labData={labData} onReset={handleReset} onHelp={handleHelp} />;
};
