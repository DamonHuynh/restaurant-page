import mainImg from icecream.jpg;

const container = document.createElement("div");
const mainHeader = document.createElement("h1");
const image = document.createElement("img");
image.src = mainImg;
image.alt = "Multiple flavors of ice cream that is on display";
const paragraph = document.createElement("p");

//put main container element first
export const homePageElements = [container, mainHeader, image, paragraph];
