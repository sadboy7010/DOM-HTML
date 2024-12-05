const header=document.getElementById("h1")

const div1=document.getElementById("container1")
const a=document.getElementById("a")
const p=document.getElementsByTagName("p")
const anchor = document.querySelector("#a a")

const div2=document.getElementById("container2")
const ul=document.querySelector("ul")
const list=document.getElementsByClassName("list")

anchor.setAttribute("href","https://www.google.com")


header.style.backgroundColor="#B3C8"

div1.style.backgroundColor="gray"
a.style.backgroundColor="gray"
anchor.style.backgroundColor="#89A8B2"
anchor.style.textDecoration="none"

for (let i=0;i<p.length;i++) {
    p[i].style.backgroundColor="#ccc"
}

div2.style.backgroundColor="gray"
ul.style.backgroundColor="gray"


for (let i=0;i<list.length;i++) {
    list[i].style.backgroundColor="#ccc"
}
