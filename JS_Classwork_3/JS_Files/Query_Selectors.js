const grandParent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")



grandParent.addEventListener("click", (e) => {
    console.log("Grandparent 1");
})

parent.addEventListener("click", (e) => {
    console.log("Parent 1");
})

child.addEventListener("click", (e) => {
    console.log("Child 1");
})

document.addEventListener("click", (e) => {
    console.log("Document 1");
})