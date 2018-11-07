'use strict'
// attaching our html to js
let elImagecon = document.getElementById('images')
let elcityImage = document.getElementsByClassName('cityImage')
let cities =[]
// creating an Image object with its property
function CityImages(newTitle, path, id, description){
  this.title= newTitle
  this.filePath= path
  this.id= id
  this.caption = description
  this.shown =0
  this.click=0
}

// creating a constructor that can store specific information & instantiating a new instances of our Image object     constructor 
let asmera = new CityImages('asmera', './images/asmara.jpg', 'asmara', 'Asmara is the capital city of Eritrea') 
let addisAbaba = new CityImages('addis_ababa', './images/addis_ababa.jpg', 'addis', 'Addis Ababa is the capital city of Ethiopia') 
let accra = new CityImages('accra', './images/accra.jpg', 'accra', 'Accra is the capital city of Ghana') 
let nairobi= new CityImages('nairobi', './images/nairobi.jpg', 'nairobi', 'Nairobi is the capital city of Kenya')
let abuja = new CityImages('abuja', './images/abuja.jpg', 'abuja', 'abuja is the capital city of Nigeria') 
let kigali = new CityImages('kigali', './images/kigali.jpg', 'kigali', 'Kigali is the capital city of Rwanda') 
let lome = new CityImages('lome', './images/lome.jpg', 'lome', 'lome is the capital city of Mali') 
let kinshasa = new CityImages('kinshasa', './images/kinshasa.jpg', 'kinshasa', 'kinshasa is the capital city of Congo') 

// we need to store in array 
cities.push(asmera, addisAbaba, accra,nairobi,abuja,kigali,lome,kinshasa)

// creating a random function 
let randomNumber = function(){
  return Math.floor(Math.random()*cities.length)
}

let firstImage
let secondImage
let thirdImage 

let clickHandler = function(event){
  if (firstImage.id ===event.target.id){
    firstImage.clicked++
  } else if (secondImage.id === event.target.id){
    secondImage.clicked++
  } else {
    thirdImage.clicked++
  }
  displayImages()
}

// need to display 3(make it dynamic) random images to our browser 
// adding an eventListner function 
let displayImages = function(){
  for(let i=0; i<elcityImage.length; i++){
    let elImage = elcityImage[i]
    let number=randomNumber()
    let randomCity=cities[number]
    if(i===0){
      firstImage=randomCity 
    } else if(i===1){
      secondImage=randomCity
      while(firstImage===secondImage){
        number=randomNumber()
        secondImage=cities[number]
      }  
    } else if (i===2) {
      thirdImage=randomCity
      while(thirdImage===firstImage || thirdImage===secondImage){
        number=randomNumber()
        thirdImage=cities[number]
      }  
    }
    elImage.src=randomCity.filePath
    elImage.setAttribute('id', randomCity)
    randomCity.shown++
    console.log(randomCity, elImage)
    elImage.addEventListener('click', clickHandler)
  }
}
displayImages()
console.log(firstImage)
console.log(secondImage)
console.log(thirdImage)