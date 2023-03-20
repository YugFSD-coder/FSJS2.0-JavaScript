# Dom Assignment 6
1.
![text](./Output/DOM%20P3%20SS-1.png)

#### Code:
    //Change Heading
    document.querySelector(".logo").src="./assets/ineuron-logo.png"
----
2.
![text](./Output/DOM%20P3%20SS-2.png)

#### code:
    // Icon Added
    let ele =document.createElement("div");
    ele.className="footer_social_ico";
    
    let icon = document.createElement("i");
    icon.className="fa-brands fa-linkedin";
    ele.appendChild(icon);
    document.querySelector(".footer_social").appendChild(ele);

    // changed the price
    let price = document.querySelector(".app_price span");
    price.innerHTML = "$10";
