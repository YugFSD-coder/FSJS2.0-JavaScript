# Dom Assignment 3

### Task
![text](./Output/DOM%20P2%20SS.png)

#### Code :
    //Add dist name
        const element=document.createElement("a");
        element.textContent="Chinese(7)";
        element.href="#";
        document.querySelector(".tags-container div").appendChild(element);

        //add pro suscription button
        const btn=document.createElement("a");
        btn.textContent="Pro Susription";
        btn.className="btn";
        btn.href="index.html";
        document.querySelector(".nav-center div:nth-child(3)").appendChild(btn);

        //add card to recipy gallery
        const card= document.createElement("div");
        card.className="card";
        document.querySelector(".recipe-gallery").appendChild(card);

        const tag = document.createElement("a");
        tag.className="recipe-text";
        tag.href="#";
        document.querySelector(".recipe-gallery div:nth-child(6)").appendChild(tag);
        
        const list=`
                    <img src="./img/recipe-6.jpg" class="recipe-img " />
                    <h5 class="recipe-name">Crisy Veg</h5>
                    <p class="recipe-disp">Prep : 15min | Cook : 20min</p>
                  `
        const value=document.querySelector(".recipe-gallery div:nth-child(6) a").innerHTML=list;   
        
        //change color
        const element2 = document.querySelectorAll(".recipe-name");
        for (let i = 0; i < element2.length; i++)
        {
            element2[i].style.color = "purple";
        }
        
        const element3=document.querySelectorAll(".recipe-disp");
        for(let i=0;i<element3.length;i++)
        {
            element3[i].style.color="purple";
        }

