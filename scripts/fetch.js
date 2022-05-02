let get = async (url) => {
    try {
        let res = await fetch(url)
        let data = await res.json()
        return data
    }
    catch (err) {
        console.log(err)
    }
}

function append(data, container) {
    data.forEach(({ title, description, urlToImage, content }) => {
        let div = document.createElement("div")

        let Title = document.createElement("h3")
        Title.innerText = title

        let Description = document.createElement("p")
        Description.innerText = description

        let img = document.createElement("img")
        img.src = urlToImage

        div.append(img, Title, Description)
        container.append(div)

        div.addEventListener("click", function () {
            let obj = {
                title: title,
                content: content,
                urlToImage: urlToImage,
            }
            localStorage.setItem("news", JSON.stringify(obj))
            window.location.href = "../news.html"
        })
    })
}


function appenddata(data, container) {
    data.forEach(({ title, urlToImage, content }) => {
        let div = document.createElement("div")
        div.setAttribute("class", "news")

        let Title = document.createElement("h3")
        Title.innerText = title

        let p = document.createElement("p")
        p.innerText = content

        let img = document.createElement("img")
        img.src = urlToImage

        div.append(img, Title, p)
        container.append(div)
    })
}

export { get, append }
export { appenddata }