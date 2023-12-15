// const tableEl = document.querySelector('table');
// let seleid;
// tableEl.addEventListener('click',(event) => {
//     const target = event.target;
//     const closEl = target.closest("tr");

//     if(target.tagName === 'TH') return;

//     if(seleid != undefined){
//         seleid.classList.remove('active');
//     }
//     seleid = closEl;
//     closEl.classList.add('active');
//     console.log(closEl.children[1].innerText);
//     alert(`Hello ${closEl.children[1].innerText}`);
// })


// document.addEventListener('click',(event) => {
//     const id = event.target.dataset.toggleId;
//     if(!id) return;
//     const formEl = document.getElementById('donate-form');
//     formEl.hidden = !formEl.hidden;

// })

// const formEl = document.getElementById('donate-form');

// formEl.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     const val = event.target.querySelector('#donate').value;
//     alert(`Thanks for donating $${val}`);
//     formEl.reset();
// })

//Mouse event
// document.addEventListener('mouseup',event => {
//     console.log(event);
//     switch (event.which) {
//         case 1:
//             alert('Left click');
//             break;
//         case 2:
//             alert('Middle click');
//             break;
//         case 3:
//             alert('Right click');
//             break;
//         default:
//             alert("Invalid or unknow click")
//             break;
//     }
// })
// const tab = document.querySelector('table');
// tab.addEventListener('mouseup',(event) => {
//     console.log(event)
// })

// document.addEventListener('keydown',(event) => {
//     console.log('keydown',event);
//     switch (event.key) {
//         case 'ArrowUp':
//             alert('Pressed up arrow')
//             break;
//         case 'ArrowDown':
//             alert('Pressed down arrow')
//             break;    
//         case 'ArrowLeft':
//             alert('Pressed Left arrow')
//             break;
//         case 'ArrowRight':
//             alert('Pressed Right arrow')
//             break;    
//         default:
//             alert('Pressed unknown key')
//             break;
//     }
// })

//form submit

const formEll = document.forms.feedback;

// const fullname = formEll.elements.fullname;
// const type = formEll.elements.type;
// const email = formEll.elements.email;
// const tarea = formEll.elements.description;
// const terms = formEll.elements.term;

const handleSubmit = (event) => {
    event.preventDefault();
    //const { fullname,type,email,tarea,terms} = formEll.elements;
    const formdata = new FormData(formEll);
    //console.log('My Api Key :', formdata.get('email'));
    //send data to server 
    //query string
    const entries = [...formdata.entries()];
    //console.log(entries)
    //method1
    const datastring = //entries.map((x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`).join('&');
    entries.map(([key,value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
    //console.log(datastring);

    //method2
    const datastring2 = new URLSearchParams(formdata).toString();
   // console.log(datastring2);

    //json
    const jdata = JSON.stringify(Object.fromEntries(formdata));
   // console.log(jdata);

    //backendapi
    //1.method
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET','https://reqres.in/api/users/2',true);
    // xhr.onload = function () {
    //   const obj =  JSON.parse(xhr.responseText);
    //     document.getElementById('response').innerText = obj.data.first_name;
    // }
    // xhr.send();

    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://reqres.in/api/users/2',true)
    xhr.onload = function() {
        const obj = JSON.parse(xhr.responseText);
       document.getElementById('response').innerText = obj.data.first_name;
    }
    xhr.send();

    //2.method
    const res = fetch('https://reqres.in/api/users?page=2',{
        method:'GET',
        // headers : {
        //     'content-type' : 'application/json'
        // },
        // body:jdata
    }).then((res)=> res.json())
    .then((val) => console.log(val.data))

    

}

const handleForm = (event) => {
    const formdt = event.formData;
    formdt.append('api-key','dfgdfgdfgdf');
    // console.log([...formdt.entries()]);
    // console.log([...formdt.values()]);
    // console.log(formdt.get('email'));
    // console.log(formdt.getAll('type'));
    // console.log(formdt.has('types'));
    // console.log([...formdt.keys()]);
    //console.log(formdt.set('hobby','Learn new tech'));
    //formdt.delete('term');
    console.log([...formdt.values()]);    
} 

formEll.addEventListener('submit',handleSubmit);

formEll.addEventListener('formdata',handleForm);

// const bind = formEll.elements.fullname;
//     const dyn = document.querySelector('#dynamic');
//     bind.addEventListener('input',(e) => {
//         dyn.innerText = `Hello ${e.target.value}`
//     })

// const radioEl = formEll.elements.type;

// const allcategory = [...radioEl];

// const type = document.querySelector('#typeEl');

//console.log(allcategory);

// allcategory.forEach((category) => {
//     console.log(category.checked);
//     console.log(category.value);
// })

//event
// type.addEventListener('change',(event) => {
//     const catg = allcategory.find((category) => {
//         return category.checked
//     })
//     //console.log('selected',catg);
//     //console.log(event.target.value);
//     if(event.target.value === 'contribution') {
//         setTimeout(() => {
//             alert(`Thank you for ${event.target.value}`)
//     },200)
//     }
    
    
// })

//meth
// const sel = allcategory[1].select();
// allcategory[1].checked = true;
// console.log(allcategory);

// const termEl = formEll.elements.term;

// termEl.addEventListener('change',(event) => {
//     const con = confirm('Are you read terms & condition');

//     if(con) {
//        //alert(event.target.checked)
//     }
//     else {
//         event.target.checked = false;
//     }
// })

// termEl.select();
// termEl.checked = true
//console.log(termEl);

const countryEl = formEll.elements.country;
countryEl.value = 'IND';
//console.log(countryEl.selectedIndex = 3);
console.log(countryEl.options[countryEl.selectedIndex].value)

//event
countryEl.addEventListener('change',(event) => {
    console.log(event.target.options[event.target.selectedIndex])
    console.log(event.target.options[event.target.selectedIndex].value)
    console.log(event.target.options[event.target.selectedIndex].text)
})

const optionEl = document.createElement('option');
optionEl.value = 'IDN';
optionEl.text = 'Indonesia';

const option2 = new Option('America','US');

countryEl.add(option2,4)
    




