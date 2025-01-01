import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"
import { getDatabase,
         ref,
         push,
         onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: process.env.DATABASE_URL
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

// Challenge: Log out a snapshot of your database when a new value is added to it
onValue()

deleteBtn.addEventListener("dblclick", function() {
    
})

inputBtn.addEventListener("click", function() {
    push(referenceInDB, inputEl.value)
    inputEl.value = "" 
})





// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// import {
//   getDatabase,
//   ref,
//   push,
//   onValue,
// } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// const firebaseConfig = {
//   databaseURL:
//     "https://tab-grabber-application-default-rtdb.europe-west1.firebasedatabase.app/",
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const referenceInDB = ref(database, "leads");
// //
// //
// //
// // Section 1: Setting up the initial state of the application

// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");
// const deleteBtn = document.getElementById("delete-btn");

// onValue(referenceInDB, function (snapshot) {
//   console.log(snapshot.val());
// });

// // Section 2: Adding a new lead from the user's input
// inputBtn.addEventListener("click", function () {
//   push(referenceInDB, inputEl.value);
//   inputEl.value = "";
// });

// // Section 4: Deleting all leads when the user double-clicks the delete button
// deleteBtn.addEventListener("dblclick", function () {});

// // Section 5: Rendering the leads list
// function render(leads) {
//   let listItems = "";
//   for (let i = 0; i < myLeads.length; i++) {
//     listItems += `
//     <li>
//       <a target='_blank' href='${leads[i]}'>
//         ${leads[i]}
//       </a>
//     </li>
//     `;
//   }
//   ulEl.innerHTML = listItems;
// }
