document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector(`form`)
  form.addEventListener('submit', (e) => {
    e.preventDefault()
   addNewTask(e.target.mytask.value)
   form.reset()
  })
}); 

function addNewTask (task){
  let p = document.createElement(`p`)
  p.textContent = `${task} `
  document.querySelector(`#list`).appendChild(p)
  let btn = document.createElement(`button`)
  btn.textContent =  "x"
  p.appendChild(btn)
  btn.addEventListener(`click`, deleteTask)
}

function deleteTask(e){
  e.target.parentNode.remove()
}


