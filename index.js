const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body")

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody()

function updateBody(){
  if(inputEl.checked){
    bodyEl.style.backgroundImage = 'url("./night.jpg")'
  }else{
    bodyEl.style.backgroundImage = 'url("./day.jpg")'
  }
}

inputEl.addEventListener("input", ()=>{
  updateBody()
  updateLocalStorage()
})

function updateLocalStorage() {
  localStorage.setItem("mode", 
    JSON.stringify(inputEl.checked)
  );
}