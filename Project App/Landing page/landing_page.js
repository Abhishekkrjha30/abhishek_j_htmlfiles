let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");
let b4=document.getElementById("b4");

let c1=document.getElementById("c1");
let c2=document.getElementById("c2");
let c3=document.getElementById("c3");
let c4=document.getElementById("c4");

b1.addEventListener('click',()=>{
    c1.style.display='flex';
    c2.style.display='none';
    c3.style.display='none';
    c4.style.display='none';

});
b2.addEventListener('click',()=>{
    c1.style.display='none';
    c2.style.display='flex';
    c3.style.display='none';
    c4.style.display='none';

});
b3.addEventListener('click',()=>{
    c1.style.display='none';
    c2.style.display='none';
    c3.style.display='flex';
    c4.style.display='none';

});
b4.addEventListener('click',()=>{
    c1.style.display='none';
    c2.style.display='none';
    c3.style.display='none';
    c4.style.display='flex';

});