import { createNewElement } from "../lib.js"

export function navbar(){
    const header = createNewElement("header");
    
    //animation area of text scrolling from left to right
    const animatonHeading = header.appendChild(createNewElement("nav",{id:"animation-block", class:'w-full h-35'}))

    //Navbar main contents
    const nav = header?.appendChild(createNewElement("nav", {id:"navbar"}));


    const logo = nav.appendChild(createNewElement("div", {id:"logo", class:"flex w-full"}));
    logo.appendChild(createNewElement("img", {id:"logo-img", src:"/public/FASTRACK-Logo-Black.png", alt:"logo space", class:"logo", onclick:"console.log('clicked on the logo')"}))

      const div_item = nav.appendChild(createNewElement("div",{class:"list-item"}))
    const list = div_item.appendChild(createNewElement("ul"))
    const a=list.appendChild(createNewElement("li" ))
   const b=  list.appendChild(createNewElement("li" ))
    const c=list.appendChild(createNewElement("li" ))
    const d=list.appendChild(createNewElement("li" ))
    const e=list.appendChild(createNewElement("li" ))
    const f=list.appendChild(createNewElement("li" ))
    const g=list.appendChild(createNewElement("li" ))

    a.innerHTML="WATCHES"
    b.innerHTML="SMART WATCHES"
    c.innerHTML="VYB BY FASTRACK"
    d.innerHTML="SALE"
    e.innerHTML="GIFTING"
    f.innerHTML="ACCESSORIES"
    g.innerHTML="MORE"
  
    //location area
    const locationAria = header.appendChild(createNewElement("nav", {id:"location-aria", class:"text-sm flex items-center"}));
    const locationPara = locationAria.appendChild(createNewElement("p"));
    locationPara.innerHTML = "Select a location to check product availability"
  return header;
}