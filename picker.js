var names=["Alpha","Blind","Burtmin","Ceuloia","Cheater","Cheese","Church", "Dantenate", "Daxter","Dislike","Duck","Fortunekid","Freddie","Frog","Geoffery","Giga","Gmate","Grim","Gum", "Gundislav","Ham Peas","Jaymo","Jibbyril","Kinky","Kuro","Kyle","Latu","Loopini","Mansa","Mat","Meyers","Micro","Paul","Prohax","Raime","Red","Saxton","Shenanigans", "Smallo", "Soda", "Stigin","Taven","The Duckmiester","Vystis", "Zettman", "Zeus", "ZooZoo"];
var nouns=["Jew", "Social Justice Warrior", "twat", "faggot", "furry", "shit stain", "fuckass", "cunt", "power hungry whore", "sick cunt", "12 year old", "fucktard", "lad", "bag of dicks", "legit hacker", "rep whore", "wang", "wanker", "Weeaboo"];
var adjectives=["queer", "butthurt", "annoying", "inbred", "gay", "salty", "fucked", "weird", "getting banned", "literally worse than hitler", "3phie reincarnated"];
var likes=["butt sex", "anal", "sucking up to the higher ups", "sucking Stigin off", "winding all the 12 year olds up"];

var rolls = 0

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
        word = nouns[Math.floor(Math.random()*nouns.length)]
        deteminer = " is a "
    }
    
    else if (rand == 1){
        word = adjectives[Math.floor(Math.random()*adjectives.length)]
        deteminer = " is "
    }
    
    else if  (rand == 2){
        word = likes[Math.floor(Math.random()*likes.length)]
        deteminer = " likes "
    }
    
    if (name == "Stigin"){
        word = "wang"
        deteminer = " is a "
    }
    
     rolls = rolls + 1
    
    display = document.getElementById("combination");
    display.innerHTML = name + deteminer + word + "!";
    
   rollP = document.getElementById("rolls");
   rollP.innerHTML = "You have rolled: " + rolls + " times."
}

function PopulateList(){
    var html = ""
    
    for (i = 0; i < names.length; i++) {
        html = html + '<button type="button" class="btn btn-default" id="pick" onclick="PickCombination(\'' + names[i] + '\')">' + names[i] + '</button>'
    }
    
    document.getElementById("ButtonList").innerHTML = html
}