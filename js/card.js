
const card = (title2,img1,img2,img3,para1,para2,para3) => {
    let div = document.createElement("div")
    div.className = "card"
    div.innerHTML = `<h>${title2}</h>
                    <p>${para1}</p>
                    <p>${para2}</p>
                    <p>${para3}</p>
                    <img src="./image/${img1}">
                    <img src="./image/${img2}">
                    <img src="./image/${img3}">
        `
    return div
}

export { card }