
const list = document.getElementById("list");
let itemCount = list.children.length;
const button = document.getElementById("add-item");
const template = document.getElementById("list-item-template");

button.addEventListener("click", () => {
  const item = template.content.cloneNode(true);
  itemCount++;
  console.log(itemCount, "itemCount");
  item.querySelector(".title").innerText = `item ${itemCount}:`;
  item.querySelector(".content").innerText = `content ${itemCount}`;
  list.append(item);
});


let app =  document.getElementById('app')
const element =  document.createElement('div')
element.textContent = 'it static ' + Math.random()
app.append(element)

const afterendsiblingElement = document.createElement('div')
afterendsiblingElement.innerText = 'after Sibling elelment'

const beforebeginsiblingElement = document.createElement('div')
beforebeginsiblingElement.innerText = 'Before Sibling elelment'
// app.before(afterendsiblingElement)
// app.insertAdjacentElement('beforeend', afterendsiblingElement)
// app.insertAdjacentElement('afterbegin', beforebeginsiblingElement)

