function checkDivision (iCounter, divisorTwo){
    if (iCounter % divisorTwo == 0){
        return true;
    }
    else{
        return false;
    }
    }  
       

const btn = document.querySelector('#btn');

            btn.addEventListener("click", () => {
            var fName = document.getElementById("first_name").value;
            var mInit = document.getElementById("middle_initial").value;
            var lName = document.getElementById("last_name").value;
            document.getElementById("greeting").innerHTML = `Welcome To CarpeOmnia Consulting, ${fName} ${mInit} ${lName}!`
            var list=document.getElementById("fizzList")
            var div1 = prompt(`Please enter a number, ${fName}`)
            var div2 = prompt(`please enter a second number, ${fName}`)
            for (let i=1; i<= 140; i++){
             var li = document.createElement("li");
                if(checkDivision(i, div1)==true && checkDivision(i, div2) == true){
                    li.innerText= i + ". Clickity-clack"
                    list.appendChild(li);
                }
                else if(checkDivision(i, div1) == true){
                    li.innerText = i + ". Clack"
                    list.appendChild(li);
                }
                else if(checkDivision(i, div2)==true){
                    li.innerText = i + ". Click"
                    list.appendChild(li);
                }
                else{
                    li.innerText = i + ". what good work sounds like"
                    list.appendChild(li);
                }
            }
                });

              

