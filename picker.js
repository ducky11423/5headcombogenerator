var names=["Shenanigans", "Stigin", "Cheese", "Mat", "The Duckmiester", "Gmate", "Blind", "Jaymo", "Kyle", "Latu", "Kuro", "Kinky", "ZooZoo", "Geoffery", "Vsytis", "Alpha", "Smallo", "Dislike", "Burtmin", "Duck", "Taven", "Freddie", "Prohax", "Saxton", "Cheater", "Giga", "Raime", "Grim", "Red", "Ceuloia", "Mansa", "Jibbyril", "Ham Peas", "Loopini", "Daxter", "Paul", "Micro", "Gundislav", "Fortunekid"];
var nouns=["Jew", "Social Justice Warrior", "twat", "faggot", "furry", "shit stain", "fuckass", "cunt", "power hungry whore", "sick cunt", "12 year old", "fucktard", "lad", "bag of dicks", "legit hacker", "rep whore"];
var adjectives=["queer", "butthurt", "annoying", "inbred", "gay", "salty", "fucked", "weird", "getting banned", "literally worse than hitler", "3phie reincarnated"];

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