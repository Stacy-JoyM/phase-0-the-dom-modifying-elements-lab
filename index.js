// Write your code here!
const main = document.getElementById("main")
main.remove()


const newHeader = document.createElement("h1")


newHeader.setAttribute("id" , "victory");
newHeader.innerHTML = "Stacy Joy is the champion"

const body = document.getElementsByTagName("body")[0];
body.appendChild(newHeader)