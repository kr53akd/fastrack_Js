import { createNewElement } from "../lib.js"

export function navbar(){

    const listItems = [
      {
        name:"WATCHES",
      },
      {
        name:"SMART WATCHES",
      },
      {
        name:"VYB BY FASTRACK",
      },
      {
        name:"SALE",
      },
      {
        name:"GIFTING",
      },
      {
        name:"ACCESSORIES",
      },
      {
        name:"MORE",
      },
    ]
    const header = createNewElement("header");
    
    //animation area of text scrolling from left to right
    const animatonHeading = header.appendChild(createNewElement("nav",{id:"animation-block", class:'w-full h-35'}))

    //Navbar main contents
    const nav = header?.appendChild(createNewElement("nav", {id:"navbar", class:"w-full"}));

    const container = nav.appendChild(createNewElement("div", {class:"container"}));
    const logo = container.appendChild(createNewElement("div", {id:"logo"}));
    logo.appendChild(createNewElement("img", {id:"logo-img", src:"/public/FASTRACK-Logo-Black.png", alt:"logo space", class:"logo", onclick:"console.log('clicked on the logo')"}))

    const unOrderedList = container.appendChild(createNewElement("ul"));
    
    listItems?.map((object, index)=>{
      const list = unOrderedList?.appendChild(createNewElement("li"));
      list.textContent = object.name;
    })
  
    const actionIcons = container.appendChild(createNewElement("div", {class:"nav-icon"}))
    const para = actionIcons.appendChild(createNewElement("p"));
    para.innerHTML = "hello"

    //location area
    const locationAria = header.appendChild(createNewElement("nav", {id:"location-aria", class:"text-sm flex items-center"}));
    const locationPara = locationAria.appendChild(createNewElement("p",{class:"para-location-gap"}));
    locationPara.innerHTML = "Select a location to check product availability "
    const anchor = locationPara.appendChild(createNewElement("a", {href:"/location", class:""}));
    anchor.textContent = "Add Location";
    
  return header;
}