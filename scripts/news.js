// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()


import { appenddata } from "./fetch.js"

let container = document.getElementById("detailed_news")
let arr = []

let data = JSON.parse(localStorage.getItem("news"))
arr.push(data)

appenddata(arr, container)



