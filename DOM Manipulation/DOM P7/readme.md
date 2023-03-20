# Dom Assignmnet 7
1. Assignment - 1: Remove the languages that have 2.0 in their name(Every alternative language)
#### Before:
![tect](./ass7.1-before.png)

#### after:
![tect](./ass7.1-after.png)

#### Code :

----
2.
#### Before
![text](./ass7.2-before.png)
#### after
![text](./ass7.2-after.png)
#### Code :
    // submit button change
      let text = document.querySelector(".main__form-input");
      text.disabled = false;
      let btn = document.querySelector(".main__form-btn");
      btn.disabled = false;
      btn.onclick = function(){
        return(
          text.value="iNeuron"
        )    
      }