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
            document.getElementById("greeting").innerHTML = `Welcome To CarpeOmnia Consulting, ${fName} ${mInit} ${lName}!`;
            var list=document.getElementById("fizzList");
            var num = prompt(`How high would you like to count, ${fName}?`, 140);
            var div1 = prompt(`Please enter a number, ${fName}` , 3);
            var word1 = prompt(`Please enter a word to go with the first number, ${fName}` , "click");
            var div2 = prompt(`please enter a second number, ${fName}`, 5);
            var word2 = prompt(`Please enter a word to go with the second number, ${fName}` , "clack");
            var div3 = prompt(`Please enter a third number, ${fName}`, 7);
            var word3 = prompt(`Please enter a word to go with the third number, ${fName}`, "thunk");
            var wordD = prompt(`Please enter a word for the numbers not divisible by the other chosen numbers, ${fName}`, "working");
            
            for (let i=1; i<= num; i++){
             var li = document.createElement("li");
             if(checkDivision(i, div1)==true && checkDivision(i, div2) == true && checkDivision(i, div3)){
                li.innerText= i + `. ${word1} ${word2} ${word3}`
                list.appendChild(li);
            }
            else if(checkDivision(i, div1) == true && checkDivision(i, div2) == true){
                li.innerText = i + `. ${word1} ${word2}`
                list.appendChild(li);
            }
            else if(checkDivision(i, div1) == true && checkDivision(i, div3) == true){
                li.innerText = i + `. ${word1} ${word3}`
                list.appendChild(li);
            }
            else if(checkDivision(i, div2) == true && checkDivision(i, div3) == true){
                li.innerText = i + `. ${word2} ${word3}`
                list.appendChild(li);
            }
            else if(checkDivision(i, div2) == true){
                li.innerText = i + `. ${word2}`
                list.appendChild(li);
            }
            else if(checkDivision(i, div1)==true){
                li.innerText = i + `. ${word1}`
                list.appendChild(li);
            }
            else if(checkDivision(i, div3)==true){
                li.innerText = i + `. ${word3}`
                list.appendChild(li);
            }
            else{
                li.innerText = i + `. ${wordD}`
                list.appendChild(li);
            }
            }
        });

              