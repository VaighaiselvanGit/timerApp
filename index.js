const questions = [
    {
      id: 1,
      question: "Which planet in our solar system is closest to the sun?",
      choices: ["Ian McKellen", "Partrick Stewart", "Mercury"],
      answer: "Ian McKellen"
    },
    {
      id: 2,
      question:
        "Which actor played Richard III in the 1995 British film drama of the same title?",
      choices: ["Ian McKellen", "Partrick Stewart", "Elijah Wood"],
      answer: "Partrick Stewart"
    },
    {
      id: 3,
      question:
        "Which Marvel superhero, also known as Steve Rogers, made his first appearance in March 1941?",
        choices: ["Captain America", "RDJ", "Elijah Wood"],
        answer: "Elijah Wood"
    },
    
  ];


  var button = document.getElementById("btn");
  var ques = document.getElementById('question');
  
  let value = 0;
  button.addEventListener('click',main)
var a = document.getElementById('s');
var b = document.getElementById('u');
var c = document.getElementById('v');
a.innerText="Hello"
  var click = document.getElementsByClassName('clicked');
var count=0
var z = document.getElementById('h2')
var element = document.getElementById('help');
  function main() {
    element.style.visibility='visible';
    z.style.visibility='hidden';
    button.innerText="Next";
    ques.innerHTML=questions[value].question
  
    a.innerHTML=questions[value].choices[0]
    b.innerText=questions[value].choices[1]
    c.innerText=questions[value].choices[2]
    value++;
    if(value == 4){
      alert("No more values")
      button.disable=true
    }
  console.log(count)
    
  }

