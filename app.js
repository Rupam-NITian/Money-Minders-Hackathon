let btn = document.querySelectorAll(".sidebar .button");
let sidebar = document.querySelector(".sidebar");
let mainBox = document.querySelector(".mainBox");

function show(){
    let check = this.nextElementSibling.nextElementSibling;
    let ul = this.nextElementSibling.nextElementSibling.nextElementSibling;
    let btn =this;
    if(check.checked == true){
        ul.classList.remove('hide');
        btn.classList.add("selected");
    } else if(check.checked==false){
        ul.classList.add('hide');
        btn.classList.remove("selected");
    }
}

for(btn of btn){
    btn.addEventListener("click", show)
}

let checkSidebar = document.querySelector("#sidebar");

checkSidebar.addEventListener("click",() => {
    checkSidebar = document.querySelector("#sidebar");
    if(checkSidebar.checked == true){
        sidebar.classList.add("left");
        mainBox.classList.add("opacity");
        mainBox.classList.add("overflow");
    } else if(checkSidebar.checked == false){
        sidebar.classList.remove("left");
        mainBox.classList.remove("opacity");
        mainBox.classList.remove("overflow");
    }  
});


let infoLi = document.querySelectorAll(".info ul .infoLi");
for(info of infoLi){
    let check = info.children[1];
    let button = info.children[0];
    let div = info.children[2];
    button.addEventListener("click",() => {
        if(check.checked == true){
            div.classList.remove("hide");
        } else if(check.checked == false) {
            div.classList.add("hide");
        }
    });
}

let faqsLi = document.querySelectorAll(".faqs .faq");
for(faq of faqsLi){
    let check = faq.children[1];
    let button = faq.children[0];
    let div = faq.children[2];
    button.addEventListener("click",() => {
        if(check.checked == true){
            div.classList.remove("hide");
        } else if(check.checked == false) {
            div.classList.add("hide");
        }
    });
}



let bars = document.querySelectorAll(".intro .div2 label");

bars[0].addEventListener("click",() =>{
    let info = document.querySelector(".info");
    let check = bars[0].nextElementSibling.checked;
    // console.dir(bars[0].nextElementSibling.checked);
    if(check == true){
        info.classList.remove("hide");
    } else if(check == false){
        info.classList.add("hide");
    }
});

bars[1].addEventListener("click",() =>{
    let benefits = document.querySelector(".benefits");
    let check = bars[1].nextElementSibling.checked;
    // console.dir(bars[0].nextElementSibling.checked);
    if(check == true){
        benefits.classList.remove("hide");
    } else if(check == false){
        benefits.classList.add("hide");
    }
});

bars[2].addEventListener("click",() =>{
    let faqs = document.querySelector(".faqs");
    let check = bars[2].nextElementSibling.checked;
    // console.dir(bars[0].nextElementSibling.checked);
    if(check == true){
        faqs.classList.remove("hide");
    } else if(check == false){
        faqs.classList.add("hide");
    }
});

bars[3].addEventListener("click",() =>{
    let feedbacks = document.querySelector(".feedbacks");
    let check = bars[3].nextElementSibling.checked;
    // console.dir(bars[0].nextElementSibling.checked);
    if(check == true){
        feedbacks.classList.remove("hide");
    } else if(check == false){
        feedbacks.classList.add("hide");
    }
});