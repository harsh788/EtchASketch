const container = document.getElementById('container');
defaultGrid(16);

function defaultGrid(numOfRows){
    for(i=0;i<numOfRows*numOfRows;i++)
    {
        const cell = document.createElement('div');
        //cell.innerHTML = i+1;
        container.appendChild(cell).id = 'cell';
    }
}

let nodeListCell = document.querySelectorAll("#cell");
let arrayCell = Array.from(nodeListCell);

arrayCell.forEach((div, index) => div.addEventListener("mouseover", (e) => { arrayCell[index].style.backgroundColor = RGB(); }));

function RGB(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
