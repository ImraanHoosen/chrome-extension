//Declare an empty array to store the saved leads
let myLeads = [];

//Get references to the input field, button and unordered list
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

//Add an event listener to the button that will add the input value to the array when clicked
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);

  renderLeads(); //Render the list of leads on the page
});

//Create a string of list items from the array and add it to the unordered list
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
  }
  ulEl.innerHTML = listItems;
}
