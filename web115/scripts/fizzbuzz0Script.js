const btn = document.querySelector('#btn');

            btn.addEventListener("click", () => {
            var fName = document.getElementById("first_name").value;
            var mInit = document.getElementById("middle_initial").value;
            var lName = document.getElementById("last_name").value;
            document.getElementById("greeting").innerHTML = `Welcome To CarpeOmnia Consulting, ${fName} ${mInit} ${lName}!`
           var num = prompt(`How high would you like to count, ${fName}?`)
        var list=document.getElementById("fizzList")
        for (let i=1; i<= num; i++){
            var li = document.createElement("li");
            if(i % 2 != 0){
                li.innerText= i + ". Expect More - The number is Odd"
                list.appendChild(li);
            }
            else{
                li.innerText = i + ". Expect More - The number is Even"
                list.appendChild(li);
            }
        }
            });