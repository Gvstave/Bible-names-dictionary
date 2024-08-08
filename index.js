ocument.addEventListener('DOMContentLoaded', function(){
   //For daily names suggestion
   function randFunc(){
    const namesMeaning = [
        {
            name: "Adam",
            meaning: "The first man to be created by God on earth"
        },
        {
            name: "Emmanuel",
            meaning: "God with us"
        }
        ,
        {
            name: "Emmanuel2",
            meaning: "God with us"
        }
        ,
        {
            name: "Emmanuel3",
            meaning: "God with us"
        }
    ];

    var randNum = Math.floor(Math.random() * namesMeaning.length);
    
    
        document.querySelector('#heading').innerHTML = namesMeaning[randNum].name;
        document.querySelector('#sentence').innerHTML = namesMeaning[randNum].meaning;
    }

    setInterval(randFunc, 1000);
   
    var audio = document.querySelector('#song');
    audio.play();
    //For the search animations not search functionality
    document.querySelector("#search-btn").addEventListener("click", function(event){
        document.querySelector(".search").classList.toggle("search-bar");
    })

    //For audio controls
    document.querySelector('#btn1').addEventListener("click", function(){
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
    })
    })



