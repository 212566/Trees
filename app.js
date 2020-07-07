const navSlide = () => {
    const burger = document.querySelector(".hamburger-menu");
    const nav = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list a");
    const mainHeaderText1 = document.querySelector(".text-1")
    const mainHeaderText2 = document.querySelector(".text-2")
    const mainHeaderText3 = document.querySelector(".text-3")

    burger.addEventListener("click", () => {

        nav.classList.toggle("nav-sliding");
        // nav.classList.toggle("nav__nav-links--display");
        mainHeaderText1.classList.toggle("mainHeaderText--hide");
        mainHeaderText2.classList.toggle("mainHeaderText--hide");
        mainHeaderText3.classList.toggle("mainHeaderText--hide");

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index/10 + 0.4}s`
                console.log()
            }
        })
    })


}

navSlide();

let slideIndex = 0;
function imgSlide() {    
    const images = document.getElementsByClassName("oak-slide");
    console.log(images)
    console.log(images.length)
    console.log(slideIndex)
    for (let img of images) {
        img.style.display = "none";
    }
    slideIndex++;
    if(slideIndex > images.length) {slideIndex = 1}
    images[slideIndex - 1].style.display = "block";
    setTimeout(imgSlide, 2000);

};

// imgSlide();


// const arr = ["asd", "sss", "hghgh"];
// console.log(arr)
// let tabs = [...document.querySelectorAll(".tab")];
// console.log(typeof(tabs));
// console.log(tabs);
// let contents = [...document.querySelectorAll(".content")];
// console.log(contents)


// let asocciation = {};
//  tabs.forEach( function(k,i) {
//     this[k] = contents[i];
// }, asocciation);


// console.log(asocciation);

const contents = document.querySelectorAll(".content");
console.log(contents)
function changeTabs(content) {

    contents.forEach(element => {
        element.style.display = "none";
    })
    content.style.display = "block";



}

const tabs = document.querySelectorAll(".tab");
const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");


tab1.addEventListener("click", function() {
    changeTabs(content1);
})

tab2.addEventListener("click", function() {
    changeTabs(content2);
})

tab3.addEventListener("click", function() {
    changeTabs(content3);
})