//even
// for(let i=1; i<20; i++){
//     if(i%2 ===0){
//         console.log(i);
        
//     }
// }



//odd
// for(let i=0; i<20; i++){
//     if(i%2 !=0){
//         console.log(i);
//     }
// }




//DOM
const welcome = document.getElementById("welcome");
welcome.innerText = 'welcome js';

const topic = document.getElementById("topic");
topic.innerText = 'world';



const loopDOM = document.getElementById("loopDOM");
for (let i=0; i < 3; i++){
    loopDOM.innerHTML += '<h1 style="color:red"> JavaScript </h1>';
}



const test = document.getElementById("test");
for (let i=0; i<4; i++){
    test.innerHTML += '<h2> Test 1 </h2>';
}