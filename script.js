//Start Header Section
let mainHeader = document.createElement("div");
mainHeader.classList.add("main-header");

let brandName = document.createElement("div"),
    brandNameText = document.createTextNode("Mahmood");
brandName.append(brandNameText);
brandName.classList.add("brandName");


let btns = document.createElement("ul");
btns.classList.add("navs");
for(let i = 0 ; i<4 ; i++ ){
    let listItem = document.createElement("li");
    listItem.classList.add("nav");
    console.log(listItem);
    if(i === 0){
        listItem.innerHTML = "Home";
    } else if(i === 1){
        listItem.innerHTML = "About";
    } else if(i === 2){
        listItem.innerHTML = "Service";
    }else if(i === 3){
        listItem.innerHTML = "contact";
    }

    btns.appendChild(listItem);
}

mainHeader.append(brandName);
mainHeader.append(btns);
document.body.append(mainHeader);

//Start body Structre
let bodyContainer = document.createElement("div");
bodyContainer.classList.add("container");

for(let i = 0 ; i<15 ; i++){
    let box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `<div>${i + 1}</div><p>Product</p>`;
    bodyContainer.append(box);
}

document.body.append(bodyContainer);


//Start Footer
let foot = document.createElement("footer");
foot.classList.add("footer");

foot.innerHTML =`© Copyright 2021`;

document.body.append(foot);