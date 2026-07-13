import './Mind.css'
import * as icons from "../../../packages/kivex-levelo/dist/index.js";

function App() {
  const iconData = Object.entries(icons);
  return (
    <div>
      <h2>All icons ({iconData.length}) for kivex-levelo</h2>
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
