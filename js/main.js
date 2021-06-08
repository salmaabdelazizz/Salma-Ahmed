var savedUserInput = prompt("Hello! who are you? Pls introduce yourself");

console. log(savedUserInput);


document.getElementById("username").innerText = savedUserInput;

// tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })