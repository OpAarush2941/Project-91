player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");    

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

function send(){
var question = "no1" + "x" + "no2";
question_word = "<h4 id='word_display'> Q. "+ question+"</h4>"
input_box = "<br><br> <input id='input_box' type='text' placeholder='Answer'>"
check_button = "<br><br> <button class= 'btn btn-info' onclick='check()'>Check</button>"
row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}

document.getElementById("Question").innerHTML = "Question - "+player1_name;
document.getElementById("Answer").innerHTML = "Answer - "+player2_name;