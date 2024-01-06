const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
console.log(itemsArray)

const deep = document.querySelector(".deep");
const loginlink = document.querySelector(".login-link")
const registerlink = document.querySelector(".register-link")
const ntb = document.querySelector(".ntb")
const closeicon = document.querySelector(".close-icon")


registerlink.addEventListener("click", () => {
    deep.classList.add('active');
});

loginlink.addEventListener("click", () =>{
    deep.classList.remove('active');
})

ntb.addEventListener("click", () => {
    deep.classList.add('active-ntb');
})

closeicon.addEventListener("click", () => {
    deep.classList.remove("active-ntb");
})


