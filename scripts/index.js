// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()


import { get, append } from "./fetch.js";

// ------by default-----

let container = document.getElementById("results")
get("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in").then((res) => {
    console.log(res)
    append(res.articles, container)
})

// --- by default end----------



import { sidebar } from "../components/sidebar.js";
document.getElementById("sidebar").innerHTML = sidebar()


let side = document.getElementById("sidebar").children


function csearch() {
    console.log(this.id)
    get(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`).then((data) => {
        console.log(data)
        let container = document.getElementById("results")
        container.innerHTML = null
        append(data.articles, container)
    })

}

for (let el of side) {
    el.addEventListener("click", csearch)
}