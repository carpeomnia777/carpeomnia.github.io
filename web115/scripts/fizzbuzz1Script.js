const btn = document.querySelector('#btn');

            btn.addEventListener("click", () => {
            var fName = document.getElementById("first_name").value;
            var mInit = document.getElementById("middle_initial").value;
            var lName = document.getElementById("last_name").value;
            document.getElementById("greeting").innerHTML = `Welcome To CarpeOmnia Consulting, ${fName} ${mInit} ${lName}!`
            var list=document.getElementById("fizzList")
            for (let i=1; i<= 140; i++){
                var li = document.createElement("li");
                if(i % 5 == 0 && i % 3 == 0){
                    li.innerText= i + ". Clickity-clack"
                    list.appendChild(li);
                }
                else if(i % 5 == 0){
                    li.innerText = i + ". Clack"
                    list.appendChild(li);
                }
                else if(i % 3 == 0){
                    li.innerText = i + ". Click"
                    list.appendChild(li);
                }
                else{
                    li.innerText = i + ". what good work sounds like"
                    list.appendChild(li);
                }
            }
                });