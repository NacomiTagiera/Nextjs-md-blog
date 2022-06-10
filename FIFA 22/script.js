const nastEl = document.getElementById("nastepny");
const poprzEl = document.getElementById("poprzedni");
const progressEl = document.querySelector(".progress-bar-front");
const stepsEl = document.querySelectorAll(".step");
const trescEl = document.querySelector(".tresc");

var odpowiedzi = ["Ta gra jest super!", "No może jest kilka niedociągnięć...", "Nic się nie zmieniło od poprzedniej wersji.", "Nie gram w to więcej!"];

let currentChecked = 1;

nastEl.addEventListener("click", () => {
  currentChecked++;

  if (currentChecked > stepsEl.length) 
  {
    currentChecked = stepsEl.length;
  }

  updateStepProgress();
});

poprzEl.addEventListener("click", () => {
  currentChecked--;

  if (currentChecked < 1) 
  {
    currentChecked = 1;
  }

  updateStepProgress();
});

function updateStepProgress() 
{
  stepsEl.forEach((stepEl, idx) => {       

    if (idx < currentChecked) 
    {            
      stepEl.classList.add("checked");           
      stepEl.innerHTML = `<i class="fas fa-check"></i><small>${"Tydzień " + (idx + 1) + "."}</small>`;           
      trescEl.innerHTML = `<blockquote class="blockquote mt-2 tresc">${"Tydzień " + currentChecked + ": " + odpowiedzi[currentChecked-1]}</blockquote>`;
    } 

    else 
    {      
      stepEl.classList.remove("checked");
      stepEl.innerHTML = `<i class="fas fa-times"></i>`;
      trescEl.innerHTML = `<blockquote class="blockquote mt-2 tresc">${"Tydzień " + currentChecked + ": " + odpowiedzi[currentChecked-1]}</blockquote>`;
    }
  });  

  const checkedNumber = document.querySelectorAll(".checked");

  progressEl.style.width = ((checkedNumber.length - 1) / (stepsEl.length - 1)) * 100 + "%";

  if (currentChecked === 1) 
  {
    poprzEl.disabled = true;
  } 

  else if (currentChecked === stepsEl.length) 
  {
    nastEl.disabled = true;
  } 

  else 
  {
    poprzEl.disabled = false;
    nastEl.disabled = false;
  }  
}