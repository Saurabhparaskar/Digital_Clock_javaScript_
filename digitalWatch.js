const currentTime=()=>{
    let curTime=new Date().toLocaleTimeString();
    const clk =document.getElementById("clock").innerText=curTime;
};
currentTime();

setInterval(()=>{
    currentTime();
},1000);



const cl =document.getElementById("clock")
cl.addEventListener("mouseover",(a)=>{
    cl.style.fontSize="2rem";
    cl.style.backgroundColor="red";
    cl.style.width="200px";
    cl.style.height="100px";
    cl.style.transition="all 1s ease-in-out"
 });
   
    cl.addEventListener("mouseout",(a)=>{
         cl.style.fontSize="1rem";
    cl.style.backgroundColor="green";
    cl.style.width="100px";
    cl.style.height="50px";
    cl.style.transition="all 1s ease-in-out";
});
