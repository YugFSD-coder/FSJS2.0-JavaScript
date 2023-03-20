# Dom Assignment 2

### Task :
![text](./Output/DOM%20P1%20SS.png)

Code :

    const element1=document.querySelector("#bg1");
       element1.style.backgroundColor="#ec9b3b";
       element1.style.color="#ffff";

       const element2=document.querySelector("#bg2");
       element2.style.backgroundColor="#ee5487";
       element2.style.color="#ffff";

       const element3=document.querySelector("#bg3");
       element3.style.backgroundColor="#f6901a";
       element3.style.color="#ffff";

       const element4=document.querySelector("#bg4");
       element4.style.backgroundColor="#82bb30";
       element4.style.color="#ffff";

       const element5=document.querySelector("#bg5");
       element5.style.backgroundColor="#4facff";
       element5.style.color="#ffff";
    
       const abc=document.querySelectorAll(".clash-card div:nth-child(3)");
        for(let i=0;i<abc.length;i++){
        abc[i].style.Color="white";
         }