let head = document.getElementById('input-item');

let btn = document.getElementById('btn-item');

let res = document.getElementById('food-container');

const foodcount = document.getElementById('food-count'); 

//Add - append,prepand,after,before
//replace
//res.insertAdjacentText("beforeend","chilly");

const li = document.querySelector('.food-item :first-child');
//console.log(li)

//const hh = li.cloneNode();

const newfood = document.createElement('li');

newfood.textContent = "chapathi";

newfood.className = "food-item"

//li.replaceWith(newfood);

//clone
const clo = document.querySelector('.food-item');

const listfood = document.getElementById('food-item');

const ref = document.getElementById('ref');

const dup = document.getElementById('duplicate');


// ref.addEventListener('click',() => {
//     // dup.innerHTML = '';
//      const t1 = res.cloneNode(true);
//      dup.append(t1);
//      console.log(dup);

// })

//const btnref = document.createElement('button');

//btnref.textContent = "refresh";

//dup.before(btnref)


const frag = document.createDocumentFragment();
const fav = ['idly','dosa','panner','chilli','parrota','sweet'];
for(let i=0;i<fav.length;i++){
     const li = document.createElement('li');
     li.textContent = `Fav food : ${fav[i]}`;
     li.className = "food-list";
     frag.append(li)
}
//res.append(frag)
document.addEventListener('DOMContentLoaded',() => {
     const fetchfood = JSON.parse(localStorage.getItem('items'));
     fetchfood.forEach(alllist => {
          const li = document.createElement('li');
          const divite = document.createElement("div");
          const divtr = document.createElement("div");
          li.className = "food-list";
          li.append(divite);
          li.append(divtr);
          divite.textContent = alllist.list;
          divtr.innerHTML = ` <i class="fa fa-trash" aria-hidden="true"></i>`;
          divtr.setAttribute('onClick','trash(event)');
          listfood.append(li);
     })
     refreshUI()
 })

const handleSave = () => {
     // <div>Pongal</div>
     // <div>
     //                    <i class="fa fa-trash" aria-hidden="true"></i>
     //                </div>
     const li = document.createElement('li');
     const divite = document.createElement("div");
     const divtr = document.createElement("div");
     li.className = "food-list";
     li.append(divite);
     li.append(divtr);
     divite.textContent = head.value;
     divtr.innerHTML = ` <i class="fa fa-trash" aria-hidden="true"></i>`;
     divtr.setAttribute('onClick','trash(event)');
     //console.log(li);
   
     if(head.value != "") {
          listfood.append(li);
          //localstorage
          localStorage.setItem('items',JSON.stringify([...JSON.parse(localStorage.getItem('items') || '[]'),{list : head.value}]))
          head.value = "";
     }
    // console.log(listfood.children);
    refreshUI()
}



btn.addEventListener('click', handleSave);

head.addEventListener('keyup',(event) => {
     if(event.key == "Enter"){
          handleSave()
     }else if(event.key === 'keyZ' && (event.ctrlKey || event.metaKey)){
          head.value ="";         
     }
});


let className = document.getElementsByClassName('food-list');

let allfood = [].map.call(className,(x) => x.textContent);

//console.log(allfood);

let tagName = document.getElementsByTagName('li');

let allfoods = [].map.call(tagName,(x) => x.textContent);

//console.log(allfoods);

let qsel = document.querySelectorAll('div');


const main = document.getElementById("main");     
function domNode(mes) {
     
     const alt = document.createElement("div");
     const btn = document.createElement("button");
     const node = document.createTextNode(mes);
     const btnnode = document.createTextNode('X');

     alt.className = "alert";
     btn.className = "alert-close";

     alt.append(node);
     btn.append(btnnode);
     alt.append(btn);

     main.prepend(alt)
}

//domNode('Food is updated!');

function innrhtm(mgg) {
const temp = `<div class="alert">
 ${mgg}
</div>
`
main.innerHTML += temp;
}
//innrhtm('created by innerhtml');

