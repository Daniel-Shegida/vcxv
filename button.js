$(document).ready(function () {



    var Name = document.getElementsByClassName("main-img__name")[0];
    Name.onclick = function() {
        if (Name.innerHTML =="Daniel is с programmer") {
            Name.innerHTML ="Daniel is php lamer"
        } else if (Name.innerHTML =="Daniel is php lamer") {
            Name.innerHTML ="Daniel is a develover(on rpg maker)"
        } else if (Name.innerHTML =="Daniel is a develover(on rpg maker)") {
            Name.innerHTML ="yuck i know"
        } else if (Name.innerHTML =="yuck i know") {
            Name.innerHTML ="Daniel is а philanthropist"
        } else if (Name.innerHTML =="Daniel is а philanthropist") {
            Name.innerHTML ="Daniel is a misanthropist"
        } else if (Name.innerHTML =="Daniel is a misanthropist") {
            Name.innerHTML ="и просто хороший человек "
        } else {
            Name.innerHTML ="Daniel is с programmer"
        }
    }

    var Name1 = document.getElementsByClassName("site-name")[0];
    Name1.onclick = function() {
        alert ("no no no no no no ");
    }


    var headerButton = document.getElementById("header-button");

    headerButton.onclick = function() {
        var name = prompt("and Daniel is ...");
        if (name ==""||name ==null) {
            alert( 'you canceled but i know what u wanted to say' );
            Name.innerHTML = "Daniel is best of the best";

        } else {
            Name.innerHTML ="Daniel is " + name;
        }
    }



})