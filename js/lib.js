export function createNewElement(elementName, attributes){
    const tag = document.createElement(elementName);

    attributes?.forEach((element)=>{
        console.log(Object.keys(element)[0], element[Object?.keys(element)[0]], 6)
        tag?.setAttribute(Object.keys(element)[0], element[Object?.keys(element)[0]]);
    })
    return tag;
}