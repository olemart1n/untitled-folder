

const profileLogos = document.querySelectorAll(".fa-solid")

const wallBtn = document.querySelector("#wall")
const contactsBtn = document.querySelector("#contact")
const posts = document.querySelector("#posts")
const contacts = document.querySelector("#contacts")


const setColor = () => {
    profileLogos.forEach(logo => {
        logo.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
    })
}
setColor()

posts.classList.remove("collapse")
wallBtn.addEventListener("click", (e) => {
    if(posts.classList.contains("collapse")) {
        posts.classList.remove("collapse")
        contacts.classList.add("collapse")
    }
})
contactsBtn.addEventListener("click", (e) => {
    if(contacts.classList.contains("collapse")) {
        contacts.classList.remove("collapse")
        posts.classList.add("collapse")
    }
})


