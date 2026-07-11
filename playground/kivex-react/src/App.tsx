import './App.css'
import * as icons from "../../../packages/kivex-react/dist/index.mjs";

function App() {
  const iconData = Object.entries(icons);
  return (
    <div>
      <h2>All icons ({iconData.length})</h2>
      <div className='icons'>
        {iconData.map(([name, Icon]) => (
          <div className='icon' key={name}>
            <Icon />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default App
