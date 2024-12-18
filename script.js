//Declare an empty array to store the saved leads
let myLeads = [];

//Get references to the input field, button and unordered list
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

//Add an event listener to the button that will add the input value to the array when clicked
//Then render the list of leads on the page and clear the input field
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
});

/**
 * Renders the list of leads as clickable links in the unordered list element.
 * Iterates over the myLeads array and creates list items with links for each lead.
 * Updates the innerHTML of the ulEl with the generated list items.
 */
function renderLeads() {
  // Initialize an empty string to accumulate list items
  let listItems = "";

  // Loop through each lead in the myLeads array
  for (let i = 0; i < myLeads.length; i++) {
    // Append a list item with a link to the listItems string
    listItems += `
    <li>
      <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
      </a>
    </li>
    `;
  }

  // Update the unordered list's innerHTML with the accumulated list items
  ulEl.innerHTML = listItems;
}
