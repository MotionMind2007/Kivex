import type { Component } from 'solid-js';
import { Home, Chat, Users, Notification, Settings, Bookmark } from 'kivex-solid';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.container}>
      <h1>Kivex Solid Playground</h1>
      <p>Playground for testing kivex-solid icons</p>
      <div class={styles.icons}>
        <div class={styles.iwrapper}>
          <Home size={40} color="#333333" strokeWidth={2} />
          <span>Home</span>
        </div>

        <div class={styles.iwrapper}>
          <Chat size={40} color="#333333" strokeWidth={2} />
          <span>Messages</span>
        </div>

        <div class={styles.iwrapper}>
          <Users size={40} color="#333333" strokeWidth={2} />
          <span>Community</span>
        </div>

        <div class={styles.iwrapper}>
          <Notification size={40} color="#333333" strokeWidth={2} />
          <span>Notifications</span>
        </div>

        <div class={styles.iwrapper}>
          <Settings size={40} color="#333333" strokeWidth={2} />
          <span>Settings</span>
        </div>

        <div class={styles.iwrapper}>
          <Bookmark size={40} color="#333333" strokeWidth={2} />
          <span>Bookmark</span>
        </div>
          
      </div>
    </div>
  );
};

export default App;
