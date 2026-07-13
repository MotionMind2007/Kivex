import * as icons from '../../packages/kivex-icons/dist/index.js';
import { buildKivexIcon } from '../../packages/kivex-icons/dist/index.js';
import { replaceKivexIcons } from '../../packages/kivex-icons/dist/index.js';
import { getKivexIconString } from '../../packages/kivex-icons/dist/index.js';

let mood = "buildKivexIcon";
let color = "#000000";
let size = 24;
let strokeWidth = 2;

const iconData = Object.entries(icons).filter(([_, value]) => typeof value !== "function");
const iconContainer = document.getElementById('icons');
const h = document.getElementById('h');
h.innerText += `(${iconData.length})`
const controlContainer = document.getElementById('control');
const select = document.createElement("select");
controlContainer.appendChild(select);
function toKebabCase(str) {
    return str
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .toLowerCase();
}
["buildKivexIcon", "replaceKivexIcons", "getKivexIconString"].forEach(m => {
    const option = document.createElement('option');

    option.value = m;
    option.textContent = m;

    if (m === mood) {
        option.selected = true;
    }
    select.appendChild(option);
});
select.addEventListener("change", () => {
    mood = select.value;
    console.log(mood);
    render();
});
const colorInput = document.createElement('input');
colorInput.value = color;
colorInput.type = "color";
controlContainer.appendChild(colorInput);
colorInput.addEventListener("input", () => {
    color = colorInput.value;
    render();
});
const sizeInput = document.createElement("input");
const sizeValue = document.createElement('p');
sizeValue.innerHTML = `size: ${size}px`;
sizeInput.type = "range";
sizeInput.min = 12;
sizeInput.max = 128;
sizeInput.step = 1;
sizeInput.value = size;
sizeInput.addEventListener("input", () => {
    size = Number(sizeInput.value);
    sizeValue.innerHTML = `size: ${size}px`;
    render();
});
const strokeInput = document.createElement("input");
const strokeWidthValue = document.createElement('p');
strokeWidthValue.innerHTML = `stroke-width: ${strokeWidth}`;
strokeInput.type = "range";
strokeInput.min = 0.5;
strokeInput.max = 5;
strokeInput.step = 0.5;
strokeInput.value = strokeWidth;
strokeInput.addEventListener("input", () => {
    strokeWidth = Number(strokeInput.value);
    strokeWidthValue.innerHTML = `stroke-width: ${strokeWidth}`;
    render();
});
controlContainer.append(sizeValue, sizeInput);
controlContainer.append(strokeWidthValue, strokeInput);
function render() {
    iconContainer.innerHTML = "";
    if (mood === "buildKivexIcon") {
        iconData.forEach(([name, icon])=>{
            const svg = buildKivexIcon(icon, {color: color, size: size, strokeWidth: strokeWidth});
            const div = document.createElement('div');
            div.className = "icon";
            const p = document.createElement('p');

            div.appendChild(svg);
            p.innerHTML=name;
            div.appendChild(p)
            iconContainer.append(div);
        })
    } else if (mood === "replaceKivexIcons"){
        iconData.forEach(([name, icon])=>{
            const svg = document.createElement('i');
            svg.dataset.kivex = toKebabCase(name);
            svg.dataset.color = color;
            svg.dataset.size = size;
            svg.dataset.strokeWidth = strokeWidth;
            const div = document.createElement('div');
            div.className = "icon";
            const p = document.createElement('p');

            div.appendChild(svg);
            p.innerHTML=toKebabCase(name);
            div.appendChild(p);
            iconContainer.appendChild(div);
        });
        replaceKivexIcons();
    } else if (mood === "getKivexIconString"){
        iconData.forEach(([name, icon])=>{
            const svg = getKivexIconString(icon, {color: color, size: size, strokeWidth: strokeWidth});
            const div = document.createElement('div');
            div.className = "icon";
            const p = document.createElement('p');

            div.innerHTML=svg;
            p.innerHTML=name;
            div.appendChild(p);
            iconContainer.appendChild(div);
        })
    }
}

render();