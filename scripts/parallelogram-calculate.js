// function calculateParallelogram (){
//     // const parallelogramBase = document.getElementById('parallelogram-base');
//     // const baseText = parallelogramBase.value;
//     // const base = parseFloat(baseText);
//     // console.log(base);

//     const base = getParallelogramBase();
//     console.log(base);


// }

// function getParallelogramBase(){
//     const parallelogramBase = document.getElementById('parallelogram-base');
//     const baseText = parallelogramBase.value;
//     const base = parseFloat(baseText);
//     // console.log(base);
//     return base;
// }

function calculateParallelogram (){
  
    const base = getInputValueById('parallelogram-base')
    // console.log('Base is',base);
    const height = getInputValueById('parallelogram-height');
    // console.log('Height is', height);
    const area = 0.5*base*height;
    console.log('area is',area);

    setInnerTextById('parallelogram-area',area);
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