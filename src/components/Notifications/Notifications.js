import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import sprite from '../../assets/icons/symbol-defs.svg';
import styles from './Notifications.module.scss';
import './CSSTransitionStyles.scss';
import './Notifications.module.scss';
import Notification from '../Notification/Notification';

import AppContext from '../../context';

const Notifications = () => {
  const context = useContext(AppContext);
  const { notifications, removeNotification, setNotifications } = context;

  const msgs = [...notifications];

  // Remove notification after 4s
  useEffect(() => {
    const timer = setTimeout(() => {
      if (msgs.length) {
        msgs.shift();
        setNotifications(msgs);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [notifications]);

  const allNotifications = notifications.map(({ txt, id, type }) => {
    return (
      <CSSTransition
        key={id}
        classNames={{
          enter: 'item__enter',
          enterActive: 'item__enterActive',
          exit: 'item__exit',
          exitActive: 'item__exitActive',
        }}
        timeout={{ enter: 500, exit: 300 }}
        mountOnEnter
        unmountOnExit
      >
        <li key={id} onClick={() => removeNotification(id)}>
          <Notification txt={txt} id={id} type={type} />
        </li>
      </CSSTransition>
    );
  });

  return (
    <ul className={styles.notifications__ul}>
      <TransitionGroup>{allNotifications}</TransitionGroup>
    </ul>
  );
};

export default Notifications;
