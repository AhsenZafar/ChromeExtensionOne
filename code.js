const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let myLeads =[]
const ulEl = document.getElementById("ul-el")

let LeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (LeadsFromLocalStorage){
    myLeads = LeadsFromLocalStorage
    renderLeads()
}

// save input leads into myleads array
inputBtn.addEventListener("click", function(){
    
    myLeads.push(inputEl.value)
    inputEl.value =""
    // store leads in localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

// store leads into listItems variable
function renderLeads(){
    let listItems =""
    for (let i =0; i < myLeads.length; i++){
        listItems += `
            <li>
                <a target = 'blank' href = '${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            <li>
            `
        
        
        
    }
// display listItems onto page by making them the content for the unordered list
    ulEl.innerHTML = listItems



}

