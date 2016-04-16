var names=["Shenanigans", "Stigin", "Cheese", "Mat", "The Duckmiester", "Gmate", "Blind", "Jaymo", "Kyle", "Latu", "Kuro", "Kinky", "ZooZoo", "Geoffery", "Vsystis", "Alpha", "Smallo", "Dislike", "Burtmin", "Duck", "Taven", "Freddie", "Prohax", "Saxton", "Cheater", "Giga", "Raime", "Grim", "Red", "Ceuloia", "Mansa", "Jibbyril", "Ham Peas", "Loopini", "Daxter"];
var nouns=["Jew", "Social Justice Worker", "twat", "faggot", "furry", "shit stain", "fuckass", "cunt", "power hungry whore"];
var adjectives=["queer", "butthurt", "annoying", "inbred", "gay", "salty", "fucked", "weird"];

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