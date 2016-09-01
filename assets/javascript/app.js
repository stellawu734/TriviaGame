//need to add timer and maybe pictures
var answer;
var win = 0;
var loss = 0;
var ranOutTime = 0;
var timeLeft = 30;

var Question1 = {
question:"Planet Earth is the ______ planet from the Sun.",
choice:["Second",
"Third",
"Fourth",
"Fifth",
"Third"]
};
var Question2 = {
question:"About how many eggs does a queen bee lay each day?",
choice:["1-2",
"1,000-3,000",
"10,000",
"100-300",
"1,000-3,000"]
};
var Question3 = {
question:"It is now believed that dinosaurs became extinct because of:",
choice:["Diseases",
"Hunting by early humans",
"A meteorite impact",
"An earthquake",
"A meteorite impact"]
};
var Question4 = {
question:"What is NOT found in sharks?",
choice:["Skin",
"Bones",
"Teeth",
"Gills",
"Bones"]
};
var Question5 = {
question:"What are clouds made out of?",
choice:["Water",
"Fog",
"Smoke",
"Cotton",
"Water"]
};
var Question6 = {
question:"The metal mercury is: ",
choice:["The hardest known metal",
"A liquid at room temperatur",
"is the 79th element in the table",
"highly radioactive",
"A liquid at room temperatur"]
};
var Question7 = {
question:"If you were to take a lump of coal and squeeze for a long time at very high temperatures, you would end up with…",
choice:["Volvanic Glass, aka obsidian",
"Ash",
"A smaller lump of coal",
"A diamond",
"A diamond"]
};
var Question8 = {
question:"If I dissolve some sugar in regular water, what have I made?",
choice:["Sweet Tea",
"Saline",
"Mixture",
"Solution",
"Solution"]
};

//define function
function showQuestion(object) {
	$(".option").css("color","#598234");
	$(".option").on("mouseover",function() {
		$(this).css("color","white")
	});
	$(".option").on("mouseout",function() {
		$(this).css("color","#598234")
	});
    $("#question").html(object.question).show();
	$("#option1").html(object.choice[0]);
	$("#option2").html(object.choice[1]).show().css("color","#598234");
	$("#option3").html(object.choice[2]);
	$("#option4").html(object.choice[3]);
	answer = object.choice[4];
};

function run(){
timeLeft=30;
$("#time").html(30);
$("#timer").show();
counter = setInterval(timeRun,1000)
};
function timeRun(){
timeLeft = timeLeft -1;
$("#time").html(timeLeft);
	if (timeLeft === 0){      
                stop();
                $("#timer").hide();            
                $("#question").html("Time Up!").delay(5000).hide(0);
				$(".option").empty();
                ranOutTime++;
        setTimeout(function finalResult() {console.log(answer);
		if(answer=="Third"){showQuestion(Question2);run();}
		else if(answer=="1,000-3,000"){showQuestion(Question3);run();}
		else if(answer=="A meteorite impact"){showQuestion(Question4);run();}
		else if(answer=="Bones"){showQuestion(Question5);run();}
		else if(answer=="Water"){showQuestion(Question6);run();}
		else if(answer=="A liquid at room temperatur"){showQuestion(Question7);run();}
		else if(answer=="A diamond"){showQuestion(Question8);run();}
			else {//final show of result
				$("#question").html("Game Over!").show();
				$(".option").unbind("mouseover mouseout").css("color","#763626");
				$("#option1").empty();
				$("#option2").html("Wins: "+win).show();
				$("#option3").html("Losses: "+loss);
				$("#option4").html("Running out of time: "+ranOutTime);
				$("#restart").show();
			};
	
	},5000);
            }
 };

function stop(){
           
            clearInterval(counter);
 };


//click action on start
$(document).ready(function() {

$(".btn").on( "click", function() {
	showQuestion(Question1);
	$("#start").hide();
	$("#timer").show();
	run();

});

//click action on each object
//right option - need to add in pictures and timer and junction operatives
$(".option").on("click",function(){
	stop();
	$("#timer").hide();
	timeLeft=30;
	$("#time").html(30);
	if($(this).text()===answer) {
		$("#question").html("Congratulations! You chose the right answer!").delay(5000).hide(0);
		$(".option").empty();
		win++;	
		//pass on to the next Q
	} else {
		$("#question").html("Ah oh...").delay(5000).hide(0);
		$(".option").empty();
		$(".option").unbind("mouseover mouseout");
		$("#option2").html("the right option is actually: " +  answer).delay(5000).hide(0).css("color","pink");
		loss++;
		//pass on to the next Q
	};

	setTimeout(function finalResult() {console.log(answer);
		if(answer=="Third"){showQuestion(Question2);run();}
		else if(answer=="1,000-3,000"){showQuestion(Question3);run();}
		else if(answer=="A meteorite impact"){showQuestion(Question4);run();}
		else if(answer=="Bones"){showQuestion(Question5);run();}
		else if(answer=="Water"){showQuestion(Question6);run();}
		else if(answer=="A liquid at room temperatur"){showQuestion(Question7);run();}
		else if(answer=="A diamond"){showQuestion(Question8);run();}
			else {//final show of result
				$("#question").html("Game Over!").show();
				$(".option").unbind("mouseover mouseout").css("color","#763626");
				$("#option1").empty();
				$("#option2").html("Wins: "+win).show();
				$("#option3").html("Losses: "+loss);
				$("#option4").html("Running out of time: "+ranOutTime);
				$("#restart").show();
			};
	
	},5000);

});
//reset
$("#restart").on("click",function(){
	win=0;
	loss=0;
	ranOutTime=0;
	timeLeft = 30;
	$("#restart").hide();
	$("#start").show();
	$("#question").empty();
	$(".option").empty();
	$("#timer").hide();

});

});