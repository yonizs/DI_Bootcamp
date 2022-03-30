// In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (li).
// Finally, append this updated list node to the unordered list above, using the appendChild method.
// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements from their parent element (ul). Display the text of each link. (Hint: use the textContent property).

document.getElementById("navBar").id = "socialNetworkNavigation";

function function1() {
 const ul = document.getElementsByTagName("ul");
 const li = document.createElement("li");
 li.appendChild(document.createTextNode("Logout"));
 ul.appendChild(li);
}
