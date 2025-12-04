import React, { useEffect } from 'react';
import styles from './InterfaceConfig.module.scss';
import { ProgressBar } from '../../../components/ProgressBar';
import { useDispatch } from 'react-redux';
import { setCurrentTask, setcurrentLab, setCurrentRouter } from '../../../redux/slices/slices';

export const InterfaceConfiguration = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentTask('interface-config'));
    dispatch(setcurrentLab('lab1'));
    dispatch(setCurrentRouter('R1'));
  }, [dispatch]);

  const navigateBack = () => {
    window.location.href = '/intro/';
  };

  const navigateToTask = () => {
    window.location.href = '/interface-config/task1/';
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
            <h2>Interface Configuration</h2>
            <p>
              So, the essence of the first demo task is configuring router interfaces. For this,
              we'll temporarily ignore the complexity of network management and imagine that all
              routers are physically connected, and a magical network fairy gives us access to any
              router in the network.
            </p>
            <p>So, to configure an interface, you need to:</p>
            <ol>
              <li>
                <b>Use magic to connect:</b> in real life, protocols such as SSH or Telnet are used
                for this.
              </li>
              <li>
                <b>Enter router configuration mode:</b> <pre>Router# configure terminal</pre>
              </li>
              <li>
                <b>Go to the level of the interface you want to configure:</b>{' '}
                <pre>Router(config)# interface GigabitEthernet 0/0</pre>
              </li>
              <li>
                <b>Go to the level of the interface you want to configure:</b>{' '}
                <pre>Router(config-if)# ip address 192.168.1.1 255.255.255.0</pre>
              </li>
              <li>
                <b>Activate the interface:</b> <pre>Router(config-if)# no shutdown</pre>
              </li>
              <li>
                <b>Check the settings:</b> <pre>Router# show ip interface brief</pre>
              </li>
            </ol>
            <p>
              Cool! The long “Why?” turns into 2–3 commands you need to enter on the router, and
              everything works. This is the feeling we want to convey: in reality, everything
              network engineers do boils down to entering a few commands to make the routers perform
              the necessary actions.
            </p>
            <p>
              Another truth is that the basic configuration may be simple, but the network solutions
              behind it can be much more complex. However, at this stage, we will focus on the
              basics.
            </p>

            <h3>Routing</h3>
            <p>
              So, routers are connected to each other, and interfaces are configured with IP
              addresses. How do you get from point A to point B? For this, each router must know
              which networks are nearby and through which devices they can be reached. This
              information is called a route.
            </p>
            <p>
              The most important type of routes at the initial stage are (*directly*) connected
              networks. Such routes tell the router that it knows about a network because it is
              directly connected to one of its interfaces.
            </p>
            <p>
              For example, from the configuration above, the router learns about the 192.168.1.0/24
              network because it is connected via the GigabitEthernet 0/0 interface.
            </p>

            <h3>Example of interface configuration</h3>
            <pre>
              Router&gt; enable{'\n'}
              Router# configure terminal{'\n'}
              Router(config)# interface GigabitEthernet 0/0{'\n'}
              Router(config-if)# ip address 192.168.1.1 255.255.255.0{'\n'}
              Router(config-if)# no shutdown{'\n'}
              Router(config-if)# exit{'\n'}
              Router(config)# exit{'\n'}
              Router# show ip interface brief
            </pre>
          </div>
          <div className={styles.buttons_bar}>
            <button className={styles.taskButton} onClick={() => navigateBack()}>
              Introduction
            </button>
            <button className={styles.taskButton} onClick={() => navigateToTask()}>
              Go to task
            </button>
          </div>
        </main>
      </div>
    </>
  );
};
