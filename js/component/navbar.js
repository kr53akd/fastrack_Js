import { createNewElement } from "../lib.js"

export function navbar(){
    const header = createNewElement("header");
    //animation area of text scrolling from left to right
    const animatonHeading = header.appendChild(createNewElement("nav",[{id:"animation-block"},{class:'w-full h-35'}]))

    //Navbar main contents
    const nav = header?.appendChild(createNewElement("nav", [{id:"navbar"}]));
    const logo = nav.appendChild(createNewElement("div", [{id:"logo"},{class:"flex w-full"}]));
    logo.appendChild(createNewElement("img", [{id:"logo-img"},{src:"/public/FASTRACK-Logo-Black.png"}, {alt:"logo space"}, {class:"logo"}]))
  
    //location area
    const locationAria = header.appendChild(createNewElement("nav", [{id:"location-aria"}, {class:"text-sm flex items-center"}]));
    const locationPara = locationAria.appendChild(createNewElement("p"));
    locationPara.innerHTML = "Select the location to check product availability"
  return header;
}