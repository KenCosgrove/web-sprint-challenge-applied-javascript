// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  // instantiating the elements
  const headerContainer = document.querySelector(".header-container");
  const header = document.createElement("div");
  const date = document.createElement("span");
  const heading = document.createElement("h1");
  const temp = document.createElement("span");
  // setting class names, attributes and text
  header.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");
  date.textContent = "March 29, 2020";
  heading.textContent = "Lambda Times";
  temp.textContent = "98°";
  // creating the hierarchy
  headerContainer.appendChild(header);
  header.appendChild(date);
  header.appendChild(heading);
  header.appendChild(temp);
  // return
  return header;
}
Header();
