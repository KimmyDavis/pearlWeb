

let header = document.querySelector(".header")
let handles = document.querySelector(".handles")
let team = document.querySelector(".team")

function maintainElm(elm, scrollPos){
    function maintain(){
        if(window.scrollY > scrollPos){
            elm.classList.add("active");
        }else{
            elm.classList.remove("active");
        }
    }
    window.addEventListener("scroll", maintain);
}



// maintainElm(header, 110);
// maintainElm(handles, 1300)
