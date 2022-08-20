const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let myLeads =[]
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
// get leads from local storage back into array form
let LeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (LeadsFromLocalStorage){
    myLeads = LeadsFromLocalStorage
    render(myLeads)
}
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
// save input leads into myleads array
inputBtn.addEventListener("click", function(){
    
    myLeads.push(inputEl.value)
    inputEl.value =""
    // store leads in localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

// store leads into listItems variable
function render(leads){
    let listItems =""
    for (let i =0; i < leads.length; i++){
        listItems += `
            <li>
                <a target = 'blank' href = '${leads[i]}'>
                    ${leads[i]}
                </a>
            <li>
            `
        
        
        
    }
// display listItems onto page by making them the content for the unordered list
    ulEl.innerHTML = listItems



}

