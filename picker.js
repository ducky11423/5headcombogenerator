var names=["Shen", "Stigin", "Cheese", "Mat", "Duckmiester"];
var nouns=["Jew", "SJW", "Twat"];
var adjectives=["Queer", "Butthurt", "Annoying"];

function PickCombination(){
    var name = names[Math.floor(Math.random()*names.length)]
    var deteminer = ""
    var word = " "
    
    if (Math.round(Math.random()) == 1) {
        var word = nouns[Math.floor(Math.random()*nouns.length)]
        deteminer = "a "
    }
    
    else{
        var word = adjectives[Math.floor(Math.random()*adjectives.length)]
    }
    
    display = document.getElementById("combination");
    display.innerHTML = name + " is " + deteminer + word + "!";
}