//remove
function trash(e) {
     const rm = e.target.parentNode.parentNode;
     rm.remove();
     //remove localstorage
     const fetchitem = JSON.parse(localStorage.getItem('items'));
     fetchitem.forEach((foods) => {
          if(foods.list.trim() === rm.innerText.trim()){
               fetchitem.splice(fetchitem.indexOf(foods),1)
          }
     })
     localStorage.setItem('items',JSON.stringify(fetchitem));
     refreshUI();
}

const foodc = document.querySelectorAll('.food-item li');

[...foodc].forEach((item) => {
     //console.log(item.innerText)
})

//list 
const liEl = document.querySelectorAll('li');
//console.log(liEl,liEl.length);

const liEll = document.querySelector('.food-item');
//console.log(liEll.children,liEl.length)

const liEl1 = document.querySelector('ul');
//console.log(liEl1.childNodes);

//console.log(liEl1.firstElementChild);
//console.log(liEl1.firstElementChild.innerText);

//console.log(liEl1.lastElementChild);
//console.log(liEl1.lastElementChild.innerText);

//access parent
//console.log(liEll.parentElement);
//console.log(liEll.parentNode);
//console.log(liEll.parentNode.parentNode);

//console.log(document.documentElement.parentNode);
//console.log(document.documentElement.parentElement);

const sib = document.querySelector('ul:last-child li');
//console.log(sib);

//console.log(sib.nextSibling);
//console.log(sib.nextElementSibling);

//console.log(sib.previousSibling);
//console.log(sib.previousElementSibling);

const foodbt = document.querySelector('.food-container');
const btnShow = document.querySelector('#showbtn');

// btnShow.addEventListener('click',() => {
//     // console.log(foodbt.style.display);
//     console.log(foodbt);
//      if(foodbt.classList.contains("hide")){
//           btnShow.innerText = "show div";
//           btnShow.style.backgroundColor = 'gray';
//          // foodbt.style.display = "none";
//          foodbt.classList.remove("hide");
//      }
//      else {
          
//           btnShow.innerText = "hide div";
//           btnShow.style.backgroundColor = 'blue';
//           //foodbt.style.display = "block";
//           foodbt.classList.add("hide");
//      }
// })

function evenhand() {
     //console.log(this)
}

//const even = document.querySelector('header span');

// const aa = even.addEventListener('click',(event) => {
//     alert('Authorised by google')
//     console.log(event.type);
// });

// even.addEventListener('click',(event) => {
//      alert('Authorised by window')
//  });

//  even.addEventListener('click',aa);

// const handle = (Event) => {
//      console.log("Event happy");
//     // even.removeEventListener('click',handle);
// }; 

// even.addEventListener('click',handle,{once:true});

// const formEl = document.querySelector('form');
// const checkEl = document.querySelector('form input[type=checkbox]');
// const inputEl = document.querySelector('form input');

// formEl.addEventListener('submit',(event) => {
//      event.preventDefault();
//      console.log(inputEl.value,checkEl.checked);
//      console.log('deafult',event.defaultPrevented);
// })

// const formEl = document.querySelector('form ul');

// formEl.addEventListener('click',(event) => {
//      console.log(event.target)
// })
const nolist = document.getElementById('no-list');
//console.log( listfood.children.length);

function refreshUI(){
     //console.log(listfood.children.length)
     foodcount.innerText = `You have ${listfood.children.length} list`;
//    if(listfood.children.length > 0){
//      foodcount.innerText = `You have ${listfood.children.length} list`;
//      nolist.hidden = true;
//    } else {
//      foodcount.innerText = `You have ${listfood.children.length} list`;
//      nolist.hidden = false;
//    }
   //ternary
   listfood.children.length > 0 ?  
   ((nolist.hidden = true),(foodcount.hidden = false)) :
   ((nolist.hidden = false),(foodcount.hidden = true))
}











