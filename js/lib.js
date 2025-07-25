export function createNewElement(elementName, attributes){
    const tag = document.createElement(elementName);
    
    attributes && Object?.keys(attributes)?.forEach((element)=>{
        tag?.setAttribute(element, attributes[element]);
    })
    return tag;
}











