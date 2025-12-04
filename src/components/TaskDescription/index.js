import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './TaskDescription.module.scss';
import IntConfigImg from '../../images/image_config.png';
import StaticRouteConfigImg from '../../images/ static_route_config.png';

const taskData = {
  '/interface-config/task1/': {
    title: 'Task: Interface Configuration',
    imageAlt: 'Interface Configuration',
    description:
      'Configure the GigabitEthernet 0/0 (Gi0/0) interface on router R1 with an IP address and enable it. Check the interface status using the command show ip interface brief and make sure the route appears in the routing table as connected.',
    steps: [
      'Configure the IP address on the GigabitEthernet 0/0 (Gi0/0) interface.',
      'Enable the interface using the no shutdown command.',
      'Check the interface status with the show ip interface brief command.',
      'Ensure that the network appears in the routing table as connected.',
    ],
    imagePath: IntConfigImg,
  },
  '/static-route/task2/': {
    title: 'Task: Static Route Configuration',
    imageAlt: 'Static Route Configuration',
    description:
      'Configure a static route on router R1 to the network 192.168.1.0/24. Ensure the route appears in the routing table as static.',
    steps: [
      'Configure the static route using the ip route command.',
      'Ensure the route is displayed in the routing table.',
    ],
    imagePath: StaticRouteConfigImg,
  },
  '/network-config/task3/': {
    title: 'Task: Static Route and Inter-Router Interaction',
    imageAlt: 'Static Route and Ping Configuration',
    description:
      'In this task, you will learn to switch between routers and configure interaction between them. On router R1, configure the GigabitEthernet 0/0 interface with IP address 10.2.2.1 and add a static route to the network 192.168.1.0/24. On router R2, configure the GigabitEthernet 0/1 interface with IP address 10.2.2.2. Verify the network 192.168.1.0/24 is reachable by running a ping from R1.',
    steps: [
      'Switch to router R1.',
      'Configure the GigabitEthernet 0/0 interface with IP address 10.2.2.1.',
      'Add a static route to the network 192.168.1.0/24.',
      'Switch to router R2.',
      'Configure the GigabitEthernet 0/1 interface with IP address 10.2.2.2.',
      'Return to router R1 and check network 192.168.1.0/24 reachability using the ping command.',
    ],
    imagePath: StaticRouteConfigImg,
  },
};

const TaskDescription = () => {
  const location = useLocation();
  const task = taskData[location.pathname] || {};

  return (
    <div className={styles.taskContainer}>
      {task.imagePath && (
        <div className={styles.lab_image_container}>
          <img src={task.imagePath} className={styles.lab_image} alt={task.imageAlt || 'Task'} />
        </div>
      )}
      <div className={styles.taskContent}>
        <h2>{task.title || 'Task not found'}</h2>
        <p>{task.description || 'Description not available'}</p>
        {task.steps && (
          <ul>
            {task.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskDescription;
