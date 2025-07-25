export function createNewElement(elementName, attributes){
    const tag = document.createElement(elementName);

    attributes && Object?.keys(attributes)?.forEach((key)=>{
        tag?.setAttribute(key, attributes[key]);
    });

    return tag;
}











