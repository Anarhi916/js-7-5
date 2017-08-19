
let ul = document.querySelector('ul');
let button = document.querySelector('button');


ul.addEventListener('click', chengeColor);
button.addEventListener('click', addElem);

function chengeColor(e){
  
  if(e.target.style.color == 'red')
    e.target.style.color = 'black';
  else{e.target.style.color = 'red';
  }
}

function addElem(){
  var msgElem = document.createElement('li');
  msgElem.textContent = document.querySelector('input').value;
  ul.appendChild(msgElem);
}
