const ulContainer = document.querySelector(".container-ul");
const hamBurger = document.querySelector("#ham-burgar");

console.log(ulContainer,hamBurger);


function showList() {
    // console.log("showlist");
    const list = document.createElement("li");
    // ulContainer.innerHTML = "";
    list.classList.add("list");
    list.innerHTML = `
    <a href="../html/editor.html"> <li class="list">Start Coding</li></a>
    <a href="../html/searchpen.html"><li class="list">Search Pens</li></a> 
    <a href="../html/challenges.html"><li class="list">Challenges</li></a>
    `;
    ulContainer.appendChild(list);
    
}

// ulContainer.innerHTML = "";
// showList();

hamBurger.addEventListener('click',showList);