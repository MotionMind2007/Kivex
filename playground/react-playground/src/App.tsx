import { Home, Heart, Star, Settings, Users, Folder } from 'kivex-react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Kivex Icons – All Props Demo</h1>

      <div className="icon-grid">
        <Home
          size={48}
          color="#4fc3f7"
          strokeWidth={1.8}
          className="icon icon-home"
          style={{ padding: '8px', borderRadius: '12px', background: 'rgba(79,195,247,0.15)' }}
          onClick={() => console.log('Home clicked')}
          aria-label="Navigate home"
          data-id="home-icon"
          role="button"
          tabIndex={0}
        />

        <Heart
          size={40}
          color="#ff6b6b"
          strokeWidth={2.2}
          className="icon icon-heart"
          style={{ filter: 'drop-shadow(0 2px 8px rgba(255,107,107,0.4))' }}
          onMouseEnter={() => console.log('Heart hovered')}
          onMouseLeave={() => console.log('Heart left')}
          aria-label="Like"
          data-testid="heart-icon"
        />

        <Star
          size={44}
          color="#ffd93d"
          strokeWidth={2.5}
          className="icon icon-star spin-on-hover"
          style={{ transition: 'transform 0.3s ease' }}
          onClick={() => alert('Star clicked!')}
          aria-label="Rate this"
          data-rating="5"
        />

        <Settings
          size={36}
          color="#bdbdbd"
          strokeWidth={1.2}
          className="icon icon-settings"
          style={{ opacity: 0.85 }}
          aria-label="Settings"
          role="img"
          data-options="gear"
        />

        <Users
          size={44}
          color="#a8e6cf"
          strokeWidth={2}
          className="icon icon-users"
          style={{ strokeDasharray: '2 2' }}
          aria-label="Team members"
          data-count="12"
        />

        <Folder
          size={52}
          color="#ffb347"
          strokeWidth={1.6}
          className="icon icon-folder"
          style={{ cursor: 'pointer' }}
          onClick={(e) => console.log('Folder clicked', e.target)}
          aria-label="Open folder"
          data-folder="documents"
        />
      </div>

      <p className="footer-note">Click or hover – all events work!</p>
    </div>
  );
}

export default App;