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
            
            for (let i=1; i<= 140; i++){
             var li = document.createElement("li");
                if(checkDivision(i, 3)==true && checkDivision(i, 5) == true && checkDivision(i, 7)){
                    li.innerText= i + ". Clickity-clack-clack-Thunk"
                    list.appendChild(li);
                }
                else if(checkDivision(i, 3) == true && checkDivision(i, 5) == true){
                    li.innerText = i + ". Clickity-Clack"
                    list.appendChild(li);
                }
                else if(checkDivision(i, 3) == true && checkDivision(i, 7) == true){
                    li.innerText = i + ". Clackity-Click"
                    list.appendChild(li);
                }
                else if(checkDivision(i, 5) == true && checkDivision(i, 7) == true){
                    li.innerText = i + ". Clackity-Clack"
                    list.appendChild(li);
                }
                else if(checkDivision(i, 5) == true){
                    li.innerText = i + ". Clack"
                    list.appendChild(li);
                }
                else if(checkDivision(i, 3)==true){
                    li.innerText = i + ". Click"
                    list.appendChild(li);
                }
                else if(checkDivision(i, 7)==true){
                    li.innerText = i + ". Thunk"
                    list.appendChild(li);
                }
                else{
                    li.innerText = i + ". working"
                    list.appendChild(li);
                }
            }
                });

              