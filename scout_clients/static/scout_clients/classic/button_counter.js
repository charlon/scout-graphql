export function buttonCounter() {

  // es5/6 syntax
  let button = document.getElementById("button_counter"),
  counter = 0,
  text = document.getElementById("count_number");

  button.onclick = function() {
    counter ++;
    text.innerHTML = counter;
  };
  
}
