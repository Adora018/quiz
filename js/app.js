import { sectionOne } from "./info.js"
import { sectionTwo } from "./img.js"
import { card } from "./card.js"

//object
const data = {
    title  : "Hello I'm Adora Dumaog",
    para   : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus deleniti aperiam odio debitis sequi dignissimos, sint, temporibus sit ullam numquam ad quod accusantium, illo voluptatem. Animi, provident repellat? Animi, dolore.",
    btn    : "Click here",
    img    : "2.png",

    title2 :"HELLO",
    img1   :"skin.jpg",
    img2   :"a.png",
    img3   :"b.png",
    para1  :"Lorem   quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    para2  :"Lorem poris impedit sed labore!",
    para3  :"siatur tenetur dolore, dolores corporis impedit sed labore!",
}

//destructuring 
const { title, para, btn, img, title2,img1,img2,img3,para1,para2,para3 } = data

//access 

let section = document.getElementById("sectionOne")

section.append(sectionOne(title , para, btn))
section.append(sectionTwo(img))
section.append(card(title2,img1,img2,img3,para1,para2,para3))