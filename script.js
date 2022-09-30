/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Rename this variables to lengthConversion, volumeConversion & massConversion

let convertToMeter = 3.281
let convertToLiter = 0.264
let convertToKg = 2.204



let inputEl = document.getElementById("input-el")
let btnEl = document.getElementById("btn-el")
let displayEl = document.getElementById("display-el")
let displayEl2 = document.getElementById("display-el2")
let displayEl3 = document.getElementById("display-el3")
let displayEl4 = document.getElementById("display-el4")
let displayEl5 = document.getElementById("display-el5")
let displayEl6 = document.getElementById("display-el6")
let clearBtn = document.getElementById("clear-btn")





btnEl.addEventListener("click", grabInput)

function grabInput() {
  inputEl.value
  let num1 = Number(inputEl.value)
  let sum = num1 * convertToMeter
  let convert = sum.toFixed(3)
  
  displayEl.textContent = `${num1} meters = ${convert} feet` 
  divideInput()
  convertToVolume()
  convertToVolume2()
  convertToMass1()
  convertToMass2()


}
function divideInput(){
  inputEl.value
  let num1 = Number(inputEl.value)
  let product = num1 / convertToMeter
  let convert2 = product.toFixed(3) 
 
  displayEl2.textContent =  `${num1} feet = ${convert2} meters`
}


// Volume Functions
function convertToVolume(){

  inputEl.value
  let num1 = Number(inputEl.value)
  let gallonSum = num1 * convertToLiter
  let totalGallons = gallonSum.toFixed(3)
  displayEl3.textContent = `${num1} litres = ${totalGallons} gallons` 
}

function convertToVolume2(){

  inputEl.value
  let num1 = Number(inputEl.value)
  let litreSum = num1 /convertToLiter
  let totalLitres = litreSum.toFixed(3)
  displayEl4.textContent = `${num1} gallons = ${totalLitres} litres` 
}

// Mass Section
function convertToMass1(){

  inputEl.value
  let num1 = Number(inputEl.value)
  let kilogramSum = num1 * convertToKg
  let totalKilograms = kilogramSum.toFixed(3)
  displayEl5.textContent = `${num1} pounds = ${totalKilograms} kilograms` 
}

function convertToMass2(){
  inputEl.value
  let num1 = Number(inputEl.value)
  let poundsSum = num1 /convertToKg
  let totalPounds = poundsSum.toFixed(3)
  displayEl6.textContent = `${num1} kilograms = ${totalPounds} pounds` 
}


// Clear Btn Function

// function clearTheNumber(){
//   inputEl.value = ""
// }
// clearBtn.addEventListener("click", clearTheNumber)




