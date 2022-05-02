// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

import { get, append } from "./fetch.js";
let container = document.getElementById("results")

let q = document.getElementById("search_input")
q.onkeydown = function (e) {
    let qv = document.getElementById("search_input").value;

    if (e.key == "Enter") {
        let url = `https://masai-mock-api.herokuapp.com/news?q=${qv}`
        search(url, container)
    }
}

async function search(url, container) {
    let data = await get(url)
    data = data.articles
    console.log(data)
    container.innerHTML = null
    append(data, container)
}