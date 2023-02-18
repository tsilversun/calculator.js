function autoComplete(inputEl, data = []){

    let ul = document.createElement("UL");
    ul.setAttribute("id", "list-autocomplete")

    inputEl.addEventListener("keyup", function(e){

        console.log(e.which);

        if(e.which == 40){

            
            
        }
        
        if(inputEl.value == ""){

            ul.setAttribute("style", "border:none;")
            ul.innerHTML = "";

            return;
        }

        let searchedData = data.filter(item => item.toLowerCase().indexOf(inputEl.value.toLowerCase()) >= 0);


        if(searchedData.length > 0){
            
            ul.innerHTML = "";
            ul.setAttribute("style", "border:1px solid #000;")
            
            searchedData.forEach((item) =>{

                let li = document.createElement("LI");

                li.textContent = item;

                ul.appendChild(li);
    
            });

            inputEl.parentNode.insertBefore(ul, inputEl.nextSibling);


        }
        else{
            ul.innerHTML = "";
            ul.setAttribute("style", "border:none;")
            
        }
        
        
    });



}


let inputEl = document.querySelector("#autocomplete");
let data = ["Red", "Orange", "Blue", "Pink"];

autoComplete(inputEl, data);