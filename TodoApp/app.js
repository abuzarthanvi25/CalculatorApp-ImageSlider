var parent = document.getElementById('parent');
var input = document.getElementById('taskInput');
var mainDiv = document.getElementsByTagName("div");
var newli;

function createTasks(){
    if(input.value != ''){
        newli = document.createElement('li');   
        var textNode = document.createTextNode(input.value);
        newli.appendChild(textNode);
        parent.appendChild(newli);
        input.value = '';
        console.log(newli);
    }
    else{
        alert("An Empty task cannot be created!")
    }
}

function removeTasks(){
    parent.removeChild(parent.lastElementChild);
}
