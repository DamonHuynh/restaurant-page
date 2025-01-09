import mainImg from "./icecream.jpg";

const container = document.createElement("div");
container.classList.toggle("home");
const mainHeader = document.createElement("h1");
mainHeader.textContent = "Welcome to the Ice Cream Place!"
const image = document.createElement("img");
image.src = mainImg;
image.alt = "Multiple flavors of ice cream that is on display";
const paragraph = document.createElement("p");
paragraph.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit cumque, hic possimus dolorem temporibus autem beatae sunt fuga consectetur facilis, quisquam, rem optio repellat sit explicabo cupiditate deleniti illum quaerat?";
//put main container element first
export const homePage = [container, mainHeader, image, paragraph];
