"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-04

      Project to turn a selection list into a selection of hypertext links
      Author: Angelina Gutierrez
      Date:   06/16/2024

      Filename: creativeproject06-04.js
*/

// Selection lists in the web form
let shirtColor = document.getElementById("shirtColor");
let bottom = document.getElementById("bottom");
let shoe = document.getElementById("shoe");

// Option elements within the selection lists
let shirtColorOptions = document.querySelectorAll("select#shirtColor option");
let bottomOptions = document.querySelectorAll("select#bottom option");
let shoeOptions = document.querySelectorAll("select#shoes option");

// The number of options within each selection list
let shirtColors = shirtColorOptions.length;
let bottoms = bottomOptions.length;
let shoes = shoeOptions.length;

// Form button to generate the complete text of the selected vehicle
let selectOutfit = document.getElementById("selectOutfit");

// Paragraph containing the text of the selected vehicle
let outfit = document.getElementById("outfit");


// Event handler to modify the content of the bottom selection list
// when the shirtColor selection list changes

shirtColor.onchange = function() {
   let shirtColorIndex = shirtColor.selectedIndex;
   let shirtColorCategory = shirtColor.options[shirtColorIndex].text;
   
   if (shirtColorIndex === 0) {
      showAll(bottom);
   } else {
      filterSelect(bottom, shirtColorCategory);
   }  
}

// Event handler to modify the content of the shoe selection list
// when the bottom selection list changes

bottom.onchange = function() {
   let bottomIndex = bottom.selectedIndex;
   let bottomCategory = bottom.options[bottomIndex].text;
   
   if (bottomIndex === 0) {
      showAll(shoe);
   } else {
      filterSelect(shoe, bottomCategory);
   }     
}

function showAll(selectList) {
	//set to selected list options
	let options = selectList.options;
	//set to options length
	let optionLength = options.length;
	//loop through all options, setting display to block
	for (let i = 0; i < optionLength; i++) {
		options[i].style.display = "block";
	}
}	

function filterSelect(selectList, category) {
	//set to selected list options
	let options = selectList.options;
	//set to options length
	let optionLength = options.length;
	//loop through the options setting display to block for those that the className matches category, otherwise set to none
	for (let i = 0; i < optionLength; i++) {
		if (options[i].className === category) {
			options[i].style.display = "block";
		} 
		else {
			options[i].style.display = "none";
		}
	}
}

selectOutfit.onclick = function() {
	//set outfit paragraph to shirtColor bottom shoe
	outfit.innerHTML = shirtColor.options[shirtColor.selectedIndex].text 
		+ " Shirt " + bottom.options[bottom.selectedIndex].text 
		+ " " + shoe.options[shoe.selectedIndex].text;
		selectOutfit.onclick = function() {
   // Update text
   outfit.innerHTML = shirtColor.options[shirtColor.selectedIndex].text 
      + " Shirt " + bottom.options[bottom.selectedIndex].text 
      + " " + shoe.options[shoe.selectedIndex].text;

   // Update mannequin
   let shirt = document.querySelector(".torso");
   let legs = document.querySelector(".legs");
   let feet = document.querySelector(".feet");

   // Shirt colors
   let shirtChoice = shirtColor.options[shirtColor.selectedIndex].text;
   if (shirtChoice === "Pink") shirt.style.background = "pink";
   else if (shirtChoice === "Black") shirt.style.background = "black";
   else if (shirtChoice === "Yellow") shirt.style.background = "gold";
   else if (shirtChoice === "Blue") shirt.style.background = "lightblue";
   else shirt.style.background = "lightgray";

   // Bottoms
   let bottomChoice = bottom.options[bottom.selectedIndex].text;
   if (bottomChoice.includes("Blue Jeans")) legs.style.background = "blue";
   else if (bottomChoice.includes("Black Pants")) legs.style.background = "black";
   else if (bottomChoice.includes("Khakis")) legs.style.background = "tan";
   else if (bottomChoice.includes("White Pants")) legs.style.background = "white";
   else if (bottomChoice.includes("Bleached Jeans")) legs.style.background = "lightblue";
   else if (bottomChoice.includes("Pink Pants")) legs.style.background = "pink";   
   else legs.style.background = "tan";

   // Shoes
   let shoeChoice = shoe.options[shoe.selectedIndex].text;
   if (shoeChoice.includes("White Heals")) feet.style.background = "white";
   else if (shoeChoice.includes("Brown Sandals")) feet.style.background = "saddlebrown";
   else if (shoeChoice.includes("Brown Boots")) feet.style.background = "saddlebrown";
   else if (shoeChoice.includes("Black Sandals")) feet.style.background = "black";
   else if (shoeChoice.includes("White Sandals")) feet.style.background = "white";
   else if (shoeChoice.includes("White Sneakers")) feet.style.background = "white";
   else if (shoeChoice.includes("Black Sneakers")) feet.style.background = "black";
   else if (shoeChoice.includes("Black Heals")) feet.style.background = "black";
   else feet.style.background = "black";
}

}

