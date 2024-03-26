let logo=document.getElementById('box1');
logo.addEventListener('mouseenter',()=>{
    logo.style.transform='scale(1.5)';
    logo.style.marginLeft='4rem';
    logo.style.transition='0.5s ease';
    logo.style.marginRight='4rem';

})
logo.addEventListener('mouseleave',()=>{
    logo.style.transform='scale(1)';
    logo.style.marginLeft='0';
    logo.style.transition='0.5s ease';
    logo.style.marginRight='0';

})
let logo2=document.getElementById('box2');
logo2.addEventListener('mouseenter',()=>{
    logo2.style.transform='scale(1.5)';
    logo2.style.transition='0.5s ease';
    logo2.style.marginRight='4rem';

})
logo2.addEventListener('mouseleave',()=>{
    logo2.style.transform='scale(1)';
    logo2.style.transition='0.5s ease';
    logo2.style.marginRight='0';
    

})
let logo3=document.getElementById('box3');
logo3.addEventListener('mouseenter',()=>{
    logo3.style.transform='scale(1.5)';
    logo3.style.transition='0.5s ease';
    logo3.style.marginRight='4rem';
  

})
logo3.addEventListener('mouseleave',()=>{
    logo3.style.transform='scale(1)';
    logo3.style.transition='0.5s ease';
    logo3.style.marginRight='0';

})
let logo4=document.getElementById('box4');
logo4.addEventListener('mouseenter',()=>{
    logo4.style.transform='scale(1.5)';
    logo4.style.transition='0.5s ease';
    logo4.style.marginRight='4rem';
    

})
logo4.addEventListener('mouseleave',()=>{
    logo4.style.transform='scale(1)';
    logo4.style.transition='0.5s ease';
    logo4.style.marginRight='0';
    
   

})
let headlogo=document.getElementById('head');

headlogo.addEventListener("mouseenter",()=>{
    headlogo.style.transform='scale(1.5)';
    headlogo.style.transition='1s ease';

})
headlogo.addEventListener("mouseleave",()=>{
    headlogo.style.transform='scale(1)';
    headlogo.style.transition='1s ease';

})
let button=document.getElementById('search');
button.addEventListener('click',()=>{
    button.innerHTML = "Searching...";
    setInterval(()=>{
        button.innerHTML = "Search";

    },5000)
})
let input=document.getElementById('searchproblem');
input.addEventListener('mouseenter',function(){
    input.style.transform='scale(1.4)';
})
input.addEventListener('mouseleave',function(){
    input.style.transform='scale(1)';
})
let insta=document.getElementById('insta');
insta.addEventListener('mouseenter',()=>{
    insta.style.transform='scale(2)';
    insta.style.transition='0.3s';
})
insta.addEventListener('mouseleave',()=>{
    insta.style.transform='scale(1)';
    insta.style.transition='0.3s';
})
let you =document.getElementById('you');
you.addEventListener('mouseenter',()=>{
    you.style.transform='scale(2)';
    you.style.transition='0.3s';
})
you.addEventListener('mouseleave',()=>{
    you.style.transform='scale(1)';
    you.style.transition='0.3s';
})
let twit=document.getElementById('twit');
twit.addEventListener('mouseenter',()=>{
    twit.style.transform='scale(2)';
    twit.style.transition='0.3s';
})
twit.addEventListener('mouseleave',()=>{
    twit.style.transform='scale(1)';
    twit.style.transition='0.3s';
})
let face=document.getElementById('face');
face.addEventListener('mouseenter',()=>{
    face.style.transform='scale(2)';
    face.style.transition='0.3s';
})
face.addEventListener('mouseleave',()=>{
    face.style.transform='scale(1)';
    face.style.transition='0.3s';
})