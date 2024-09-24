// objective : get base , height, calculate area and display
// step 1 : get base value
/* step 2 : set id in input field
   step 3 : use getElementById
   step 4 : convert the value to a number

*/ 


function calculateTringleArea() {
    // get tringle base
   const tringleBaseInput = document.getElementById('tringle-base');
   const tringleBaseText = tringleBaseInput.value;
   const base = parseFloat(tringleBaseText);
   console.log(base);

    // get tringle height
    const tringleHeightInput = document.getElementById('tringle-height')
    const tringleHeightText = tringleHeightInput.value;
    const height = parseFloat(tringleHeightText);
    console.log(height);

    // calculate tringle area
    const area = 0.5 * height * base;
    // console.log('area of the tringle is ', area);

    // display tringle area
    const tirngleAreaSpan = document.getElementById('tringle-area');
    tirngleAreaSpan.innerText = area;


}






