//defined variables - objects for each questions and choices and answer
var timeRemaining=30;

var firstQ = {
question:"Planet Earth is the ______ planet from the Sun.",
choice1:"Second",
choice2:"Third",
choice3:"Fourth",
choice4:"Fifth",
answer:"Third"
};
var secondQ = {
question:"About how many eggs does a queen bee lay each day?",
choice1:"1-2",
choice2:"1,000-3,000",
choice3:"10,000",
choice4:"100-300",
answer:"1,000-3,000"
};
var thirdQ = {
question:"It is now believed that dinosaurs became extinct because of:",
choice1:"Diseases",
choice2:"Hunting by early humans",
choice3:"A meteorite impact",
choice4:"An earthquake",
answer:"A meteorite impact"
};
var fourthQ = {
question:"What is NOT found in sharks?",
choice1:"Skin",
choice2:"Bones",
choice3:"Teeth",
choice4:"Gills",
answer:"Bones"
};
var fifthQ = {
question:"What are clouds made out of?",
choice1:"Water",
choice2:"Fog",
choice3:"Smoke",
choice4:"Cotton",
answer:"Water"
};
var sixthQ = {
question:"The metal mercury is…",
choice1:"The hardest known metal",
choice2:"A liquid at room temperatur",
choice3:"is the 79th element in the table",
choice4:"highly radioactive",
answer:"A liquid at room temperatur"
};
var seventhQ = {
question:"If you were to take a lump of coal and squeeze for a long time at very high temperatures, you would end up with…",
choice1:"Volvanic Glass, aka obsidian",
choice2:"Ash",
choice3:"A smaller lump of coal",
choice4:"A diamond",
answer:"A diamond"
};
var eighthQ = {
question:"If I dissolve some sugar in regular water, what have I made?",
choice1:"Sweet Tea",
choice2:"Saline",
choice3:"Mixture",
choice4:"Solution",
answer:"Solution"
};

//define function
function showQuestion(object) {
    $("#question").html(object.question);
	$("#option1").html(object.choice1);
	$("#option2").html(object.choice2);
	$("#option3").html(object.choice3);
	$("#option4").html(object.choice4);
}
//click action on start
$(document).ready(function(){

$(".btn").on( "click", function() {
	showQuestion(firstQ);
	$("#start").hide();
	console.log(firstQ.answer);
});

//click action on each object
//final show of result
//reset
});