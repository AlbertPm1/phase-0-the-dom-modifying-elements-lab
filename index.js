// Write your code here!
document.getElementById("main").remove()
const newHeader = document.createElement("h1")
newHeader.setAttribute('id', 'victory')
newHeader.textContent = "Peter is the champion"
document.body.append(newHeader)