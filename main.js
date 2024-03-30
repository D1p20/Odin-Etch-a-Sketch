//Variables
const containerEl = document.getElementById("container");
const root = document.querySelector(':root');
const output = document.getElementById("valueDisplay");
const colorInput = document.getElementById("colorEl");
const inputEl = document.getElementById("diveCount");
let color;



//Value for Rows and Columns
function setX()
{
  if (inputEl.value > 0 && inputEl.value <65)
  { 
    createDiv(inputEl.value);
  }
  else
  {
    alert("1 to 64 plz");
  }
}



//Value for Div Color
//set Global Color Variable Value
function setColor(clr)
{
  color = clr;  
}

//Set individual div background color on onmouseover
function setDivColor()
{
  return color;
}

//Random color does not work without this
function setRainbow()
{
  return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}




// Function to create div elements
function createDiv(x_value) 
{
  color = "black"; 
  let x = x_value;
  
  // Get the styles (properties and values) for the root
  const rootStyle = getComputedStyle(root);
  // Set the value of variable --base
  root.style.setProperty('--base', x);
  inputEl.value = "";
  let y = "";
  for (let i = 0; i < x ** 2; i++) 
  {
      y += "<div class='divChilds'></div>";
  }

  containerEl.innerHTML = y;
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
      if (color == "rainbow")
      {
        childrenEl[i].style.backgroundColor = setRainbow();
      }
      else
      {
        childrenEl[i].style.backgroundColor = setDivColor();
      }
      
    }
  }
}


// Wait for the window to load before creating div elements
window.onload = function () {
    createDiv(12);
    
};
