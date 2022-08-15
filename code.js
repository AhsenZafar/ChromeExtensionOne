const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let myLeads =[]
const ulEl = document.getElementById("ul-el")
inputBtn.addEventListener("click", function(){
    
    myLeads.push(inputEl.value)
})


for (let i =0; i < myLeads.length; i++){
    ulEl.textContent += myLeads[i] + ""
}

