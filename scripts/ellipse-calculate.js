function calculateEllipse(){
    const perimeter = getInputValueById('ellipse-base');
    // console.log(perimeter);
    const apothem = getInputValueById('ellipse-height');
    // console.log(apothem);
    const area = 3.14*perimeter*apothem;
    setInnerTextById('ellipse-area',area);

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