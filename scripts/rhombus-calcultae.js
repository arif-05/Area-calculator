function calculateRhombus(){
    const perimeter = getInputValueById('rhombus-base');
    // console.log(perimeter);
    const apothem = getInputValueById('rhombus-height');
    // console.log(apothem);
    const area = 0.5*perimeter*apothem;
    setInnerTextById('rhombus-area',area);

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value ;
    const inputValue = parseFloat(inputText);
    return inputValue;
}

function setInnerTextById(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;

}