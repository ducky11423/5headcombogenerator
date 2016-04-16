var names=["Meyers", "Frog", "Shenanigans", "Stigin", "Cheese", "Mat", "The Duckmiester", "Gmate", "Blind", "Jaymo", "Kyle", "Latu", "Kuro", "Kinky", "ZooZoo", "Geoffery", "Vystis", "Alpha", "Smallo", "Dislike", "Burtmin", "Duck", "Taven", "Freddie", "Prohax", "Saxton", "Cheater", "Giga", "Raime", "Grim", "Red", "Ceuloia", "Mansa", "Jibbyril", "Ham Peas", "Loopini", "Daxter", "Paul", "Micro", "Gundislav", "Fortunekid"];
var nouns=["Jew", "Social Justice Warrior", "twat", "faggot", "furry", "shit stain", "fuckass", "cunt", "power hungry whore", "sick cunt", "12 year old", "fucktard", "lad", "bag of dicks", "legit hacker", "rep whore", "wang", "wanker"];
var adjectives=["queer", "butthurt", "annoying", "inbred", "gay", "salty", "fucked", "weird", "getting banned", "literally worse than hitler", "3phie reincarnated"];
var likes=["butt sex", "anal", "sucking up to the higher ups", "sucking Stigin off", "winding all the 12 year olds up"];

function PickCombination(){
    PickCombination("")
}

function PickCombination(name){
   
    if (name == null) {
        name = names[Math.floor(Math.random()*names.length)]
    } 
 
    var deteminer = ""
    var word = " "
    
    var rand = Math.floor(Math.random()*3)
    
    
    if (rand == 0) {
        var word = nouns[Math.floor(Math.random()*nouns.length)]
        deteminer = " is a "
    }
    
    else if (rand == 1){
        var word = adjectives[Math.floor(Math.random()*adjectives.length)]
        deteminer = " is "
    }
    
    else if  (rand == 2){
        var word = likes[Math.floor(Math.random()*likes.length)]
        deteminer = " likes "
    }
    
    display = document.getElementById("combination");
    display.innerHTML = name + deteminer + word + "!";
}

function PopulateList(){
    var html = ""
    
    for (i = 0; i < names.length; i++) {
        html = html + '<button type="button" class="btn btn-default" id="pick" onclick="PickCombination(\'' + names[i] + '\')">' + names[i] + '</button>'
    }
    
    document.getElementById("ButtonList").innerHTML = html
}