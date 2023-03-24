const menu = document.createElement("div");
menu.innerHTML = `
  <div class="menu-container">
    <div id="gui"></div>
    <h1 class="title">Fireflight</h1>
    <br>
    <h3 class="subtitle">Skipper</h3>
    <button onclick="skip()">Skip</button>
    <br><br>
    <h1 class="footer"></h1>
  </div>
`;

menu.classList.add("menu");
dragElement(menu.firstElementChild);
document.body.appendChild(menu);

function skip() {
  const score = prompt('What score do you want?');
  p1(score);

}

function farm() {
  alert('Farmer has been enabled!');
  localStorage.farm = stillthere = false;
}

function dragElement(element) {
  let start = { x: 0, y: 0 };
  let offset = { x: 0, y: 0 };
  
  element.addEventListener("mousedown", startDrag);
  
  function startDrag(event) {
    start = { x: event.clientX, y: event.clientY };
    offset = {
      x: element.offsetLeft,
      y: element.offsetTop
    };
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDrag);
  }
  
  function drag(event) {
    const delta = {
      x: event.clientX - start.x,
      y: event.clientY - start.y
    };
    element.style.left = `${offset.x + delta.x}px`;
    element.style.top = `${offset.y + delta.y}px`;
  }
  
  function stopDrag() {
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDrag);
  }
}
