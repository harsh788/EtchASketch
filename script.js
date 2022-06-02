// for(let i=0;i<16;i++)
// {
//     var newDiv = document.createElement('div');
//     newDiv.className = 'ydirection';
//     newDiv.style.border = 'solid #000';
//     newDiv.style.borderWidth = '2px';
//     newDiv.style.display = 'flex';
//     newDiv.style.backgroundColor = 'Yellow';
//     newDiv.textContent = 'Hello World';
//     document.getElementsByClassName('container')[0].appendChild(newDiv);
//     newDiv.style.width = parent.innerWidth; 
// }

// let container = document.getElementsByClassName('container');
// console.log(container[0].scrollWidth);
// for(let i=0;i<10;i++)
// {
//     let row = document.createElement('tr');
//     row.style.flex = '1 1 0%';
//     row.id = 'row' + i;
//     row.className = 'rows';

//     container[0].appendChild(row);

//     for(let j=0;j<10;j++)
//     {
//         let cell = document.createElement('td');
//         cell.style.flex = '1 1 0%';
//         cell.style.border = 'solid #000';
//         cell.style.borderWidth = '2px';
//         //cell.innerHTML = `${i}${j}`;
//         row.appendChild(cell);
//     }

// }
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

