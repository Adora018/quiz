
const sectionTwo = (img) => {
    let div = document.createElement("div")
    div.className = "sectTwo"
    div.innerHTML = `<img src="./img/${img}">
    `
    return div
}

export { sectionTwo }

