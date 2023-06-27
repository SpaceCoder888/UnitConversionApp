/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let myInput = ""
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    myInput = inputEl.value
    let feetConv = (myInput * 3.281).toFixed(3)
    let meterConv = (myInput/3.281).toFixed(3)
    lengthEl.textContent = `${myInput} meters = ${feetConv} feet | ${myInput} feet = ${meterConv} meters`
    
    let litersConv = (myInput * 0.264).toFixed(3)
    let gallonsConv = (myInput/0.264).toFixed(3)
    volumeEl.textContent = `${myInput} gallons = ${litersConv} liters | ${myInput} liters = ${gallonsConv} gallons`
    
    let poundsConv = (myInput * 2.204).toFixed(3)
    let kilosConv = (myInput/2.204).toFixed(3)
    massEl.textContent = `${myInput} kilos = ${poundsConv} pounds | ${myInput} pounds = ${kilosConv} kilos`
})