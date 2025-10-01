const listItem = document.querySelector("#infi-list");

function addItem(count) {
    for(let i=0; i<count; i++) {
        const li = document.createElement("li");
        li.innerText = `Item ${i+1}`;
        listItem.append(li);
    }
}

addItem(10);

function checkScroll() {
    // console.dir(listItem.scrollTop);
    // console.dir(listItem.scrollHeight);
    // console.dir(listItem.clientHeight);
    if(listItem.scrollHeight - listItem.scrollTop - listItem.clientHeight < 1) {
        addItem(2);
    }
}

listItem.addEventListener("scroll", checkScroll);