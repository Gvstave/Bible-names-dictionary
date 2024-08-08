document.addEventListener("DOMContentLoaded", function(){
    var link = document.querySelectorAll(".link").length;
    
    for(var i = 0; i < link; i++){
        document.querySelectorAll(".link")[i].addEventListener("click", function(){         
            function clearMain(){
                document.querySelector('#for_content').style.display = "none";
            }
            clearMain();

            function mainContent(){
                var main = document.getElementById("main");
                document.createElement("h2")
                document.querySelector("h2").classList.add('head');
                head.innerHTML = 'hello';

                main.append('h2');
            }
            mainContent();
        })
    }

    
})