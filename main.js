
const containerEl = document.getElementById("container");
const root = document.querySelector(':root');
const slider = document.getElementById("myRange");
const output = document.getElementById("valueDisplay");
const colorInput = document.getElementById("colorEl");





// Update the current slider value
output.innerHTML = slider.value;
// Update the current slider value 
slider.oninput = function() {
  setX()
} 

function setX()
{
  output.innerHTML = slider.value;
  createDiv(slider.value)
}





// Function to create div elements
function createDiv(x_value) 
{
  // get user input of board size through z ; 
  let x = x_value;
  // Get the styles (properties and values) for the root
  const rootStyle = getComputedStyle(root);
  // Set the value of variable --base
  root.style.setProperty('--base', x);
  let y = "";
  for (let i = 0; i < x ** 2; i++) 
  {
      y += "<div class='divChilds'></div>";
  }

  containerEl.innerHTML = y;
}


function setColor()
{
  return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

// Function to access children elements
function accessChildren(event) 
{
  const childrenEl = containerEl.children;
  //console.log(event.target);
  for (var i = 0; i < childrenEl.length; i++)
  {
    if (childrenEl[i] === event.target)
    {
      
      childrenEl[i].style.backgroundColor = setColor();
    }
  }
}


// Wait for the window to load before creating div elements
window.onload = function () {
    createDiv(12);
};
