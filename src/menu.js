const container = document.createElement("div");
container.classList.toggle("menu");
const menuItem1 = document.createElement("p");
menuItem1.textContent = "Vanilla"
const menuItem2 = document.createElement("p");
menuItem2.textContent = "Chocolate"
const menuItem3 = document.createElement("p");
menuItem3.textContent = "Strawberry"
const menuItem4 = document.createElement("p");
menuItem4.textContent = "Mint"

//put main container element first
export const menuPage = [container, menuItem1, menuItem2, menuItem3, menuItem4];