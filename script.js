const minut=document.querySelector(".minut");
const soat=document.querySelector(".soat");
const sekund=document.querySelector(".sekund");
const soat02=document.querySelector(".soat02");
const sana=document.querySelector(".sana");
const minu=document.querySelector(".soat01");
const soat00=document.querySelector(".soat00");

let b=new Date();
let hour=b.getHours();
let min=b.getMinutes();
let secound=b.getSeconds(); 

let i=secound+1;
setInterval(function(){
  soat02.textContent=i;
  if(i==60){
    i=0;
    soat02.textContent=i;
  }
  i++;
},1000)

let j=min;
setInterval(function(){
  minu.textContent=j;
  if(j==60){
    j=0;
    soat02.textContent=j;
    }
  j++;
},60*1000);

let k=hour;
setInterval(function(){
  soat00.textContent=k;
  
},60*1000)



if(hour>=12){
  hour-=12;
}
console.log(hour);

let gradus1=hour*30+min*0.5;
soat.style.transform=` rotate(${gradus1}deg)`
let gradus2=min*6+secound*0.1;
minut.style.transform=` rotate(${gradus2}deg)`
let gradus3=secound*6;
sekund.style.transform=` rotate(${gradus3}deg)`
setInterval(function(){
  gradus2+=0.1;
  minut.style.transform=` rotate(${gradus2}deg)`
},1000)

setInterval(function(){
  gradus3+=6;
  sekund.style.transform=` rotate(${gradus3}deg)`
},1000)

setInterval(function(){
  gradus1+=0.5;
  soat.style.transform=` rotate(${gradus1}deg)`
},60*1000);

let a=new Date();
// console.log(a);
// let oy=a.getMonth();
// let kun=a.getDate();
// let haftakun=a.getDay();
// console.log(oy,kun,haftakun);


let op={
  month:"numeric",
  day:"numeric",
  weekday:"long",
}
let uzb=Intl.DateTimeFormat(navigator.language,op).format(a);
console.log(uzb);
sana.textContent=uzb;

////////////////////////////////////////////////////////////////


