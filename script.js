const container = document.getElementById('container');
prevVal = 16;
defaultGrid(16);

function defaultGrid(numOfRows){
    for(i=0;i<numOfRows*numOfRows;i++)
    {
        let cell = document.createElement('div');
        //cell.innerHTML = i+1;
        container.appendChild(cell).id = 'cell';
    }
}

function resizeGrid(val){
    container.replaceChildren();
    defaultGrid(val);
    document.documentElement.style.setProperty("--grid-row", val);
    document.documentElement.style.setProperty("--grid-col", val);
    nodeListCell = document.querySelectorAll("#cell");
    arrayCell = Array.from(nodeListCell);
    arrayCell.forEach((div, index) => div.addEventListener("mouseover", (e) => { arrayCell[index].style.backgroundColor = RGB(); }));
}

//Hover effect
let nodeListCell = document.querySelectorAll("#cell");
let arrayCell = Array.from(nodeListCell);
arrayCell.forEach((div, index) => div.addEventListener("mouseover", (e) => { arrayCell[index].style.backgroundColor = RGB(); }));

//Generating random value of RGB
function RGB(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

//Using the clear button
let clear = document.querySelector("#clear");
clear.addEventListener("click", clean);
function clean(){
    for(let i=0;i<arrayCell.length;i++)
    {
        arrayCell[i].style.backgroundColor = "crimson";
    }
}

//Using the resize button
let resize = document.querySelector("#resize");
let input = document.querySelector("input");
resize.addEventListener("click", ()=> {
    var val = document.querySelector("input").value;
    if(val>100)
    {
        alert("Value too high!!");
        input.value = prevVal;
    }
    else if(val<=0)
    {
        alert("Value too low!!");
        input.value = prevVal;
    }
    else
    {
        prevVal = val;
        resizeGrid(val);
    }
})
