import { For } from 'solid-js';
import * as icons from "../../../packages/kivex-solid/dist/index.js";
import "./App.css";

function App() {
  const iconData = Object.entries(icons);

  return (
    <div>
      <h2>All Icons ({iconData.length}) for kivex-solid</h2>
      <div class="icons">
        <For each={iconData}>
          {([name, Icon]) => (
            <div class="icon">
              <Icon size={24} /> 
              <p>{name}</p>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

export default App;
