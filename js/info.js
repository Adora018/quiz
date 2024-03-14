
const sectionOne = (title, para, btn ) => {
    let div = document.createElement("div")
    div.className = "sectionOne"
    div.innerHTML = `<h1>${title}</h1>
                     <p>${para}</p>
                     <button>${btn}</button>
    `
    return div
}

export { sectionOne }