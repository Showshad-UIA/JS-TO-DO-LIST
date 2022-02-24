let count=0;

document.getElementById('btn').addEventListener('click',function(){
count ++;
const inputValue=document.getElementById('inputField').value;
if(inputValue==''){
    alert("please enter a value!");
}
else{

    const mainCointainer=document.getElementById('content-container');
    const tableContainer=document.createElement('tr');
    tableContainer.innerHTML = ` <th>${count}</th>
    <td>${inputValue}</td>
    <td>
    <button class="btn btn-danger delete-btn">Delete</button>
    <button class="btn btn-success done-button">Done</button>
    </td>
    `;
    mainCointainer.appendChild(tableContainer);
    document.getElementById('inputField').value='';

    const deleteButton = document.getElementsByClassName(' delete-btn');
    const doneButton = document.getElementsByClassName('done-button');
    for(const button of deleteButton ){
        button.addEventListener('click',function(e){
          e.target.parentNode.parentNode.style.display="none";
        });
    }
    for(const button of doneButton ){
        button.addEventListener('click',function(e){
          e.target.parentNode.parentNode.style.textDecoration="line-through";
        });
    }
}
    });

