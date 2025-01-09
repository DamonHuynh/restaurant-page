import "./style.css";
import { combineElements, pageLoad } from "./pageLoad";
import {homePage} from "./homePage.js";
import {aboutPage} from "./about.js";
import {menuPage} from "./menu.js";



const switchTabs = function(){
    pageLoad(combineElements(homePage));
    const pageButtons = document.querySelectorAll("button");
    const homeButton = pageButtons[0];
    const menuButton = pageButtons[1];
    const aboutButton = pageButtons[2];
    homeButton.addEventListener("mousedown", () => {
        pageLoad(combineElements(homePage))
        homeButton.classList.add("currentTab");
        menuButton.classList.remove("currentTab");
        aboutButton.classList.remove("currentTab");
    });
    menuButton.addEventListener("mousedown", ()=>{
        pageLoad(combineElements(menuPage))
        homeButton.classList.remove("currentTab");
        menuButton.classList.add("currentTab");
        aboutButton.classList.remove("currentTab");
    });
    aboutButton.addEventListener("mousedown", ()=>{
        pageLoad(combineElements(aboutPage))
        homeButton.classList.remove("currentTab");
        menuButton.classList.remove("currentTab");
        aboutButton.classList.add("currentTab");
    });
}();

