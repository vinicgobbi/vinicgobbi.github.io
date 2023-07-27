let socialLinks = {
    "Blog": "https://vinicgobbi.github.io/blog/",
    "LinkedIn": "https://www.linkedin.com/in/vinicgobbi/",
    "Github": "https://github.com/vinicgobbi",
    "Instagram": "https://instagram.com/vinicgobbi",
    "Gmail": "mailto:vinicius.cgobbi2004@gmail.com",
    "Outlook": "mailto:vinicius.cgobbi@hotmail.com"
}
let obj = Object.keys(socialLinks)
let section = document.querySelector("section")
for (let i = 0; i < obj.length; i++){
    let social = document.createElement("div")
    function redirect(){
        open(`${socialLinks[obj[i]]}`)
    }
    social.setAttribute('class',`social`)
    social.onclick = redirect
    social.innerHTML = obj[i]
    section.appendChild(social)
}