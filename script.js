/** Add any JavaScript you need to this file. */

images = [
    {
    caption: 'Red Slate Mountain',
    alt: 'Mountain',
    url:
     'https://cdn130.picsart.com/324677217041201.png'
  },
  {
    caption: 'Epiphone Les Paul Special II Plus Limited Edition Electric Guitar  Transparent Black',
    alt: 'Epiphone Les Paul Special II Plus Limited Edition Electric Guitar  Transparent Black',
    url:
      'https://cdn130.picsart.com/324677376042201.png'
  },
  {
    caption: 'Epiphone Limited Edition Les Paul Special-I Electric Guitar  Worn Black',
    alt: 'Epiphone Limited Edition Les Paul Special-I Electric Guitar  Worn Black',
    url:
      'https://cdn130.picsart.com/324677526017201.png'
  },
  {
    caption: 'Gibson Custom Historic 60 Les Paul Standard VOS Electric Guitar Tangerine Burst',
    alt: 'Gibson Custom Historic 60 Les Paul Standard VOS Electric Guitar  Tangerine Burst',
    url:
      'https://cdn140.picsart.com/324677681052201.png'
  },
  {
    caption: 'Gibson SG Standard Electric Guitar  Heritage Cherry',
    alt: 'Gibson SG Standard Electric Guitar  Heritage Cherry',
    url:
      'https://cdn140.picsart.com/324677859119201.png'
  }

]



 catagories = [

{
    number: "1",
    name: "Guitars", 

},
 
 
{
    number: "B", 
    name: "Basses", 

},



]


//FUNCTIONS//

function buildMenuItem(camera){
let b = document.getElementById('bases-list')
    //BUILD THE MAIN
    let menuItem = document.createElement('div');
    menuItem.id = camera.number;
    menuItem.className = "menu-item";
    menuItem.title = camera.name;
    menuItem.innerText = camera.name;

    //BUILD THE NEST
    
  b.appendChild(menuItem);
    return b;
}

 
function buildMenu(){
   let navElm = document.getElementById('catId')
   let basesNav = document.getElementById('BasesNav')
   let guitarNav = document.getElementById('GuitarsNav')
   let basesImages = document.getElementById('basesMain')
   let guitarImages = document.getElementById('guitarsMain')



navElm.addEventListener('click', function(event){
  let itemNumber = event.target.id

 let allImages= catagories.find(function(allImages){
  })
  console.log(itemNumber, allImages)
  guitarImages.style.display= "initial";
  basesImages.style. display= "initial";
 
})

//*******CLICK BASE********//
basesNav.addEventListener('click', function(event){
  let itemNumber = event.target.id
 let base= catagories.find(function(base){
  })
  console.log(itemNumber, base)
  guitarImages.style.display='none'
  basesImages.style. display= "initial";
 
})



  //****CLICK GUITAR ******/

  guitarNav.addEventListener('click', function(event){
    let itemNumber = event.target.id
   let guitar= catagories.find(function(guitar){
    })
    console.log(itemNumber, guitar)
    basesImages.style.display='none'
    guitarImages.style.display= "initial";

})

}

//** remove base hidden element **/
function  updateBaseImages(camera){
  let baseImagesDiv = document.querySelector("#basesMain");
  baseImagesDiv.classList.remove('hide-bases')
 
}


//** remove guitar hidden element **/
function  updateGuitarImages(camera){
  let guitarImagesDiv = document.querySelector('#guitarsMain')
  guitarImagesDiv.classList.remove('hide-guitars')
}

function  updateGuitarImages(camera){
  let guitarImagesDiv = document.querySelector('#guitarsMain')
  guitarImagesDiv.classList.remove('hide-guitars')
}





window.onload = function(){
   this.buildMenu();

  
}


