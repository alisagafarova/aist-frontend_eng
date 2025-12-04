import React, { useEffect } from 'react';
import styles from './NetworkBasicSetup.module.scss';
import { ProgressBar } from '../../../components/ProgressBar';
import { useDispatch } from 'react-redux';
import { setCurrentTask, setcurrentLab } from '../../../redux/slices/slices';

export const NetworkBasicSetup = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentTask('network-config'));
    dispatch(setcurrentLab('lab3'));
  }, [dispatch]);

  const navigateToTask = () => {
    window.location.href = '/network-config/task3/';
  };

  const navigateBack = () => {
    window.location.href = '/static-route/task2/';
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProgressBar />
      <div className={styles.pageContainer}>
        <main className={styles.content}>
          <div className={styles.config_guide}>
            <h2>Combined Network Setup</h2>
            <p>
              In the third module, we will combine what we learned in the previous two lessons. We
              will configure interfaces on routers to generate direct routes, fine-tune static
              routes to achieve connectivity between networks, and finally use the most popular
              network utility of modern times — <code>ping</code>!
            </p>

            <h3>What is ping?</h3>
            <p>
              It’s a utility implemented everywhere — on every network device and in many programs.
              It creates an ICMP request: a packet with a specific destination IP address that is
              sent according to the device’s routing information. If the packet goes to another
              router (or pings itself), it also checks its routing table. The process continues
              until the target address is reached.
            </p>
            <p>
              However, a successful ping is not just reaching the target address. The target must
              send back an ICMP reply, which returns to the ping source. Success is considered when
              both packets — outgoing and return — pass.
            </p>

            <h3>So, the plan of action:</h3>
            <ul>
              <li>Configure interfaces on both routers.</li>
              <li>Assign IP addresses and activate the interfaces.</li>
              <li>
                Configure a static route on <code>R1</code> to connect to the remote network.
              </li>
              <li>
                Test network connectivity using the <code>ping</code> command.
              </li>
            </ul>

            <h3>Interface configuration:</h3>
            <pre>
              Router# configure terminal{'\n'}
              Router(config)# interface GigabitEthernet 0/0{'\n'}
              Router(config-if)# ip address 192.168.1.1 255.255.255.0{'\n'}
              Router(config-if)# no shutdown{'\n'}
              Router(config-if)# exit{'\n'}
              Router(config)# exit
            </pre>

            <h3>Static route configuration on R1:</h3>
            <pre>
              Router&gt; enable{'\n'}
              Router# configure terminal{'\n'}
              Router(config)# ip route 192.168.2.0 255.255.255.0 10.1.1.2{'\n'}
              Router(config)# exit
            </pre>

            <h3>Check the routing table:</h3>
            <pre>Router# show ip route</pre>

            <h3>Check connectivity:</h3>
            <pre>Router# ping 192.168.2.1</pre>

            <h3>Example of a successful ping command result:</h3>
            <pre>
              Router# ping 192.168.2.1{'\n'}
              Sending 5, 100-byte ICMP Echos to 192.168.2.1, timeout is 2 seconds:{'\n'}
              !!!!!{'\n'}
              Success rate is 100 percent (5/5), round-trip min/avg/max = 1/2/4 ms
            </pre>
          </div>

          <div className={styles.buttons_bar}>
            <button className={styles.taskButton} onClick={() => navigateBack()}>
              Go back
            </button>
            <button className={styles.taskButton} onClick={() => navigateToTask()}>
              Go to the task
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

// Function to navigate to the task
const navigateToTask = () => {
  window.location.href = '/network-config/task3/';
};

const navigateBack = () => {
  window.location.href = '/static-route/task2/';
};
