import React, { useEffect } from 'react';
import styles from './StaticRoute.module.scss';
import { ProgressBar } from '../../../components/ProgressBar';
import { useDispatch } from 'react-redux';
import { setCurrentTask, setcurrentLab, setCurrentRouter } from '../../../redux/slices/slices';

export const StaticRoute = () => {
  const dispatch = useDispatch();
  dispatch(setcurrentLab('lab2'));
  dispatch(setCurrentRouter('R1'));
  dispatch(setCurrentTask('static-route'));

  const navigateToTask = () => {
    window.location.href = '/static-route/task2/';
  };

  const navigateBack = () => {
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
            <h2>Static Route Configuration</h2>
            <p>
              Now everything works if the required networks are directly connected to the router. In
              other words, we could take a single router, connect all the networks in the world to
              it, and our internet would be ready.
            </p>
            <p>- “But that's impossible!” you might say. “Of course it is!” I would answer.</p>
            <p>
              Therefore, to make everything work globally, we need mechanisms that allow the router
              to learn about networks that are not directly connected to it: to tell it that these
              networks exist and how to reach them.
            </p>

            <h3>Static Routes</h3>
            <p>
              As mentioned earlier, static routes are a way to manually tell the router where to go.
              This method lacks any mechanisms for the router to make decisions on its own, which is
              a drawback. However, it can still be a useful tool even in modern, complex network
              designs.
            </p>
            <p>
              В первую очередь статический маршрут включает:
              <ul>
                <li>
                  The network we want to inform the router about, for example,{' '}
                  <code>192.168.2.0/24</code>.
                </li>
                <li>
                  The “next hop” is the address through which the data must be forwarded to reach
                  the target network. This address must be reachable; otherwise, the route will not
                  appear in the routing table.
                </li>
              </ul>
            </p>

            <h3>The main steps for configuring a static route</h3>
            <ol>
              <li>
                Enter configuration mode:
                <pre>Router# configure terminal</pre>
              </li>
              <li>
                Adding a static route:
                <pre>
                  Router(config)# ip route &lt;destination&gt; &lt;mask&gt; &lt;next-hop&gt;
                </pre>
                For example:
                <pre>Router(config)# ip route 192.168.2.0 255.255.255.0 10.1.1.2</pre>
              </li>
              <li>
                Checking the routing table:
                <pre>Router# show ip route</pre>
              </li>
            </ol>

            <h3>How to delete a static route</h3>
            <p>
              If the route is no longer needed, it can be removed using the command:
              <pre>
                Router(config)# no ip route &lt;destination&gt; &lt;mask&gt; &lt;next-hop&gt;
              </pre>
            </p>
            <p>
              For example, to delete the route to the network <code>192.168.2.0/24</code> via the
              gateway <code>10.1.1.2</code>, execute:
              <pre>Router(config)# no ip route 192.168.2.0 255.255.255.0 10.1.1.2</pre>
            </p>

            <h3>Example of displaying a static route in the routing table</h3>
            <pre>
              Router# show ip route Codes: C - connected, S - static, ... S 192.168.2.0/24 [1/0] via
              10.1.1.2
            </pre>
          </div>
          <div className={styles.buttons_bar}>
            <button className={styles.taskButton} onClick={() => navigateBack()}>
              Go back
            </button>
            <button className={styles.taskButton} onClick={() => navigateToTask()}>
              Go to the tasks
            </button>
          </div>
        </main>
      </div>
    </>
  );
};
