function toggleMenu(){
    let barButton = document.querySelector(".vini-menu-mobile-button")
    let menuMobile = document.querySelector(".vini-menu-mobile")
    let overlay = document.querySelector(".vini-overlay")
    menuMobile.classList.toggle("vini-menu-mobile-is-closed")
    menuMobile.classList.toggle("vini-menu-mobile-is-open")
    overlay.classList.toggle("vini-is-active")
    
    
    if (barButton.getAttribute('name') == 'close'){
        barButton.setAttribute('name', 'menu')
    }else{
        barButton.setAttribute('name', 'close')
    }
}


function createProject(name, description, image, website, github) {
  let cardRow = document.querySelector("#card-row")
  if (!website) {
    cardRow.innerHTML += `
    <div class="card vini-bg vini-card" style="width: 20rem;">
    <img class="img-card-top vini-projects-img" src="${image}" alt="${name} Picture">
    <div class="card-body">
        <h5 class="card-title vini-projects-title">${name}</h5>
        <p class="card-text">
            ${description}
        </p>
        <div style="text-align: center;">        
            <a class="vini-projects-button" target="_blank" href="${github}">Source Code <ion-icon name="logo-github"></ion-icon></a>    
        </div>
    </div>
  </div>`
  }else{
    cardRow.innerHTML += `
    <div class="card vini-bg vini-card" style="width: 20rem;">
    <img class="img-card-top vini-projects-img" src="${image}" alt="${name} Picture">
    <div class="card-body">
        <h5 class="card-title vini-projects-title">${name}</h5>
        <p class="card-text">
            ${description}
        </p>
        <div style="text-align: center;">
            <a class="vini-projects-button" target="_blank" href="${website}">Website <ion-icon name="share-alt"></ion-icon></a>        
            <a class="vini-projects-button" target="_blank" href="${github}">Source Code <ion-icon name="logo-github"></ion-icon></a>    
        </div>
    </div>
  </div>`
  }  
}


fetch("https://gitconnected.com/v1/portfolio/vinicgobbi")
.then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Something went wrong on API server!");
      }
})
.then((response) => {
    let projects = response['projects']
    for (let counter = 0; counter < projects.length; counter++) {
      let name = projects[counter]['name']
      let description = projects[counter]['summary']
      let image = projects[counter]['images']['0']['resolutions']['desktop']['url']
      let website = projects[counter]['website']
      let github = projects[counter]['githubUrl']
      createProject(name, description, image, website, github)
    }
})
.catch((error) => {
  console.error(error);
});
  

