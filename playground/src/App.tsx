import { Chat, Home, Notification, Search, Users, Dashboard, Share } from 'react-kivex';


import './App.css';

export default function App() {
  return (
    <>
    <div className='red'>
      <h1 className='text'>React Kivex Playground</h1> 
      <div className='container'>
        <div className='icons'>
          <Home size={40} />
          <span>Home</span>
        </div>
        
        <div className='icons'>
          <Chat size={40} />
          <span>Chat</span>
        </div>

        <div className='icons'>
          <Notification size={40} />
          <span>Notifications</span>
        </div>

        <div className='icons'>
          <Search size={40} />
          <span>Search</span>
        </div>
        
        <div className='icons'>
          <Users size={40} />
          <span>Community</span>
        </div>
      </div>

      <Dashboard 
        size={100}
        color='red'
      />

      <Share 
        size={100}
        color='blue'
        />
    </div>
    </>
  );
}